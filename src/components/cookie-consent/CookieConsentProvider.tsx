"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  acceptAllChoices,
  rejectAllChoices,
  type ConsentChoices,
} from "@/lib/consent/catalog";
import {
  applyConsentScripts,
  readConsent,
  saveConsent,
  type StoredConsent,
} from "@/lib/cookieConsent";
import { CookieConsentBanner, type ConsentView } from "./CookieConsentBanner";

// Module-level stores + useSyncExternalStore keep the server render and first
// client render identical (banner hidden), then show the banner after
// hydration only when no current-version choice is saved.

type CookieConsentContextValue = {
  choices: ConsentChoices | null;
  savedAt: string | null;
  hasChoice: boolean;
  view: ConsentView;
  setView: (view: ConsentView) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  saveChoices: (choices: ConsentChoices) => void;
  openPreferences: () => void;
  close: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

const consentListeners = new Set<() => void>();
const uiListeners = new Set<() => void>();

let consentSnapshot: StoredConsent | null = typeof document !== "undefined" ? readConsent() : null;
let showBannerUi = typeof document !== "undefined" ? consentSnapshot === null : false;
let viewUi: ConsentView = "notice";

function notifyConsent() {
  consentListeners.forEach((listener) => listener());
}

function notifyUi() {
  uiListeners.forEach((listener) => listener());
}

function subscribeConsent(listener: () => void) {
  consentListeners.add(listener);
  return () => {
    consentListeners.delete(listener);
  };
}

function subscribeUi(listener: () => void) {
  uiListeners.add(listener);
  return () => {
    uiListeners.delete(listener);
  };
}

function commit(choices: ConsentChoices) {
  consentSnapshot = saveConsent(choices);
  applyConsentScripts(consentSnapshot);
  notifyConsent();
  showBannerUi = false;
  viewUi = "notice";
  notifyUi();
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const stored = useSyncExternalStore(subscribeConsent, () => consentSnapshot, () => null);
  const showBanner = useSyncExternalStore(subscribeUi, () => showBannerUi, () => false);
  const view = useSyncExternalStore(subscribeUi, () => viewUi, () => "notice" as ConsentView);

  const choices = useMemo<ConsentChoices | null>(
    () => (stored ? { purposes: stored.purposes, partners: stored.partners } : null),
    [stored],
  );
  const hasChoice = stored !== null;

  useEffect(() => {
    if (choices) applyConsentScripts(choices);
  }, [choices]);

  const acceptAll = useCallback(() => commit(acceptAllChoices()), []);
  const rejectAll = useCallback(() => commit(rejectAllChoices()), []);
  const saveChoices = useCallback((next: ConsentChoices) => commit(next), []);

  const setView = useCallback((next: ConsentView) => {
    viewUi = next;
    notifyUi();
  }, []);

  const openPreferences = useCallback(() => {
    viewUi = "manage";
    showBannerUi = true;
    notifyUi();
  }, []);

  const close = useCallback(() => {
    // Without a saved choice the notice stays; the X only exists after one.
    showBannerUi = consentSnapshot === null;
    viewUi = "notice";
    notifyUi();
  }, []);

  const value = useMemo(
    () => ({
      choices,
      savedAt: stored?.ts ?? null,
      hasChoice,
      view,
      setView,
      acceptAll,
      rejectAll,
      saveChoices,
      openPreferences,
      close,
    }),
    [choices, stored, hasChoice, view, setView, acceptAll, rejectAll, saveChoices, openPreferences, close],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {showBanner ? <CookieConsentBanner /> : null}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return ctx;
}

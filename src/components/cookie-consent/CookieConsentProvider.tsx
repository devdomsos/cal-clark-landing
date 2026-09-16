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
  ACCEPT_ALL,
  ESSENTIAL_ONLY,
  applyConsentScripts,
  readConsent,
  saveConsent,
  type ConsentPreferences,
  type StoredConsent,
} from "@/lib/cookieConsent";
import { CookieConsentBanner } from "./CookieConsentBanner";

// Ported from jastado-landing. Module-level stores + useSyncExternalStore keep
// the server render and first client render identical (banner hidden), then
// show the banner after hydration only when no choice is saved.

type CookieConsentContextValue = {
  preferences: ConsentPreferences | null;
  hasChoice: boolean;
  showPreferences: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  saveCustomPreferences: (preferences: ConsentPreferences) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  backToSummary: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

const consentListeners = new Set<() => void>();
const uiListeners = new Set<() => void>();

let consentSnapshot: StoredConsent | null = typeof document !== "undefined" ? readConsent() : null;
let showBannerUi = typeof document !== "undefined" ? consentSnapshot === null : false;
let showPreferencesUi = false;

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

function commitPreferences(preferences: ConsentPreferences) {
  consentSnapshot = saveConsent(preferences);
  applyConsentScripts(preferences);
  notifyConsent();
  showPreferencesUi = false;
  showBannerUi = false;
  notifyUi();
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const stored = useSyncExternalStore(subscribeConsent, () => consentSnapshot, () => null);
  const showBanner = useSyncExternalStore(subscribeUi, () => showBannerUi, () => false);
  const showPreferences = useSyncExternalStore(subscribeUi, () => showPreferencesUi, () => false);

  const preferences = useMemo<ConsentPreferences | null>(
    () => (stored ? { essential: true, analytics: stored.analytics } : null),
    [stored],
  );
  const hasChoice = stored !== null;

  useEffect(() => {
    if (preferences) applyConsentScripts(preferences);
  }, [preferences]);

  const acceptAll = useCallback(() => commitPreferences(ACCEPT_ALL), []);
  const rejectNonEssential = useCallback(() => commitPreferences(ESSENTIAL_ONLY), []);
  const saveCustomPreferences = useCallback(
    (next: ConsentPreferences) => commitPreferences({ ...next, essential: true }),
    [],
  );

  const openPreferences = useCallback(() => {
    showPreferencesUi = true;
    showBannerUi = true;
    notifyUi();
  }, []);

  const closePreferences = useCallback(() => {
    showPreferencesUi = false;
    showBannerUi = consentSnapshot === null;
    notifyUi();
  }, []);

  const backToSummary = useCallback(() => {
    showPreferencesUi = false;
    notifyUi();
  }, []);

  const value = useMemo(
    () => ({
      preferences,
      hasChoice,
      showPreferences,
      acceptAll,
      rejectNonEssential,
      saveCustomPreferences,
      openPreferences,
      closePreferences,
      backToSummary,
    }),
    [
      preferences,
      hasChoice,
      showPreferences,
      acceptAll,
      rejectNonEssential,
      saveCustomPreferences,
      openPreferences,
      closePreferences,
      backToSummary,
    ],
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

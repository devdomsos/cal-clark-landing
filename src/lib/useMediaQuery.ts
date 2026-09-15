"use client";

import { useSyncExternalStore } from "react";

/** `false` on the server and during hydration, then the live match. */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

export const DESKTOP_QUERY = "(min-width: 1024px)";

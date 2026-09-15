/**
 * Cal Clark API (Hono, `server/` in the app repo). Server-side only: the
 * browser never talks to the API, so no CORS and no public env var.
 * Set CAL_CLARK_API_URL in production (e.g. https://api.coinclark.com).
 */
export function calClarkApiUrl(path: string): string {
  const base = process.env.CAL_CLARK_API_URL || "http://127.0.0.1:3847";
  return `${base.replace(/\/+$/, "")}${path}`;
}

export async function postCalClarkApi(path: string, body: unknown): Promise<Response> {
  return fetch(calClarkApiUrl(path), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
    signal: AbortSignal.timeout(15_000),
  });
}

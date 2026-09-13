import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { localeFromPath } from "@/lib/i18n/config";

export function middleware(request: NextRequest) {
  const locale = localeFromPath(request.nextUrl.pathname);
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images|favicon.ico|icon.svg|.*\\..*).*)"],
};

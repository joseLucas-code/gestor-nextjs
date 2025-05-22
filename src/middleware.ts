import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/auth", "profile_edit", "/admin"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;
  const homeURL = new URL("/", req.url);

  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(homeURL);
  }

  if (pathname.startsWith("/auth") && token) {
    return NextResponse.redirect(homeURL);
  }

  return NextResponse.next();
}

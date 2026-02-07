// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const sessionCookie = req.cookies.get("session")?.value;
  console.log("sessionCookie", sessionCookie);
  const authPages = ["/login", "/register"]; // страницы авторизации
  const protectedPaths = ["/dashboard"]; // защищённые пути

  // Пользователь авторизован
  if (sessionCookie && authPages.includes(url.pathname)) {
    url.pathname = "/dashboard/profile"; // куда редиректим авторизованного
    return NextResponse.redirect(url);
  }

  // Пользователь не авторизован
  if (
    !sessionCookie &&
    protectedPaths.some((p) => url.pathname.startsWith(p))
  ) {
    url.pathname = "/login"; // куда редиректим неавторизованного
    return NextResponse.redirect(url);
  }

  // Всё остальное
  return NextResponse.next();
}

// Применяем middleware только к нужным маршрутам
export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:path*", // защищённые пути
  ],
};

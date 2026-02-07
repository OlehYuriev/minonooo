import { adminAuth } from "@/firebase-admin";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { idToken } = await req.json();
  const cookieStore = await cookies();

  if (!idToken) {
    // если idToken null → удаляем cookie
    cookieStore.set("session", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 0,
      path: "/",
    });
    return NextResponse.json({ status: "ok", message: "Logged out" });
  }

  // иначе создаём session cookie как раньше
  const expiresIn = 5 * 60 * 1000; // 5 min
  const sessionCookie = await adminAuth.createSessionCookie(idToken, {
    expiresIn,
  });

  cookieStore.set("session", sessionCookie, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: expiresIn / 1000,
    path: "/",
  });

  return NextResponse.json({ status: "ok" });
}

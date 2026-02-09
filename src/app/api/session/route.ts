import { adminAuth } from "@/firebase-admin";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { idToken } = await req.json();
  const cookieStore = await cookies();

  // иначе создаём session cookie как раньше
  const expiresIn = 7 * 24 * 60 * 60 * 1000; // 7 days
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

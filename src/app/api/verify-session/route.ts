// /api/auth/verify-session.ts

import { adminAuth } from "@/firebase-admin";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("session")?.value;

  if (!cookie) return NextResponse.json({ valid: false });

  try {
    const decoded = await adminAuth.verifySessionCookie(cookie, true);
    return NextResponse.json({ valid: true, uid: decoded.uid });
  } catch {
    return NextResponse.json({ valid: false });
  }
}

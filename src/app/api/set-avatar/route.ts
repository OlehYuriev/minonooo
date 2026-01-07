import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  const res = NextResponse.json({ ok: true });

  if (url === null || url === undefined) {
    res.cookies.delete("avatarUrl");
    return res;
  }

  if (typeof url !== "string" || !url) {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  res.cookies.set({
    name: "avatarUrl",
    value: url,
    maxAge: 60 * 60 * 24 * 7, // 7 дней
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return res;
}

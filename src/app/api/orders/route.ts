// pages/api/orders/create.ts

import { adminDb } from "@/firebase-admin";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount, userId, items, contacts, status } = await req.json();

    const orderId = `order_${randomUUID()}`;

    const uid = userId || "anon";
    const orderRef = adminDb.doc(`orders/${orderId}`);

    await orderRef.set({
      createdAt: new Date(),
      userId: uid,
      amount,
      items,
      status,
      contacts,
    });

    return NextResponse.json({ orderId });
  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

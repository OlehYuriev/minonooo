// pages/api/orders/create.ts

import { adminDb } from "@/firebase-admin";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount, userId, items } = await req.json();

    const orderId = `order_${randomUUID()}`;

    // путь: orders/<uid>/userOrders/<orderId>
    // если userId есть, сохраняем под ним, если нет — генерируем "anon" id
    const uid = userId || "anon";
    const orderRef = adminDb.doc(`orders/${uid}/userOrders/${orderId}`);

    await orderRef.set({
      amount,
      items,
      status: "pending",
      createdAt: new Date(),
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

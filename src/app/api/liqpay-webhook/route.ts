import { adminDb } from "@/firebase-admin";
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const data = formData.get("data") as string;
    const signature = formData.get("signature") as string;

    const expectedSignature = crypto
      .createHash("sha1")
      .update(
        process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY +
          data +
          process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY,
      )
      .digest("base64");

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    const payload = JSON.parse(Buffer.from(data, "base64").toString("utf-8"));

    const {
      order_id,
      status,
      amount,
      currency,
      transaction_id,
      sender_card_mask2,
      sender_first_name,
      sender_last_name,
      sender_card_bank,
      sender_card_type,
    } = payload;

    const orderRef = adminDb.collection("orders").doc(order_id);
    const orderSnap = await orderRef.get();

    if (!orderSnap.exists) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (status === "success" || status === "sandbox") {
      await orderRef.update({
        status: "paid",
        paidAt: new Date(),
        payment: {
          provider: "liqpay",
          transactionId: transaction_id,
          amount,
          currency,
          sender_first_name: sender_first_name || "",
          sender_last_name: sender_last_name || "",
          sender_card_mask2: sender_card_mask2 || "",
          sender_card_bank: sender_card_bank || "",
          sender_card_type: sender_card_type || "",
          rawStatus: status,
        },
      });
    } else {
      await orderRef.update({
        status: "failed",
        liqpayStatus: status,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("LIQPAY WEBHOOK ERROR:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}

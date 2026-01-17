import { adminDb } from "@/firebase-admin";
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("sd");
  try {
    const formData = await req.formData();

    const data = formData.get("data") as string;
    const signature = formData.get("signature") as string;

    const expectedSignature = crypto
      .createHash("sha1")
      .update(
        "sandbox_Zq5SNZnD8FH8u6eMYY71z1MlBNtghVcrkpFn84h1" +
          data +
          "sandbox_Zq5SNZnD8FH8u6eMYY71z1MlBNtghVcrkpFn84h1"
      )
      .digest("base64");

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    const payload = JSON.parse(Buffer.from(data, "base64").toString("utf-8"));

    const { order_id, status, amount, currency, transaction_id, info } =
      payload;
    let userId = "anon"; // дефолт для гостей
    if (info) {
      try {
        const parsedInfo = JSON.parse(info);
        if (parsedInfo.userId) {
          userId = parsedInfo.userId;
        }
      } catch (err) {
        console.warn("Не удалось распарсить info:", err);
      }
    }

    console.log("info userId:", userId);
    // 👉 заказ лежит тут
    const orderRef = adminDb
      .collection("orders")
      .doc(userId)
      .collection("userOrders")
      .doc(order_id);
    const orderSnap = await orderRef.get();

    if (!orderSnap.exists) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    if (status === "success" || status === "sandbox") {
      await orderRef.update({
        status: "success",
        paidAt: new Date(),
        payment: {
          provider: "liqpay",
          transactionId: transaction_id,
          amount,
          currency,
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

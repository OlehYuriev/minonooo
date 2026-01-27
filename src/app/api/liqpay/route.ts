import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const amount = body.amount || 1;
  const orderId = body.orderId || "";
  const userId = body.userId || "anon";

  // 👇 создаём объект платежа
  const payment = {
    public_key: process.env.NEXT_PUBLIC_LIQPAY_PUBLICK_KEY,
    version: 3,
    action: "pay",
    amount,
    currency: "UAH",
    description: "За товар",
    order_id: orderId,
    sandbox: 1, // тестовый режим
    result_url:
      userId !== "anon"
        ? `${process.env.NEXT_PUBLIC_UR}/dashboard/orders?orderId=${orderId}`
        : `${process.env.NEXT_PUBLIC_UR}/catalog?orderId=${orderId}`,
    server_url: `${process.env.NEXT_PUBLIC_UR}/api/liqpay-webhook`,
  };

  const data = Buffer.from(JSON.stringify(payment)).toString("base64");

  const signature = crypto
    .createHash("sha1")
    .update(
      process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY +
        data +
        process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY,
    )
    .digest("base64");

  return NextResponse.json({ data, signature });
}

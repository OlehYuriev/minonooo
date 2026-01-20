import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const amount = body.amount || 1;
  const orderId = body.orderId || "";

  // 👇 создаём объект платежа
  const payment = {
    public_key: "sandbox_i74671435868",
    version: 3,
    action: "pay",
    amount,
    currency: "UAH",
    description: "За товар",
    order_id: orderId,
    sandbox: 1, // тестовый режим
    result_url: `https://transrationally-unsating-mercedez.ngrok-free.dev/checkout?orderId=${orderId}`,
    server_url: `https://transrationally-unsating-mercedez.ngrok-free.dev/api/liqpay-webhook`,
  };

  const data = Buffer.from(JSON.stringify(payment)).toString("base64");

  const signature = crypto
    .createHash("sha1")
    .update(
      "sandbox_Zq5SNZnD8FH8u6eMYY71z1MlBNtghVcrkpFn84h1" +
        data +
        "sandbox_Zq5SNZnD8FH8u6eMYY71z1MlBNtghVcrkpFn84h1"
    )
    .digest("base64");

  return NextResponse.json({ data, signature });
}

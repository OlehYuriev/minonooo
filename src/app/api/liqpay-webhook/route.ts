// src/app/api/liqpay-webhook/route.ts
import crypto from "crypto";

let lastPaymentStatus: "pending" | "success" | "failure" = "pending";
export const getLastPaymentStatus = () => lastPaymentStatus;

export async function POST(req: Request) {
  try {
    // читаем body как текст
    const bodyText = await req.text();

    // парсим x-www-form-urlencoded
    const params = new URLSearchParams(bodyText);
    const data = params.get("data")!;
    const signature = params.get("signature")!;

    const expectedSignature = crypto
      .createHash("sha1")
      .update(
        "sandbox_Zq5SNZnD8FH8u6eMYY71z1MlBNtghVcrkpFn84h1" +
          data +
          "sandbox_Zq5SNZnD8FH8u6eMYY71z1MlBNtghVcrkpFn84h1"
      )
      .digest("base64");

    if (signature !== expectedSignature) {
      console.log("⚠️ Invalid signature");
      return new Response("Invalid signature", { status: 400 });
    }

    const paymentResult = JSON.parse(
      Buffer.from(data, "base64").toString("utf-8")
    );
    console.log("💰 Webhook received:", paymentResult);

    if (paymentResult.status === "sandbox") lastPaymentStatus = "success";
    else lastPaymentStatus = "failure";

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Error", { status: 500 });
  }
}

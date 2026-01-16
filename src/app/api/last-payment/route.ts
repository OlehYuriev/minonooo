import { getLastPaymentStatus } from "../liqpay-webhook/route";

export async function GET() {
  const status = getLastPaymentStatus(); // берем значение из webhook
  return new Response(JSON.stringify({ status }), {
    headers: { "Content-Type": "application/json" },
  });
}

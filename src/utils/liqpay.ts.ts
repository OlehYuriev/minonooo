export const pay = async (amount: number, orderId: string, userId: string) => {
  const res = await fetch("/api/liqpay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, orderId, userId }),
  });
  const { data, signature } = await res.json();

  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://www.liqpay.ua/api/3/checkout";

  form.innerHTML = `
      <input type="hidden" name="data" value="${data}" />
      <input type="hidden" name="signature" value="${signature}" />
    `;

  document.body.appendChild(form);
  form.submit();
};

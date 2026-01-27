import { OrdersTable } from "@/sections/dashboard/orders-table";

export default function Orders() {
  return (
    <>
      <h1 className=" text-3xl font-medium mt-12">Історія замовлень</h1>

      <div className="overflow-auto w-full mt-8">
        <OrdersTable />
      </div>
    </>
  );
}

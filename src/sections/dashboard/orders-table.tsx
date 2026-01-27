"use client";
import { useAuth } from "@/auth/hooks/use-auth";
import { Loader } from "@/components/ui/loader";
import { db } from "@/firebase";
import { useClearCart } from "@/hooks/use-clear-cart";
import { IOrder } from "@/type/orders";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export function OrdersTable() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  useClearCart();
  const { user, loading } = useAuth();
  const [openOrders, setOpenOrders] = useState<Record<string, boolean>>({});

  const toggleOrder = (id: string) => {
    setOpenOrders((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const [loadingTable, setLoadingTable] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      if (!user && !loading) {
        setLoadingTable(false);
        return;
      }
      if (user && !loading) {
        try {
          const q = query(
            collection(db, "orders"),
            where("userId", "==", user.uid),
            orderBy("createdAt", "desc"),
          );

          const snapshot = await getDocs(q);

          const data = snapshot.docs.map(
            (doc) =>
              ({
                id: doc.id,
                ...doc.data(),
              }) as unknown as IOrder,
          );
          setOrders(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoadingTable(false);
        }
      }
    }

    fetchOrders();
  }, [loading, user]);

  if (loadingTable) {
    return <Loader />;
  }
  const classTr = "text-center align-middle px-3 py-2";
  return (
    <table className="min-w-[800px] border-collapse  w-full border border-gray-300 ">
      <thead className="p-3">
        <tr>
          <th className={classTr}>Дата</th>
          <th className={classTr}>Статус</th>
          <th className={classTr}>Оплата</th>
          <th className={classTr}>Сума(грн)</th>
          <th className={`min-w-[350px] ${classTr}`}>Тип доставки</th>
          <th className={classTr}>Товари</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <React.Fragment key={order.id}>
            <tr className="p-10">
              <td className={classTr}>
                {order.createdAt?.toDate().toLocaleDateString("uk-UA")}
              </td>
              <td className={classTr}>
                {order.status === "paid" ? "Оплачено" : "Не оплачено"}
              </td>
              <td className={classTr}>{order.contacts.paymentType} </td>
              <td className={classTr}>{order.amount.toFixed(2)} </td>
              <td className={classTr}>
                {order.contacts.deliveryType}{" "}
                {order.contacts.deliveryType === "Достаавка Новою Поштою" &&
                order.contacts.city &&
                order.contacts.department
                  ? ` ${order.contacts.city.label}, ${order.contacts.department.label}`
                  : ""}
              </td>
              <td className={classTr}>
                <button
                  onClick={() => toggleOrder(order.id)}
                  className="transition-transform duration-300 cursor-pointer"
                >
                  <span
                    className={
                      openOrders[order.id]
                        ? "rotate-90 inline-block"
                        : "inline-block"
                    }
                  >
                    ▶
                  </span>
                </button>
              </td>
            </tr>

            <tr>
              <td colSpan={7}>
                <div
                  className={`
													overflow-auto transition-all duration-300 ease-in-out
													 ${openOrders[order.id] ? "max-h-[500px] opacity-100 " : "max-h-0 opacity-0"}
																																							 `}
                >
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                    }}
                  >
                    <thead className="bg-gray-100">
                      <tr>
                        <th>Назва</th>
                        <th>Розмір</th>
                        <th>Колір</th>
                        <th>Кількість</th>
                        <th>Ціна(грн)</th>
                      </tr>
                    </thead>

                    <tbody className="bg-gray-100">
                      {order.items.map((item, idx) => (
                        <tr key={idx}>
                          <td className={`align-start py-2 pl-5`}>
                            <div className="grid grid-cols-[70px_1fr] gap-2 items-center">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={70}
                                height={70}
                                sizes="100px"
                                className="object-cover rounded-2xl"
                                priority
                              />
                              <span>{item.name}</span>
                            </div>
                          </td>

                          <td className={classTr}>{item.selectedSize}</td>
                          <td className={classTr}>{item.selectedColor}</td>
                          <td className={classTr}>x{item.quantity}</td>
                          <td className={classTr}>{item.totalPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

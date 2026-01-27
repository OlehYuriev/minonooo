import { db } from "@/firebase";
import { clearCart } from "@/store/use-basket-store";
import { toast } from "@/utils/toast";
import { doc, onSnapshot } from "firebase/firestore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function useClearCart() {
  const params = useSearchParams();
  const orderId = params.get("orderId");

  useEffect(() => {
    if (!orderId) return;

    const orderRef = doc(db, "orders", orderId);

    // 🔹 Реалтайм обновление через onSnapshot
    const unsubscribe = onSnapshot(
      orderRef,
      (docSnap) => {
        if (!docSnap.exists()) {
          return;
        }
        const data = docSnap.data();
        if (data.status === "paid") {
          toast("Оплата пройшла успішно!");
          clearCart();
        }
      },
      (error) => {
        console.error("onSnapshot error:", error);
      },
    );

    return () => unsubscribe();
  }, [orderId]);
}

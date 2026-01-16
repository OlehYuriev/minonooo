import { adminDb } from "@/firebase-admin";
import { IProduct } from "@/type/product";

export async function getProductServer(id: string) {
  const docSnap = await adminDb.collection("products").doc(id).get();
  if (!docSnap.exists) return null;
  return { id: docSnap.id, ...docSnap.data() };
}

// Серверный fetch — несколько товаров (для первой страницы)
export async function getProductsServer(): Promise<IProduct[]> {
  const snap = await adminDb.collection("products").get();

  const products = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as unknown as IProduct[];

  return products;
}

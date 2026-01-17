import { adminDb } from "@/firebase-admin";
import { IProduct } from "@/type/product";

export async function getProductServer(id: string): Promise<IProduct | null> {
  const querySnap = await adminDb
    .collection("products")
    .where("id", "==", Number(id)) // якщо id числовий
    .limit(1)
    .get();

  if (querySnap.empty) {
    console.log("No product found with id =", id);
    return null;
  }

  const doc = querySnap.docs[0];
  const data = doc.data();

  return {
    id: doc.id, // або data.id, якщо хочеш саме твоє поле
    ...data,
  } as unknown as IProduct;
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

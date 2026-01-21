import { CheckoutFormData } from "@/sections/checkout/utils/create-order";
import { Timestamp } from "firebase-admin/firestore";
import { CartItem } from "./product";

interface IPaymentOrder {
  amount: number;
  currency: string;
  provider: string;
  rawStatus: string;
  sender_card_bank: string;
  sender_card_mask2: string;
  sender_card_type: string;
  sender_first_name: string;
  sender_last_name: string;
  transactionId: number;
}

export interface IOrder {
  id: string;
  contacts: CheckoutFormData;
  items: Omit<CartItem, "variants">[];
  amount: number;
  status: string;
  createdAt: Timestamp;
  userId: string;
  paidAt?: Timestamp;
  payment?: IPaymentOrder;
}

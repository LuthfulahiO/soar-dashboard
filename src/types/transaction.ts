export type TransactionType = "card" | "paypal" | "cash";

export interface Transaction {
  id: string;
  type: TransactionType;
  title: string;
  date: string;
  amount: number;
  flow: "debit" | "credit";
}

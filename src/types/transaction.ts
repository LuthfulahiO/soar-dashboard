export type TransactionType = "card" | "paypal" | "cash";
export type TransactionFlow = "credit" | "debit";

export interface Transaction {
  id: string;
  type: TransactionType;
  title: string;
  date: string;
  amount: number;
  flow: TransactionFlow;
}

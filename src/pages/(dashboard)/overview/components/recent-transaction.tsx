import { TransactionItem } from "./transaction-item";

import { Transaction } from "@/types/transaction";

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    type: "card",
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: 850,
    flow: "debit",
  },
  {
    id: "2",
    type: "paypal",
    title: "Deposit from PayPal",
    date: "25 January 2021",
    amount: 2500,
    flow: "credit",
  },
  {
    id: "3",
    type: "cash",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5450,
    flow: "credit",
  },
];

interface RecentTransactionProps {
  transactions?: Transaction[];
}

export function RecentTransaction({
  transactions = MOCK_TRANSACTIONS,
}: RecentTransactionProps) {
  return (
    <div className="md:bg-white md:py-[1.5625rem] md:pl-[1.5625rem] md:pr-6 overflow-y-auto rounded-[25px] md:gap-[10px] gap-3 flex flex-col md:h-[235px]">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

import { Skeleton } from "@/components/skeleton";
import { useRecentTransactions } from "@/hooks/use-queries";

import { TransactionItem } from "./transaction-item";

export function RecentTransaction() {
  const { data: transactions, isLoading, error } = useRecentTransactions();

  if (error) {
    return (
      <div className="md:bg-white md:py-[1.5625rem] md:pl-[1.5625rem] md:pr-6 rounded-[25px] md:h-[235px] flex items-center justify-center">
        <p className="text-error">Failed to load transactions</p>
      </div>
    );
  }

  if (isLoading || !transactions) {
    return (
      <div className="md:bg-white md:py-[1.5625rem] md:pl-[1.5625rem] md:pr-6 rounded-[25px] md:h-[235px]">
        <div className="flex flex-col gap-4">
          {[...Array(3)].map((_, index) => (
            <Skeleton
              key={index}
              className="h-12 w-full md:bg-secondary/20 bg-neutral-500"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="md:bg-white md:py-[1.5625rem] md:pl-[1.5625rem] md:pr-6 overflow-y-auto rounded-[25px] md:gap-[10px] flex flex-col md:h-[235px]">
      {transactions.length === 0 ? (
        <p className="text-secondary text-center">No transactions found</p>
      ) : (
        transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))
      )}
    </div>
  );
}

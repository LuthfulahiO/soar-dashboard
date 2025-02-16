import { CardIcon, CashIcon, PaypalIcon } from "@/assets/icons";
import { Transaction, TransactionType } from "@/types/transaction";

const TransactionIcons: Record<
  TransactionType,
  React.FC<{ className?: string }>
> = {
  card: CardIcon,
  paypal: PaypalIcon,
  cash: CashIcon,
};

interface TransactionItemProps {
  transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const Icon = TransactionIcons[transaction.type];
  const isDebit = transaction.flow === "debit";
  const amountPrefix = isDebit ? "-" : "+";
  const amountClass = isDebit ? "text-error" : "text-success";

  return (
    <div className="flex flex-row justify-between items-center">
      <Icon className="md:size-[3.4375rem] size-[3.125rem]" />
      <div className="flex flex-col gap-[7px] flex-1 items-start ml-[17px]">
        <h3 className="font-medium md:text-base text-sm">
          {transaction.title}
        </h3>
        <span className="text-secondary md:text-[0.9375rem] text-xs md:leading-[1.134375rem]">
          {transaction.date}
        </span>
      </div>
      <span
        className={`${amountClass} font-medium md:text-base text-[0.6875rem]`}
      >
        {amountPrefix}${Math.abs(transaction.amount).toLocaleString()}
      </span>
    </div>
  );
}

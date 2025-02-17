import { Link } from "react-router";

import { DashboardBody } from "@/components/dashboard-body";
import { DashboardHeader } from "@/components/dashboard-header";
import { Skeleton } from "@/components/skeleton";
import { useCards } from "@/hooks/use-queries";
import { cn } from "@/lib/utils";

import { BalanceHistory } from "./components/balance-history";
import { CardDetails } from "./components/card-details";
import { ExpenseStats } from "./components/expense-stats";
import { QuickTransfer } from "./components/quick-transfer";
import { RecentTransaction } from "./components/recent-transaction";
import { WeeklyActivity } from "./components/weekly-activity";

function Overview() {
  const { data: cardsData, isLoading: isCardsLoading } = useCards();

  return (
    <div className="min-h-full w-full flex flex-col md:bg-neutral-50">
      <DashboardHeader title="Overview" />
      <DashboardBody>
        {/* Top Row - Cards and Recent Transactions */}
        <div className="flex flex-col xl:flex-row gap-[1.875rem]">
          <div className="w-full xl:w-[calc(730/1110*100%)]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
                My Cards
              </h2>
              <Link
                to="/credit-cards"
                className={cn(
                  "text-[1.0625rem] font-semibold leading-[1.285625] cursor-pointer",
                  "transition-all duration-200",
                  "hover:text-neutral-700 hover:scale-105",
                  "active:scale-95",
                  "focus:outline-none focus-visible:ring-2",
                  "focus-visible:ring-neutral-900/20 focus-visible:ring-offset-2"
                )}
              >
                See All
              </Link>
            </div>
            <div className="w-full overflow-hidden">
              {isCardsLoading ? (
                <div className="flex gap-[1.875rem] overflow-x-auto hide-scrollbar w-full">
                  <Skeleton className="min-w-[265px] w-[265px] h-[170px] md:min-w-[350px] md:w-[350px] md:h-[235px] md:bg-white/70 bg-neutral-500 rounded-[25px]" />
                  <Skeleton className="min-w-[265px] w-[265px] h-[170px] md:min-w-[350px] md:w-[350px] md:h-[235px] md:bg-white/70 bg-neutral-500 rounded-[25px]" />
                </div>
              ) : (
                <div className="flex gap-[1.875rem] overflow-x-auto hide-scrollbar w-full">
                  {cardsData?.map((card, index) => (
                    <CardDetails
                      key={index}
                      isDefault={card.isDefault}
                      balance={card.balance}
                      cardHolder={card.cardHolder}
                      validThru={card.validThru}
                      cardNumber={card.cardNumber}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full xl:w-[calc(350/1110*100%)]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
                Recent Transaction
              </h2>
            </div>

            <RecentTransaction />
          </div>
        </div>

        {/* Middle Row - Weekly Activity and Expense Statistics */}
        <div className="flex flex-col xl:flex-row gap-[1.875rem] md:mt-0 mt-10">
          <div className="w-full xl:w-[calc(730/1110*100%)]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
                Weekly Activity
              </h2>
            </div>
            <WeeklyActivity />
          </div>
          <div className="w-full xl:w-[calc(350/1110*100%)]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
                Expense Statistics
              </h2>
            </div>
            <ExpenseStats />
          </div>
        </div>

        {/* Bottom Row - Quick Transfer and Balance History */}
        <div className="flex flex-col xl:flex-row gap-[1.875rem] md:mt-0 mt-10">
          <div className="w-full xl:w-[calc(445/1110*100%)]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
                Quick Transfer
              </h2>
            </div>
            <QuickTransfer />
          </div>
          <div className="w-full xl:w-[calc(635/1110*100%)] md:mt-0 mt-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
                Balance History
              </h2>
            </div>
            <BalanceHistory />
          </div>
        </div>
      </DashboardBody>
    </div>
  );
}

export default Overview;

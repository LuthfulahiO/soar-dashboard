import { DashboardBody } from "@/components/dashboard-body";
import { DashboardHeader } from "@/components/dashboard-header";

import { CardDetails } from "./components/card-details";
import { RecentTransaction } from "./components/recent-transaction";

const cards = [
  {
    isDefault: true,
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    validThru: "12/22",
    cardNumber: "3778 **** **** 1234",
  },
  {
    balance: 8432.19,
    cardHolder: "Sarah Johnson",
    validThru: "08/26",
    cardNumber: "4532 **** **** 5678",
  },
];

function Overview() {
  return (
    <div className="min-h-full w-full flex flex-col md:bg-neutral-50">
      <DashboardHeader title="Overview" />
      <DashboardBody>
        {/* Top Row - Cards and Recent Transactions */}
        <div className="flex flex-col lg:flex-row gap-[1.875rem]">
          <div className="w-full lg:w-[calc(730/1110*100%)]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
                My Cards
              </h2>
              <button className="text-[1.0625rem] font-semibold leading-[1.285625] cursor-pointer">
                See All
              </button>
            </div>
            <div className="w-full overflow-hidden">
              <div className="flex gap-[1.875rem] overflow-x-auto hide-scrollbar w-full">
                {cards.map((card, index) => (
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
            </div>
          </div>

          <div className="w-full lg:w-[calc(350/1110*100%)]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
                Recent Transaction
              </h2>
            </div>

            <RecentTransaction />
          </div>
        </div>

        {/* Middle Row - Weekly Activity and Expense Statistics */}
        <div className="flex flex-col lg:flex-row gap-[1.875rem]">
          <div className="w-full lg:w-[calc(730/1110*100%)] min-h-[300px]">
            <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
              Weekly Activity
            </h2>
            <div className="h-[322px]">{/* Weekly Activity chart */}</div>
          </div>
          <div className="w-full lg:w-[calc(350/1110*100%)] min-h-[300px]">
            <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
              Expense Statistics
            </h2>
            <div className="h-[322px]">{/* Pie chart */}</div>
          </div>
        </div>

        {/* Bottom Row - Quick Transfer and Balance History */}
        <div className="flex flex-col lg:flex-row gap-[1.875rem]">
          <div className="w-full lg:w-[calc(445/1110*100%)] min-h-[300px]">
            <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
              Quick Transfer
            </h2>
            <div className="h-[230px]">
              <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                {/* Quick Transfer */}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[calc(635/1110*100%)] min-h-[300px] ">
            <h2 className="text-[1.375rem] font-semibold leading-[1.664375rem]">
              Balance History
            </h2>
            <div className="h-[230px]">{/* Line chart */}</div>
          </div>
        </div>
      </DashboardBody>
    </div>
  );
}

export default Overview;

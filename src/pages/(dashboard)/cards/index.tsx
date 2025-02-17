import { CardDetails } from "../overview/components/card-details";

import { DashboardBody } from "@/components/dashboard-body";
import { DashboardHeader } from "@/components/dashboard-header";
import { Skeleton } from "@/components/skeleton";
import { useCards } from "@/hooks/use-queries";

function Cards() {
  const { data: cardsData, isLoading: isCardsLoading } = useCards();

  return (
    <div className="min-h-full w-full flex flex-col bg-neutral-50">
      <DashboardHeader title="Credit Cards" />
      <DashboardBody>
        {isCardsLoading ? (
          <div className="flex flex-wrap justify-center gap-[1.875rem]">
            <Skeleton className="min-w-[265px] w-[265px] h-[170px] md:min-w-[350px] md:w-[350px] md:h-[235px] bg-white/70 rounded-[25px]" />
            <Skeleton className="min-w-[265px] w-[265px] h-[170px] md:min-w-[350px] md:w-[350px] md:h-[235px] bg-white/70 rounded-[25px]" />
            <Skeleton className="min-w-[265px] w-[265px] h-[170px] md:min-w-[350px] md:w-[350px] md:h-[235px] bg-white/70 rounded-[25px]" />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-[1.875rem]">
            {cardsData?.map((card, index) => (
              <div key={index}>
                <CardDetails
                  isDefault={card.isDefault}
                  balance={card.balance}
                  cardHolder={card.cardHolder}
                  validThru={card.validThru}
                  cardNumber={card.cardNumber}
                />
              </div>
            ))}
          </div>
        )}
      </DashboardBody>
    </div>
  );
}

export default Cards;

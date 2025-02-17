import { ChipIcon, ChipIcon2, MastercardIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

interface CardDetailsProps {
  isDefault?: boolean;
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

export function CardDetails({
  isDefault = false,
  balance,
  cardHolder,
  validThru,
  cardNumber,
}: CardDetailsProps) {
  return (
    <div
      className={cn(
        "min-w-[265px] w-[265px] h-[170px] md:min-w-[350px] md:w-[350px] md:h-[235px]",
        "rounded-[25px] flex flex-col justify-between font-lato",
        "bg-white border border-[#DFEAF2]",
        isDefault &&
          "bg-gradient-to-r from-[#5B5A6F] to-black text-white border-none"
      )}
    >
      <div className="flex flex-col flex-1 md:gap-[2.125rem] gap-[1.4375rem] pt-[1.0625rem] px-5 md:px-6 md:pt-6 md:pr-6 md:pl-[1.625rem]">
        <div className="w-full flex justify-between">
          <div>
            <p className="md:text-xs text-[0.6875rem] leading-3.5">Balance</p>
            <p className="md:text-xl text-base font-semibold md:leading-6">
              ${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
          </div>
          {isDefault ? (
            <ChipIcon className="size-[29px] md:size-[35px]" />
          ) : (
            <ChipIcon2 className="size-[29px] md:size-[35px]" />
          )}
        </div>

        <div className="w-full flex flex-row gap-16">
          <div className="flex flex-col md:gap-0.5">
            <p
              className={cn(
                "md:text-xs text-[0.625rem] uppercase leading-[0.90625rem]",
                isDefault ? "text-white/70" : "text-black/70"
              )}
            >
              Card Holder
            </p>
            <p className="md:text-[0.9375rem] text-[0.8125rem] font-semibold leading-[1.125rem]">
              {cardHolder}
            </p>
          </div>

          <div className="flex flex-col md:gap-0.5">
            <p
              className={cn(
                "md:text-xs text-[0.625rem] uppercase leading-[0.90625rem]",
                isDefault ? "text-white/70" : "text-black/70"
              )}
            >
              VALID THRU
            </p>
            <p className="md:text-[0.9375rem] text-[0.8125rem] font-semibold leading-[1.125rem]">
              {validThru}
            </p>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "h-[51px] md:h-[70px] w-full bg-gradient-to-b from-white/15 to-white/0 flex justify-between items-center px-5 md:px-6",
          !isDefault && "border-t border-[#DFEAF2]"
        )}
      >
        <p className="md:text-[1.375rem] text-[0.9375rem] font-semibold">
          {cardNumber}
        </p>
        <MastercardIcon
          className={cn(
            "md:w-11 md:h-[1.875rem] w-8 h-6",
            isDefault ? "text-white" : "text-[#9199AF]"
          )}
        />
      </div>
    </div>
  );
}

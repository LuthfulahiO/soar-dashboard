import { useState } from "react";

import { SendIcon } from "@/assets/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/carousel";
import { cn } from "@/lib/utils";

type Contact = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const contactList: Contact[] = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    image: "/images/livia.png",
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    image: "/images/randy.png",
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    image: "/images/workman.png",
  },
  {
    id: 4,
    name: "Andy",
    role: "CTO",
    image: "/images/profile-picture.png",
  },
  {
    id: 5,
    name: "Mia",
    role: "CTO",
    image: "/images/profile-picture.png",
  },
];

export function QuickTransfer() {
  const [selectedContactId, setSelectedContactId] = useState<number | null>(
    null
  );
  const [amount, setAmount] = useState<string>("");

  const handleSend = () => {
    if (!selectedContactId || !amount) {
      return;
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-[25px] md:gap-[30px] md:bg-white md:py-[2.1875rem] md:px-[1.5625rem]">
      <Carousel
        className="relative w-[90%]"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {contactList.map((contact) => (
            <CarouselItem key={contact.id} className="basis-1/3">
              <ContactCard
                {...contact}
                isSelected={contact.id === selectedContactId}
                onClick={() => setSelectedContactId(contact.id)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>

      <TransferInput
        amount={amount}
        onAmountChange={setAmount}
        onSend={handleSend}
        disabled={!selectedContactId}
      />
    </div>
  );
}

interface ContactCardProps extends Contact {
  isSelected: boolean;
  onClick: () => void;
}

const ContactCard = ({
  isSelected,
  name,
  role,
  image,
  onClick,
}: ContactCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-105",
        isSelected && "transform scale-105"
      )}
    >
      <div className={cn("relative rounded-full p-1")}>
        <img
          className="size-[3.125rem] lg:size-[4.375rem] rounded-full"
          src={image}
          alt={`${name}'s profile`}
        />
      </div>
      <p className={cn("mt-4 mb-1", isSelected && "font-extrabold")}>{name}</p>
      <p
        className={cn(
          "text-secondary text-[0.9375rem]",
          isSelected && "font-extrabold"
        )}
      >
        {role}
      </p>
    </div>
  );
};

interface TransferInputProps {
  amount: string;
  onAmountChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
}

const TransferInput = ({
  amount,
  onAmountChange,
  onSend,
  disabled,
}: TransferInputProps) => {
  return (
    <div className="flex flex-row w-full justify-between items-center gap-6">
      <div className="text-secondary whitespace-nowrap">Write Amount</div>
      <div className="relative">
        <input
          className={cn(
            "w-[16.5625rem] rounded-full py-4 md:pl-8 pl-4 bg-[#EDF1F7]",
            "placeholder:text-secondary text-neutral-900 md:pr-36 pr-36",
            "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none",
            "[&::-webkit-inner-spin-button]:appearance-none",
            "focus:outline-none focus:ring-2 focus:ring-neutral-900/20",
            "transition-all duration-200"
          )}
          placeholder="0.00"
          type="number"
          inputMode="decimal"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />

        <button
          onClick={onSend}
          disabled={disabled}
          className={cn(
            "rounded-full bg-neutral-900 text-white",
            "flex flex-row items-center justify-center gap-3",
            "px-6 py-3.5 absolute right-0 top-0 bottom-0",
            "transition-all duration-200",
            "hover:bg-neutral-900/90 active:scale-95",
            "disabled:bg-neutral-400 disabled:cursor-not-allowed",
            "focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
          )}
        >
          Send <SendIcon />
        </button>
      </div>
    </div>
  );
};

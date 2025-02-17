import { cloneElement } from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}

export function IconButton({
  icon,
  onClick,
  ariaLabel,
  className,
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "size-[3.125rem] bg-neutral-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-neutral-50/60 transition-colors",
        className
      )}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {cloneElement(icon as React.ReactElement)}
    </button>
  );
}

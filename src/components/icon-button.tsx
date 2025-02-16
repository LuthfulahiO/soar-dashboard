import { cloneElement } from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
}

export function IconButton({ icon, onClick, ariaLabel }: IconButtonProps) {
  return (
    <button
      type="button"
      className="size-[3.125rem] bg-neutral-50 rounded-full flex items-center justify-center cursor-pointer hover:bg-neutral-50/60 transition-colors"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {cloneElement(icon as React.ReactElement)}
    </button>
  );
}

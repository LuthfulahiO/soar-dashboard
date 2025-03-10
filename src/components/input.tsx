import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full h-[3.125rem] px-4 rounded-[0.9375rem] bg-white border border-[#DFEAF2]",
          "text-[0.9375rem] placeholder:text-secondary",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-neutral-900/20",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        ref={ref}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? "error-message" : undefined}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

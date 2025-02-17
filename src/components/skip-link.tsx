import { forwardRef } from "react";

import { cn } from "@/lib/utils";

// TODO: Complete skip link functionality
const SkipLink = forwardRef<HTMLAnchorElement, React.ComponentProps<"a">>(
  ({ className, children = "Skip to main content", ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "sr-only focus:not-sr-only",
          "absolute left-4 top-4 z-[100]",
          "bg-white px-4 py-2 text-sm font-medium text-primary rounded-md shadow-md",
          "focus:outline-none focus:ring-2 focus:ring-primary",
          "pointer-events-none focus:pointer-events-auto",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);
SkipLink.displayName = "SkipLink";

export { SkipLink };

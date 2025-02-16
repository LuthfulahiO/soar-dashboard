import { forwardRef, ComponentProps, useState, useCallback } from "react";

import { SidebarContext } from "./sidebar-context";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const SidebarProvider = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, children, ...props }, ref) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = useState(true);

    const toggleSidebar = useCallback(() => {
      setOpenMobile((open) => !open);
    }, [setOpenMobile]);

    return (
      <SidebarContext.Provider
        value={{
          isMobile,
          openMobile,
          setOpenMobile,
          toggleSidebar,
        }}
      >
        <div
          className={cn("relative flex min-h-svh w-full", className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";

export default SidebarProvider;

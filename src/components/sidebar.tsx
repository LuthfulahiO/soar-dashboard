import { forwardRef } from "react";

import { SheetContent, Sheet } from "./sheet";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar-context";

const Sidebar = forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, children, ...props }, ref) => {
    const { isMobile, openMobile, setOpenMobile } = useSidebar();

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[var(--sidebar-width)] p-0 [&>button]:hidden"
            side="left"
            role="navigation"
            aria-label="Main navigation"
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div ref={ref} className="hidden md:block">
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-10 hidden h-svh w-[var(--sidebar-width)] border-r border-r-border md:flex",
            className
          )}
          role="navigation"
          aria-label="Main navigation"
          {...props}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </div>
      </div>
    );
  }
);
Sidebar.displayName = "Sidebar";

const SidebarInset = forwardRef<HTMLDivElement, React.ComponentProps<"main">>(
  ({ className, ...props }, ref) => {
    const { isMobile } = useSidebar();

    return (
      <main
        id="main-content"
        ref={ref}
        className={cn(
          "relative flex min-h-svh flex-1 flex-col",
          !isMobile && "ml-[var(--sidebar-width)]",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarInset.displayName = "SidebarInset";

export { Sidebar, SidebarInset };

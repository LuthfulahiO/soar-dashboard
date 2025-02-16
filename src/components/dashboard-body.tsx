import { cn } from "@/lib/utils";

export function DashboardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full max-w-7xl flex-1 flex-col gap-6 self-center py-6 px-[1.5625rem] lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}

import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/chart";
import { Skeleton } from "@/components/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import { useWeeklyActivity } from "@/hooks/use-queries";

const CHART_COLORS = {
  deposit: "#396AFF",
  withdraw: "#232323",
} as const;

export function WeeklyActivity() {
  const { data: activityData, isLoading } = useWeeklyActivity();
  const isMobile = useIsMobile();

  if (isLoading) {
    return (
      <Skeleton className="h-[300px] w-full md:bg-white/70 bg-neutral-500 rounded-[25px]" />
    );
  }

  return (
    <div className="flex flex-col gap-3 overflow-y-auto rounded-[25px] md:gap-[10px] md:bg-white md:py-7 md:pl-[2.0625rem] md:pr-[1.875rem]">
      <div className="flex w-full justify-end gap-[1.875rem]">
        <LegendItem color={CHART_COLORS.deposit} label="Deposit" />
        <LegendItem color={CHART_COLORS.withdraw} label="Withdraw" />
      </div>

      <ChartContainer
        config={{
          deposit: {
            label: "Deposit",
            color: CHART_COLORS.deposit,
          },
          withdraw: {
            label: "Withdraw",
            color: CHART_COLORS.withdraw,
          },
        }}
        className="h-[226px] w-full"
      >
        <BarChart
          data={activityData}
          barGap={isMobile ? 5 : 12}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: -20,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickCount={6}
            tickFormatter={(value) => `$${value}`}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                className="bg-neutral-900/80 text-white"
                formatter={(value) => `$${value}`}
                hideLabel={false}
                hideIndicator={false}
              />
            }
          />
          <Bar
            dataKey="withdraw"
            barSize={isMobile ? 7 : 15}
            fill="var(--color-withdraw)"
            radius={30}
          />
          <Bar
            dataKey="deposit"
            barSize={isMobile ? 7 : 15}
            fill="var(--color-deposit)"
            radius={30}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

interface LegendItemProps {
  color: string;
  label: string;
}

function LegendItem({ color, label }: LegendItemProps) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="size-3 rounded-full md:size-[0.9375rem]"
        style={{ backgroundColor: color }}
      />
      <p className="text-xs text-secondary md:text-[0.9375rem]">{label}</p>
    </div>
  );
}

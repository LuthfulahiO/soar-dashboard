import {
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Tooltip,
  Area,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/chart";
import { Skeleton } from "@/components/skeleton";
import { useBalanceHistory } from "@/hooks/use-queries";

interface CustomTickProps {
  x: number;
  y: number;
  payload: {
    value: string | number;
  };
}

const CHART_MARGINS = {
  top: 10,
  right: 0,
  bottom: 0,
  left: -25,
} as const;

const GRADIENT_COLORS = {
  start: "#2D60FF80",
  end: "#2D60FF00",
} as const;

const CustomXAxisTick = ({ x, y, payload }: CustomTickProps) => (
  <g>
    <line
      orientation="left"
      width="60"
      height="188"
      className="stroke-secondary"
      fill="none"
      x1={x}
      x2={x}
      y1={y - 8}
      y2={y}
    />
    <text
      x={x}
      y={y + 10}
      textAnchor="middle"
      alignmentBaseline="central"
      className="weekly-activity-tick"
    >
      {payload.value}
    </text>
  </g>
);

const CustomYAxisTick = ({ x, y, payload }: CustomTickProps) => (
  <g>
    <line
      orientation="left"
      width="60"
      height="188"
      fill="none"
      className="stroke-secondary"
      x1={x + 8}
      x2={x + 2}
      y1={y}
      y2={y}
    />
    <text x={x - 15} y={y} textAnchor="middle" alignmentBaseline="central">
      {payload.value}
    </text>
  </g>
);

export function BalanceHistory() {
  const { data: balanceData, isLoading, error } = useBalanceHistory();

  if (error) {
    return (
      <div className="flex h-[236px] items-center justify-center rounded-[25px] md:bg-white">
        <p className="text-error">Failed to load balance history</p>
      </div>
    );
  }

  if (isLoading || !balanceData) {
    return (
      <Skeleton className="h-[236px] w-full md:bg-white/70 bg-neutral-500 rounded-[25px]" />
    );
  }

  return (
    <div className="flex flex-col gap-3 overflow-y-auto rounded-[25px] md:gap-[10px] md:bg-white md:py-7 md:pl-[2.0625rem] md:pr-[1.875rem] pl-4 pr-2">
      <ChartContainer config={{}} className="h-[236px] w-full">
        <AreaChart data={balanceData} margin={CHART_MARGINS}>
          <defs>
            <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={GRADIENT_COLORS.start}
                stopOpacity={0.9}
              />
              <stop offset="100%" stopColor={GRADIENT_COLORS.end} />
            </linearGradient>
          </defs>

          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={CustomXAxisTick}
          />

          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tick={CustomYAxisTick}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#1814F3"
            fill="url(#colorFill)"
            strokeWidth={3}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}

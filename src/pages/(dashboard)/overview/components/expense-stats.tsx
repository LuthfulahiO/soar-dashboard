"use client";

import { PieChart, Pie, Cell, Sector } from "recharts";
import type {
  PieLabelRenderProps,
  PieSectorDataItem,
} from "recharts/types/polar/Pie";

import { ChartConfig, ChartContainer } from "@/components/chart";
import { useIsMobile } from "@/hooks/use-mobile";

interface ExpenseData {
  name: string;
  percentage: number;
  color: string;
}

const EXPENSE_DATA: ExpenseData[] = [
  {
    name: "Bill Expense",
    percentage: 15,
    color: "#FC7900",
  },
  {
    name: "Entertainment",
    percentage: 30,
    color: "#343C6A",
  },
  {
    name: "Investment",
    percentage: 35,
    color: "#396AFF",
  },
  {
    name: "Others",
    percentage: 20,
    color: "#232323",
  },
];

const CustomLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  name,
}: PieLabelRenderProps) => {
  const RADIAN = Math.PI / 180;
  const radius = Number(outerRadius) * 0.77;
  const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
  const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);
  const percentage = `${((percent ?? 0) * 100).toFixed(0)}%`;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-base font-bold"
    >
      <tspan x={x} dx={2.5} dy="-0.5em">
        {percentage}
      </tspan>
      <tspan x={x} dx={12} dy="1em">
        {name}
      </tspan>
    </text>
  );
};

const CustomShape = ({
  outerRadius = 0,
  percent = 0,
  ...props
}: PieSectorDataItem) => (
  <g>
    <Sector {...props} outerRadius={outerRadius + (1 / (percent || 0.1)) * 6} />
  </g>
);

export function ExpenseStats() {
  const isMobile = useIsMobile();

  const chartConfig: ChartConfig = Object.fromEntries(
    EXPENSE_DATA.map((entry) => [
      entry.name,
      {
        label: entry.name,
        color: entry.color,
      },
    ])
  );

  return (
    <div className="flex h-[311px] flex-col items-center justify-center gap-3 overflow-y-auto rounded-[25px] md:gap-[10px] md:bg-white">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-full max-w-[300px]"
      >
        <PieChart>
          <Pie
            data={EXPENSE_DATA}
            dataKey="percentage"
            nameKey="name"
            strokeWidth={10}
            stroke="white"
            activeIndex={0}
            label={(props) =>
              CustomLabel({
                ...props,
                label:
                  chartConfig[props.name as keyof typeof chartConfig].label,
                isMobile,
              })
            }
            labelLine={false}
            activeShape={CustomShape}
            inactiveShape={CustomShape}
          >
            {EXPENSE_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
}

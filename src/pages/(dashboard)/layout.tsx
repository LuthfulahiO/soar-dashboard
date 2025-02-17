import { Outlet, NavLink } from "react-router";

import {
  HomeIcon,
  TransferIcon,
  UserIcon,
  InvestmentIcon,
  CreditCardIcon,
  LoanIcon,
  ServiceIcon,
  SettingsIcon,
  EconomicIcon,
  LogoIcon,
} from "@/assets/icons";
import { Icon } from "@/components/Icon";
import { Sidebar, SidebarInset } from "@/components/sidebar";
import { cn } from "@/lib/utils";
import SidebarProvider from "@/providers/sidebar-provider";

const navigationItems = [
  {
    to: "/",
    icon: HomeIcon,
    label: "Dashboard",
  },
  {
    to: "/transactions",
    icon: TransferIcon,
    label: "Transactions",
  },
  {
    to: "/accounts",
    icon: UserIcon,
    label: "Accounts",
  },
  {
    to: "/investments",
    icon: InvestmentIcon,
    label: "Investments",
  },
  {
    to: "/credit-cards",
    icon: CreditCardIcon,
    label: "Credit Cards",
  },
  {
    to: "/loans",
    icon: LoanIcon,
    label: "Loans",
  },
  {
    to: "/services",
    icon: ServiceIcon,
    label: "Services",
  },
  {
    to: "/privileges",
    icon: EconomicIcon,
    label: "My Privileges",
  },
  {
    to: "/settings",
    icon: SettingsIcon,
    label: "Setting",
  },
];

const DashboardNavLink = ({
  to,
  icon,
  children,
}: {
  to: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-[1.625rem] relative h-[3.75rem]",
        "px-4 py-2 pl-11 transition-all duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20",
        "focus-visible:bg-neutral-100",
        "hover:bg-neutral-100/80",
        "group",
        isActive
          ? "text-neutral-900 font-medium"
          : "text-neutral-500 hover:text-neutral-700"
      )
    }
  >
    {({ isActive }) => (
      <>
        <div
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-0",
            "bg-neutral-900 rounded-r-[10px]",
            "transition-all duration-300 ease-in-out",
            isActive ? "h-full" : "h-0"
          )}
        />

        <div
          className={cn(
            "transition-transform duration-200",
            "group-hover:scale-110",
            "group-active:scale-95",
            isActive ? "text-neutral-900" : "text-neutral-500"
          )}
        >
          <Icon
            icon={icon}
            className={cn(
              "size-6",
              "transition-all duration-200",
              isActive && "transform -rotate-3",
              "group-hover:rotate-0"
            )}
          />
        </div>

        <span
          className={cn(
            "text-lg",
            "transition-all duration-200",
            "group-hover:translate-x-1",
            "group-active:translate-x-0"
          )}
        >
          {children}
        </span>
      </>
    )}
  </NavLink>
);

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="relative flex min-h-svh w-full overflow-x-hidden">
        <Sidebar>
          <div
            data-sidebar="header"
            className={cn(
              "flex h-[100px] pl-11 mb-1",
              "transition-transform duration-200",
              "hover:scale-[1.02]"
            )}
          >
            <div className="flex items-center gap-2 group">
              <LogoIcon className="size-[1.5625rem]" />
              <h1
                className={cn(
                  "font-[800] text-2xl",
                  "transition-all duration-200",
                  "group-hover:tracking-wide"
                )}
              >
                Soar Task
              </h1>
            </div>
          </div>

          <div
            data-sidebar="content"
            className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-200 hover:scrollbar-thumb-neutral-300"
          >
            <nav className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <DashboardNavLink key={item.to} to={item.to} icon={item.icon}>
                  {item.label}
                </DashboardNavLink>
              ))}
            </nav>
          </div>
        </Sidebar>
        <SidebarInset>
          <Outlet />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

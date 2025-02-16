import Logo from "@public/logo.svg?react";
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
        "flex items-center gap-[1.625rem] px-4 py-2 transition-colors relative h-[3.75rem] pl-11",
        isActive ? "text-neutral-900 font-medium" : "text-neutral-500"
      )
    }
  >
    {({ isActive }) => (
      <>
        {isActive && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-full bg-[#232323] rounded-r-[10px]" />
        )}
        <Icon icon={icon} className="size-6" />
        <span className="text-lg">{children}</span>
      </>
    )}
  </NavLink>
);

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <Sidebar>
        <div data-sidebar="header" className="flex h-[101px] pl-11 mb-2">
          <div className="flex items-center gap-2">
            <Logo className="size-[1.5625rem]" />
            <h1 className="font-[800] text-2xl">Soar Task</h1>
          </div>
        </div>
        <div
          data-sidebar="content"
          className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto"
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
    </SidebarProvider>
  );
}

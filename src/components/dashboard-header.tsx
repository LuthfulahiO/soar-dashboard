import { useState } from "react";
import { NavLink } from "react-router";

import {
  SettingsTwoIcon,
  BellIcon,
  SearchIcon,
  HamburgerIcon,
} from "@/assets/icons";
import { IconButton } from "@/components/icon-button";
import { Skeleton } from "@/components/skeleton";
import { useUserProfile } from "@/hooks/use-queries";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar-context";

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  const { data: profile, isLoading } = useUserProfile();
  const [hasNotification, setHasNotification] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toggleSidebar } = useSidebar();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="w-full flex flex-col lg:flex-row lg:h-[100px] bg-white lg:border-b border-b-border">
      {/* Top section */}
      <div className="flex flex-row justify-between items-center lg:items-center lg:px-10 px-[25px] pt-5 lg:pt-0 lg:h-full w-full">
        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={toggleSidebar}
            className={cn(
              "size-[3.125rem] flex items-center justify-center",
              "rounded-full transition-all duration-200",
              "hover:bg-neutral-100 active:bg-neutral-200",
              "focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
            )}
            aria-label="Toggle sidebar"
            type="button"
          >
            <HamburgerIcon
              className="size-5 text-secondary"
              aria-hidden="true"
            />
          </button>
          {/* <h1 className="text-[1.5rem] lg:text-[1.75rem] font-semibold leading-[33.89px]">
            {title}
          </h1> */}
        </div>

        <h1 className="text-[1.5rem] lg:text-[1.75rem] font-semibold leading-[33.89px]">
          {title}
        </h1>

        <div className="flex flex-row items-center gap-3 lg:gap-[1.875rem]">
          <div className="hidden lg:block relative group">
            <label htmlFor="desktop-search" className="sr-only">
              Search
            </label>
            <span className="absolute inset-y-0 left-0 flex items-center pl-[25px]">
              <SearchIcon
                className={cn(
                  "size-5 text-secondary transition-colors duration-200",
                  "group-focus-within:text-neutral-900"
                )}
                aria-hidden="true"
              />
            </span>
            <input
              id="desktop-search"
              type="search"
              value={searchQuery}
              onChange={handleSearch}
              className={cn(
                "py-4 h-[50px] text-[0.9375rem] bg-neutral-50 rounded-full pl-14 w-[255px]",
                "placeholder:text-secondary-light",
                "[&::-webkit-search-cancel-button]:appearance-none",
                "transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-neutral-900/20",
                "focus:bg-white focus:shadow-sm",
                "hover:bg-neutral-100"
              )}
              placeholder="Search for something"
            />
          </div>

          <div className="hidden lg:flex items-center gap-3 lg:gap-[1.875rem]">
            <NavLink to="/settings">
              <IconButton
                icon={
                  <SettingsTwoIcon
                    aria-hidden="true"
                    className={cn(
                      "size-[1.5625rem] text-secondary",
                      "transition-transform duration-200",
                      "group-hover:rotate-45",
                      "group-active:rotate-90"
                    )}
                  />
                }
                onClick={() => {}}
                ariaLabel="Settings"
                className={cn(
                  "group p-2 rounded-full",
                  "transition-all duration-200",
                  "hover:bg-neutral-100",
                  "active:bg-neutral-200 active:scale-95",
                  "focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                )}
              />
            </NavLink>

            <IconButton
              icon={
                <BellIcon
                  aria-hidden="true"
                  className={cn(
                    "size-[1.5625rem]",
                    hasNotification ? "text-secondary" : "text-[#396AFF]",
                    "transition-all duration-200",
                    "group-hover:scale-110",
                    "group-active:scale-95"
                  )}
                />
              }
              onClick={() => setHasNotification(!hasNotification)}
              ariaLabel={`Notifications ${hasNotification ? "(active)" : "(inactive)"}`}
              className={cn(
                "group p-2 rounded-full",
                "transition-all duration-200",
                "hover:bg-neutral-100",
                "active:bg-neutral-200",
                "focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
              )}
            />
          </div>

          {isLoading ? (
            <Skeleton className="size-[3.125rem] lg:size-[3.75rem] rounded-full bg-neutral-200" />
          ) : (
            <NavLink to="/settings">
              <button
                className={cn(
                  "relative rounded-full",
                  "transition-transform duration-200",
                  "hover:scale-105 active:scale-100",
                  "focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                )}
              >
                <img
                  className="size-[3.125rem] lg:size-[3.75rem] rounded-full"
                  src={profile?.profileImage || "/images/profile-picture.png"}
                  alt="User profile"
                />
              </button>
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Search section */}
      <div className="lg:hidden w-full px-[25px] py-5">
        <div className="relative group">
          <label htmlFor="mobile-search" className="sr-only">
            Search
          </label>
          <span className="absolute inset-y-0 left-0 flex items-center pl-[25px]">
            <SearchIcon
              className={cn(
                "size-5 text-secondary transition-colors duration-200",
                "group-focus-within:text-neutral-900"
              )}
              aria-hidden="true"
            />
          </span>
          <input
            id="mobile-search"
            type="search"
            value={searchQuery}
            onChange={handleSearch}
            className={cn(
              "w-full py-4 h-[50px] text-[0.9375rem] bg-neutral-50 rounded-full pl-14",
              "placeholder:text-secondary-light",
              "[&::-webkit-search-cancel-button]:appearance-none",
              "transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-neutral-900/20",
              "focus:bg-white focus:shadow-sm",
              "hover:bg-neutral-100"
            )}
            placeholder="Search for something"
          />
        </div>
      </div>
    </header>
  );
}

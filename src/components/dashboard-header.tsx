import { useState } from "react";

import {
  SettingsTwoIcon,
  BellIcon,
  SearchIcon,
  HamburgerIcon,
} from "@/assets/icons";
import { IconButton } from "@/components/icon-button";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar-context";

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
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
            className="md:hidden size-[3.125rem] flex items-center justify-center"
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
          <div className="hidden lg:block relative">
            <label htmlFor="desktop-search" className="sr-only">
              Search
            </label>
            <span className="absolute inset-y-0 left-0 flex items-center pl-[25px]">
              <SearchIcon
                className="size-5 text-secondary"
                aria-hidden="true"
              />
            </span>
            <input
              id="desktop-search"
              type="search"
              value={searchQuery}
              onChange={handleSearch}
              className="py-4 h-[50px] text-[0.9375rem] placeholder:text-secondary-light bg-neutral-50 rounded-full pl-14 w-[255px] [&::-webkit-search-cancel-button]:appearance-none"
              placeholder="Search for something"
            />
          </div>

          <div className="hidden lg:flex items-center gap-3 lg:gap-[1.875rem]">
            <IconButton
              icon={
                <SettingsTwoIcon
                  aria-hidden="true"
                  className="size-[1.5625rem] text-secondary"
                />
              }
              onClick={() => {}}
              ariaLabel="Settings"
            />

            <IconButton
              icon={
                <BellIcon
                  aria-hidden="true"
                  className={cn(
                    "size-[1.5625rem] text-[#396AFF]",
                    hasNotification && "text-secondary"
                  )}
                />
              }
              onClick={() => setHasNotification(!hasNotification)}
              ariaLabel={`Notifications ${hasNotification ? "(active)" : "(inactive)"}`}
            />
          </div>

          <img
            className="size-[3.125rem] lg:size-[3.75rem] rounded-full"
            src="/images/profile-picture.png"
            alt="User profile"
          />
        </div>
      </div>

      {/* Mobile Search section */}
      <div className="lg:hidden w-full px-[25px] py-5">
        <div className="relative">
          <label htmlFor="mobile-search" className="sr-only">
            Search
          </label>
          <span className="absolute inset-y-0 left-0 flex items-center pl-[25px]">
            <SearchIcon className="size-5 text-secondary" aria-hidden="true" />
          </span>
          <input
            id="mobile-search"
            type="search"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full py-4 h-[50px] text-[0.9375rem] placeholder:text-secondary-light bg-neutral-50 rounded-full pl-14 [&::-webkit-search-cancel-button]:appearance-none"
            placeholder="Search for something"
          />
        </div>
      </div>
    </header>
  );
}

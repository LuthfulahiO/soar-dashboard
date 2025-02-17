import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { apiService } from "@/lib/api-service";
import {
  Card,
  Transaction,
  WeeklyActivity,
  ExpenseStats,
  Contact,
  BalanceHistory,
  UserProfile,
} from "@/types/index";

export function useCards(): UseQueryResult<Card[], Error> {
  return useQuery({
    queryKey: ["cards"],
    queryFn: apiService.getCards,
  });
}

export function useRecentTransactions(): UseQueryResult<Transaction[], Error> {
  return useQuery({
    queryKey: ["recent-transactions"],
    queryFn: apiService.getRecentTransactions,
  });
}

export function useWeeklyActivity(): UseQueryResult<WeeklyActivity[], Error> {
  return useQuery({
    queryKey: ["weekly-activity"],
    queryFn: apiService.getWeeklyActivity,
  });
}

export function useExpenseStats(): UseQueryResult<ExpenseStats[], Error> {
  return useQuery({
    queryKey: ["expense-stats"],
    queryFn: apiService.getExpenseStats,
  });
}

export function useBalanceHistory(): UseQueryResult<BalanceHistory[], Error> {
  return useQuery({
    queryKey: ["balance-history"],
    queryFn: apiService.getBalanceHistory,
  });
}

export function useContacts(): UseQueryResult<Contact[], Error> {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: apiService.getContacts,
  });
}

export function useUserProfile(): UseQueryResult<UserProfile, Error> {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: apiService.getUserProfile,
  });
}

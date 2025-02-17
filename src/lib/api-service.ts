import axios, { AxiosError } from "axios";

import {
  Card,
  Transaction,
  WeeklyActivity,
  ExpenseStats,
  Contact,
  BalanceHistory,
  UserProfile,
} from "@/types";

import { MOCK_DATA } from "./mock-data";

const ARTIFICIAL_DELAY_MS = 1000;

const api = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

const simulateNetwork = async <T>(data: T): Promise<T> => {
  await delay(ARTIFICIAL_DELAY_MS);
  return data;
};

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    // Handle token expiration
    if (error.response?.status === 401) {
      try {
        const newToken = await refreshToken();
        api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function refreshToken(): Promise<string> {
  // Get refresh token from storage
  // Make API call to refresh token
  // Return new token
  return "new_auth_token";
}

// Note: In a real application with a backend server, we would make actual API calls using axios like:
// GET /api/cards: api.get('/cards')
// GET /api/weekly-activity: api.get('/weekly-activity')

export const apiService = {
  getCards: async (): Promise<Card[]> => {
    return simulateNetwork(MOCK_DATA.cards);
  },

  getRecentTransactions: async (): Promise<Transaction[]> => {
    return simulateNetwork(MOCK_DATA.transactions);
  },

  getWeeklyActivity: async (): Promise<WeeklyActivity[]> => {
    return simulateNetwork(MOCK_DATA.weeklyActivity);
  },

  getExpenseStats: async (): Promise<ExpenseStats[]> => {
    return simulateNetwork(MOCK_DATA.expenseStats);
  },

  getBalanceHistory: async (): Promise<BalanceHistory[]> => {
    return simulateNetwork(MOCK_DATA.balanceHistory);
  },

  getContacts: async (): Promise<Contact[]> => {
    return simulateNetwork(MOCK_DATA.contacts);
  },

  getUserProfile: async (): Promise<UserProfile> => {
    return simulateNetwork(MOCK_DATA.userProfile);
  },
};

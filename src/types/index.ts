export interface Card {
  id: string;
  isDefault: boolean;
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}

export interface Transaction {
  id: string;
  type: "card" | "paypal" | "cash";
  title: string;
  date: string;
  amount: number;
  flow: "debit" | "credit";
}

export interface WeeklyActivity {
  day: string;
  deposit: number;
  withdraw: number;
}

export interface ExpenseStats {
  name: string;
  percentage: number;
  amount: number;
  color: string;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface BalanceHistory {
  month: string;
  value: number;
}

export type TransactionType = "card" | "paypal" | "cash";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface UserProfile {
  yourName: string;
  userName: string;
  email: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  postalCode: string;
  city: string;
  country: string;
  profileImage: string;
}

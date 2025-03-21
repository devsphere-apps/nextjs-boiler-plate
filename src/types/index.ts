// Common application types
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface RequestState {
  status: Status;
  error: string | null;
} 
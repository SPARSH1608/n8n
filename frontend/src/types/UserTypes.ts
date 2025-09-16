export interface User {
  id: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  signup: (email: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}


import { createContext, useState, useContext, type ReactNode } from 'react';
import axios from 'axios';
import type { AuthContextType, User } from '@/types/UserTypes';
const AuthContext = createContext<AuthContextType | null>(null);
const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);



  const signup = async (email: string): Promise<void> => {
    await axios.post(`${BASE_URL}/auth/signup`, { email }, { withCredentials: true });
  };

  const login = async (email: string, password: string) => {
    try {
    const res= await axios.post(
        `${BASE_URL}/auth/signin`,
        { email, password },
        { withCredentials: true }
      );
      return res.data.data
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

const isAuthenticated = document.cookie.includes('authToken=');

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { setUserData, clearUserData } from "../lib/auth"


interface User {
  id: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ email: string; token: string; userId: string }>
  signup: (email: string) => Promise<any>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on app start
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      const response = await fetch(`${BASE_URL}/auth/me`, {
        credentials: "include",
      })
      if (response.ok) {
        const userData = await response.json()
        setUser(userData.user)
        
        // Store userId in localStorage for other routes
        setUserData(userData.user.id, userData.user.email)
      }
    } catch (error) {
      console.error("Auth check failed:", error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
    const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Login failed")
    }

    const data = await response.json()
    const userData = { id: data.data.userId, email: data.data.email }
    setUser(userData)
    
    // Store userId in localStorage for other routes
    setUserData(data.data.userId, data.data.email)
    
    return { email: data.data.email, token: data.data.token, userId: data.data.userId }
  }

  const signup = async (email: string) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "Signup failed")
    }

    const data = await response.json()
    return data
  }

  const logout = async () => {
    try {
      const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';
      await fetch(`${BASE_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      })
    } catch (error) {
      console.error("Logout error:", error)
    } finally {
      setUser(null)
      // Clear localStorage on logout
      clearUserData()
    }
  }

  const value = {
    user,
    login,
    signup,
    logout,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

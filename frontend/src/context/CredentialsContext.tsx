import { createContext, useContext, useState, type ReactNode } from 'react'
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api/v1';

type Credential = {
  id: string
  userId: string
  name: string
  type: string
  data: any
}

type CredentialsContextType = {
  credentials: Credential[]
  fetchCredentials: (userId: string) => Promise<void>
  createCredential: (payload: { userId: string; name: string; type: string; data: any }) => Promise<void>
  updateCredential: (id: string, payload: Partial<Credential>) => Promise<void>
  deleteCredential: (id: string) => Promise<void>
}

const CredentialsContext = createContext<CredentialsContextType | undefined>(undefined)

export const CredentialsProvider = ({ children }: { children: ReactNode }) => {
  const [credentials, setCredentials] = useState<Credential[]>([])

  const fetchCredentials = async (userId: string) => {
    try {
      const res = await axios.get(`${BASE_URL}/credentials`, { params: { userId } })
      setCredentials(res.data.credentials)
    } catch (error) {
      console.error('Failed to fetch credentials', error)
    }
  }

  const createCredential = async (payload: { userId: string; name: string; type: string; data: any }) => {
    try {
      await axios.post(`${BASE_URL}/credentials`, payload)
      await fetchCredentials(payload.userId)
    } catch (error) {
      console.error('Failed to create credential', error)
    }
  }

  const updateCredential = async (id: string, payload: Partial<Credential>) => {
    try {
      await axios.put(`${BASE_URL}/credentials/${id}`, payload)
      // Optimistically update local state
      setCredentials((prev) =>
        prev.map((cred) => (cred.id === id ? { ...cred, ...payload } : cred))
      )
    } catch (error) {
      console.error('Failed to update credential', error)
    }
  }

  const deleteCredential = async (id: string) => {
    try {
      await axios.delete(`${BASE_URL}/credentials/${id}`)
      setCredentials((prev) => prev.filter((cred) => cred.id !== id))
    } catch (error) {
      console.error('Failed to delete credential', error)
    }
  }

  return (
    <CredentialsContext.Provider
      value={{ credentials, fetchCredentials, createCredential, updateCredential, deleteCredential }}
    >
      {children}
    </CredentialsContext.Provider>
  )
}

export const useCredentials = () => {
  const context = useContext(CredentialsContext);
  if (!context) throw new Error('useCredentials must be used within CredentialsProvider');
  return context;
};

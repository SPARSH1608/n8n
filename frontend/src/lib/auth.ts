// Utility functions for authentication and user data

export const getUserId = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('userId')
  }
  return null
}

export const getUserEmail = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('userEmail')
  }
  return null
}

export const clearUserData = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('userId')
    localStorage.removeItem('userEmail')
  }
}

export const setUserData = (userId: string, userEmail: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('userId', userId)
    localStorage.setItem('userEmail', userEmail)
  }
}


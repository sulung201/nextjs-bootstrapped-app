'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

export interface User {
  username: string
  name?: string
  role?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  })
  const router = useRouter()

  // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = useCallback(() => {
    try {
      const token = localStorage.getItem('visit_token')
      const userData = localStorage.getItem('visit_user')
      
      if (token && userData) {
        const user = JSON.parse(userData)
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false
        })
      } else {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false
        })
      }
    } catch (error) {
      console.error('Error checking auth status:', error)
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false
      })
    }
  }, [])

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Store authentication data
        localStorage.setItem('visit_token', data.token)
        localStorage.setItem('visit_user', JSON.stringify(data.user))
        
        setAuthState({
          user: data.user,
          isAuthenticated: true,
          isLoading: false
        })

        return { success: true }
      } else {
        return { 
          success: false, 
          error: data.error || 'Login failed' 
        }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { 
        success: false, 
        error: 'Network error. Please try again.' 
      }
    }
  }

  const logout = useCallback(() => {
    // Clear authentication data
    localStorage.removeItem('visit_token')
    localStorage.removeItem('visit_user')
    
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    })

    // Redirect to home page
    router.push('/')
  }, [router])

  const requireAuth = useCallback(() => {
    if (!authState.isLoading && !authState.isAuthenticated) {
      router.push('/login')
      return false
    }
    return true
  }, [authState.isAuthenticated, authState.isLoading, router])

  return {
    ...authState,
    login,
    logout,
    requireAuth,
    checkAuthStatus
  }
}

'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';
import { User, WorkerProfile } from '@/lib/types';
import { mockUsers, mockWorkers, mockAdmin } from '@/lib/mock-data';

interface AuthContextValue {
  currentUser: User | WorkerProfile | null;
  isAuthenticated: boolean;
  login: (role: 'user' | 'worker' | 'admin') => void;
  logout: () => void;
  loginAsUser: (userId: string) => void;
  loginAsWorker: (workerId: string) => void;
}

const AuthContext = createContext<AuthContextValue>({
  currentUser: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  loginAsUser: () => {},
  loginAsWorker: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | WorkerProfile | null>(null);

  const login = (role: 'user' | 'worker' | 'admin') => {
    if (role === 'user') setCurrentUser(mockUsers[0]);
    else if (role === 'worker') setCurrentUser(mockWorkers[0]);
    else setCurrentUser(mockAdmin);
  };

  const logout = () => setCurrentUser(null);

  const loginAsUser = (userId: string) => {
    const user = mockUsers.find((u) => u.id === userId);
    if (user) setCurrentUser(user);
  };

  const loginAsWorker = (workerId: string) => {
    const worker = mockWorkers.find((w) => w.id === workerId);
    if (worker) setCurrentUser(worker);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        login,
        logout,
        loginAsUser,
        loginAsWorker,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

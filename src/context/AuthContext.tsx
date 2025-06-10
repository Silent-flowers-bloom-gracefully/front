import React, { createContext, useContext, useState } from 'react';

interface SignupState {
  username: string;
  password: string;
  nickname: string;
  categories: string[];
}

interface AuthContextType {
  signupData: SignupState;
  setSignupData: React.Dispatch<React.SetStateAction<SignupState>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signupData, setSignupData] = useState<SignupState>({
    username: '',
    password: '',
    nickname: '',
    categories: []
  });

  return (
    <AuthContext.Provider value={{ signupData, setSignupData }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 
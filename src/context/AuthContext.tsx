import React, { createContext, ReactNode, useContext, useState } from 'react';

interface SignupData {
  username: string;
  password: string;
  nickname: string;
}

interface AuthContextType {
  signupData: SignupData;
  setSignupData: (data: SignupData) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [signupData, setSignupData] = useState<SignupData>({
    username: '',
    password: '',
    nickname: '',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        signupData,
        setSignupData,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 
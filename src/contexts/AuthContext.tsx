import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing token and validate it
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token and set user
      setUser({
        id: '1',
        email: 'user@example.com',
        name: 'John Doe',
      });
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      // Add your actual login API call here
      const response = await new Promise<User>((resolve) => 
        setTimeout(() => {
          resolve({
            id: '1',
            email,
            name: 'John Doe',
          });
        }, 1000)
      );
      
      setUser(response);
      // You might want to store the token in localStorage here
      localStorage.setItem('token', 'dummy-token');
    } catch (error) {
      throw new Error('Login failed');
    }
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string) => {
    try {
      // Add your actual signup API call here
      const response = await new Promise<User>((resolve) =>
        setTimeout(() => {
          resolve({
            id: '1',
            email,
            name,
          });
        }, 1000)
      );
      
      setUser(response);
      localStorage.setItem('token', 'dummy-token');
    } catch (error) {
      throw new Error('Signup failed');
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('token');
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user,
        isLoading,
        login, 
        signup, 
        logout 
      }}
    >
      {!isLoading ? children : null}
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
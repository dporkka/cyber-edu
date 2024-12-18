import { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: any | null;
  login: (data: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null); 
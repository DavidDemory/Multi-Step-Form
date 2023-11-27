import { createContext, useContext, useState } from 'react';

export interface stateType {
  name: string,
  email: string
  phone: string,
  plan: string,
  periodicity: string,
  addons: Array<string>,
  price: number
}

const initialState = {
  name: '',
  email: '',
  phone: '',
  plan: 'arcade',
  periodicity: 'monthly',
  addons: [],
  price: 0,
};

export const AppStateContext = createContext({});

export function AppProvider ({children}: { children: React.ReactNode }) {
  const value = useState<Partial<stateType>>(initialState);
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState () {
  const context: Partial<stateType> = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within the AppProvider');
  }
  return context;
}
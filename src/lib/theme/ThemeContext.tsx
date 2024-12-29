import React, { createContext, useContext } from 'react';

export interface Theme {
  input: {
    base: string;
    error: string;
    fullWidth?: boolean;
  };
  label: {
    base: string;
    error: string;
  };
  errorMessage: string;
}

const defaultTheme: Theme = {
  input: {
    base: 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
    error: 'border-red-500 focus:border-red-500 focus:ring-red-200',
    fullWidth: false
  },
  label: {
    base: 'block text-sm font-medium text-gray-700 mb-1',
    error: 'text-red-500'
  },
  errorMessage: 'text-sm text-red-500 mt-1'
};

const ThemeContext = createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  theme?: Partial<Theme>;
  children: React.ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  const mergedTheme = { ...defaultTheme, ...theme };
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
'use client';

import {createContext, useState} from 'react';

const HDarkModeContext = createContext({
  isDarkMode: false,
  setDarkMode: (isDarkMode: boolean) => {},
});

export default HDarkModeContext;

export const HDarkModeProvider = ({children}: {children: React.ReactNode}) => {
  const [isDarkMode, setKDarkMode] = useState(false);

  const setDarkMode = (isDarkMode: boolean) => {
    setKDarkMode(isDarkMode);
  };

  const contextValue = {
    isDarkMode,
    setDarkMode,
  };

  return (
    <HDarkModeContext.Provider value={contextValue}>
      {children}
    </HDarkModeContext.Provider>
  );
};

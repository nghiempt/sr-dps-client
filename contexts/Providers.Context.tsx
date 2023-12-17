'use client';

import {SessionProvider} from 'next-auth/react';
import React from 'react';
import {DarkModeProvider} from './DarkMode.Context';
import {LocaleProvider} from './Locale.Context';

/**
 * Store react contexts
 * @param param0
 * @returns
 */
const ProvidersContext = ({children}: {children: React.ReactNode}) => {
  return (
    <SessionProvider>
      <LocaleProvider>
        <DarkModeProvider>{children}</DarkModeProvider>
      </LocaleProvider>
    </SessionProvider>
  );
};

export default ProvidersContext;

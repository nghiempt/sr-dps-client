'use client';

import {SessionProvider} from 'next-auth/react';
import React from 'react';
import {HLocaleProvider} from './HLocaleContext';
import {HDarkModeProvider} from './HDarkModeContext';

/**
 * Store react contexts
 * @param param0
 * @returns
 */
const HProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <SessionProvider>
      <HLocaleProvider>
        <HDarkModeProvider>{children}</HDarkModeProvider>
      </HLocaleProvider>
    </SessionProvider>
  );
};

export default HProviders;

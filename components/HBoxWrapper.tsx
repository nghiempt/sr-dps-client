'use client';

import React from 'react';

/**
 * Store react contexts
 * @param param0
 * @returns
 */
const HBoxWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex flex-row justify-center h-screen w-full'>
      <div className="flex-1 box-content">{children}</div>
    </div>
  );
};

export default HBoxWrapper;

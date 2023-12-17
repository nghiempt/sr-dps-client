'use client';

import DarkModeContext from '@/contexts/DarkMode.Context';
import {Switch} from '@douyinfe/semi-ui';
import React, {useContext} from 'react';

/**
 * Store react contexts
 * @param param0
 * @returns
 */
const SwitchModeCustom = () => {
  const darkModeContext = useContext(DarkModeContext);

  const switchMode = () => {
    const body = document.body;
    darkModeContext.setDarkMode(!darkModeContext.isDarkMode);
    console.log(darkModeContext.isDarkMode);
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else {
      body.setAttribute('theme-mode', 'dark');
    }
  };

  return (
    <Switch
      onChange={switchMode}
      className="w-[26px] h-[16px]"
      size="small"
      defaultChecked={darkModeContext.isDarkMode}
    />
  );
};

export default SwitchModeCustom;

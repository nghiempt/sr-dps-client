'use client';

import {Locale} from '@/types/constants/locale';
import {ConfigProvider} from '@douyinfe/semi-ui';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import vi_VN from '@douyinfe/semi-ui/lib/es/locale/source/vi_VN';
import {createContext, useState} from 'react';

const LocaleContext = createContext({
  locale: Locale.vi_VN,
  setLocale: (locale: Locale) => {},
});

export default LocaleContext;

export const LocaleProvider = ({children}: {children: React.ReactNode}) => {
  const [locale, setKLocale] = useState(Locale.en_US);
  const [semiLocale, setSemiLocale] = useState(en_US);

  const setLocale = (locale: Locale) => {
    const language: Record<Locale, any> = {
      vi_VN: vi_VN,
      en_US: en_US,
    };
    setSemiLocale(language[locale]);
    setKLocale(locale);
  };

  const contextValue = {
    locale,
    setLocale,
  };

  return (
    <LocaleContext.Provider value={contextValue}>
      <ConfigProvider timeZone={'Asia/Ho_Chi_Minh'} locale={semiLocale}>
        {children}
      </ConfigProvider>
    </LocaleContext.Provider>
  );
};

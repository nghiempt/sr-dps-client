'use client';

import HLocaleContext from '@/contexts/HLocaleContext';
import {Locale} from '@/types/constants/locale';
import {Select} from '@douyinfe/semi-ui';
import {useContext} from 'react';

const HLanguageSelect = ({...props}) => {
  const localeContext = useContext(HLocaleContext);

  const handleSelectLanguage = (value: any) => {
    localeContext.setLocale(value);
  };

  return (
    <Select
      className="w-[200px] h-[32px]"
      placeholder="Select Language"
      maxTagCount={3}
      defaultValue={localeContext.locale}
      onChange={handleSelectLanguage}
    >
      <Select.Option value={Locale.en_US}>English</Select.Option>
      <Select.Option value={Locale.vi_VN}>Tiếng Việt</Select.Option>
    </Select>
  );
};

export default HLanguageSelect;

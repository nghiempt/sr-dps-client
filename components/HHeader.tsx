'use client';

import {AutoComplete} from '@douyinfe/semi-ui';
import {IconSearch, IconSetting} from '@douyinfe/semi-icons';
import {useState} from 'react';
import HBoxWrapper from './HBoxWrapper';
import HSidebarSetting from './HSidebarSetting';

/**
 * HHHeader a part of layout always show to user
 * @param props contain all of data
 * @param data contain 2 Promise app, and defaultApp
 * @param data.defaultApps contain all default App
 * @param data.apps contain all app user create
 * @returns
 */
const HHHeader = ({...prop}) => {
  const [visible, setVisible] = useState(false);

  const change = () => {
    setVisible(!visible);
  };

  return (
    <HBoxWrapper>
      {/* <HSidebarSetting visible={visible} closeHandle={change} /> */}
      <div className="flex justify-end items-center gap-x-4 md:gap-x-9 lg:gap-x-14 border-solid border-[#1c1f2314] border-t-[0px] border-x-[0px] border-b-[1px] pt-[50px] md:px-14 px-6  pb-[23px] ml-0 mr-10">
        <AutoComplete
          className="h-[40px] w-full"
          size="large"
          placeholder="Search app"
          suffix={<IconSearch />}
          onChangeWithObject
        />
        {/* <div className="cursor-pointer">
          <IconSetting className="text-[24px]" onClick={change} />
        </div> */}
      </div>
    </HBoxWrapper>
  );
};

export default HHHeader;

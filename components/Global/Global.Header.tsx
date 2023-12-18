'use client';

import {IconSemiLogo} from '@douyinfe/semi-icons';
import {Button, Layout} from '@douyinfe/semi-ui';
import {useState} from 'react';
import {ModalGroupInfo} from '../Modal/Modal.GroupInfo';
import {ModalProjectInfo} from '../Modal/Modal.ProjectInfo';
import Image from 'next/image';

const HeaderCustom = () => {
  const [isVisibleModalGroupInfo, setIsVisibleModalGroupInfo] =
    useState<boolean>(false);
  const [isVisibleModalProjectInfo, setIsVisibleModalProjectInfo] =
    useState<boolean>(false);

  const handleShowModalGroupInfo = () => {
    setIsVisibleModalGroupInfo(!isVisibleModalGroupInfo);
  };

  const handleShowModalProjectInfo = () => {
    setIsVisibleModalProjectInfo(!isVisibleModalProjectInfo);
  };

  const {Header} = Layout;
  return (
    <Header className="">
      <Button
        className="bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 mr-2 rounded-[30px]"
        icon={<Image src="/logo.png" alt="logo" width={14} height={14} />}
        theme="light"
        type="tertiary"
        onClick={handleShowModalGroupInfo}
      >
        Research Group Information
      </Button>

      <Button
        className="bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 rounded-[30px]"
        icon={<Image src="/logo.png" alt="logo" width={14} height={14} />}
        theme="light"
        type="tertiary"
        onClick={handleShowModalProjectInfo}
      >
        Project Information
      </Button>

      <ModalGroupInfo
        isVisible={isVisibleModalGroupInfo}
        handleCancel={handleShowModalGroupInfo}
      />

      <ModalProjectInfo
        isVisible={isVisibleModalProjectInfo}
        handleCancel={handleShowModalProjectInfo}
      />
    </Header>
  );
};

export default HeaderCustom;

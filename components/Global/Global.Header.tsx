'use client';

import {IconGallery, IconUserGroup} from '@douyinfe/semi-icons';
import {Button, Layout} from '@douyinfe/semi-ui';
import {useEffect, useState} from 'react';
import {ModalGroupInfo} from '../Modal/Modal.GroupInfo';
import {ModalProjectInfo} from '../Modal/Modal.ProjectInfo';
import {ApiUrl} from '@/utils/apiUrl';

const HeaderCustom = () => {
  const [isVisibleModalGroupInfo, setIsVisibleModalGroupInfo] =
    useState<boolean>(false);
  const [isVisibleModalProjectInfo, setIsVisibleModalProjectInfo] =
    useState<boolean>(false);
  const [groupInfo, setGroupInfo] = useState<any>({});
  const [projectInfo, setProjectInfo] = useState<any>({});

  const handleShowModalGroupInfo = () => {
    setIsVisibleModalGroupInfo(!isVisibleModalGroupInfo);
  };

  const handleShowModalProjectInfo = () => {
    setIsVisibleModalProjectInfo(!isVisibleModalProjectInfo);
  };

  const init = async () => {
    const resGroupInfo: any = await fetch(ApiUrl.GET_TEAM_INFO);
    await resGroupInfo.json().then((data: any) => {
      setGroupInfo(data.data);
    });
    const resProjectInfo: any = await fetch(ApiUrl.GET_PROJECT_INFO);
    await resProjectInfo.json().then((data: any) => {
      setProjectInfo(data.data);
      console.log(data.data);
    });
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [groupInfo, projectInfo]);

  const {Header} = Layout;
  return (
    <Header className="">
      <Button
        className="bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 mr-2 rounded-[30px]"
        icon={<IconUserGroup />}
        theme="light"
        type="tertiary"
        onClick={handleShowModalGroupInfo}
      >
        Research Group Information
      </Button>

      <Button
        className="bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 rounded-[30px]"
        icon={<IconGallery />}
        theme="light"
        type="tertiary"
        onClick={handleShowModalProjectInfo}
      >
        Project Information
      </Button>

      <ModalGroupInfo
        isVisible={isVisibleModalGroupInfo}
        handleCancel={handleShowModalGroupInfo}
        groupInfo={groupInfo}
      />

      <ModalProjectInfo
        isVisible={isVisibleModalProjectInfo}
        handleCancel={handleShowModalProjectInfo}
        projectInfo={projectInfo}
      />
    </Header>
  );
};

export default HeaderCustom;

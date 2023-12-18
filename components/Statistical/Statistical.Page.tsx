/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import {ApiUrl} from '@/utils/apiUrl';
import React, {useEffect, useState} from 'react';
import HeaderCustom from '../Global/Global.Header';
import FooterCustom from '../Global/Global.Footer';
import {
  Breadcrumb,
  Button,
  Modal,
  Progress,
  Tooltip,
  Tree,
} from '@douyinfe/semi-ui';
import {
  Descriptions,
  Tag,
  RadioGroup,
  Radio,
  Pagination,
} from '@douyinfe/semi-ui';
import {
  IconHome,
  IconArticle,
  IconAppCenter,
  IconLink,
  IconClose,
  IconDuration,
  IconHash,
  IconBolt,
  IconStrikeThrough,
  IconMember,
} from '@douyinfe/semi-icons';
import {
  List,
  Typography,
  Layout,
  Image,
  Divider,
  Spin,
} from '@douyinfe/semi-ui';
import {ModalConcept} from '../Modal/Modal.Concept';
import {ModalException} from '../Modal/Modal.Exception';
import {ModalSignIn} from '../Modal/Modal.SignIn';
import {ModalSignOut} from '../Modal/Modal.SignOut';
import {renderDataSafetyContent} from '@/utils/helper';

export const StatisticalPage = () => {
  const {Content} = Layout;
  const {Title, Paragraph, Text} = Typography;

  const [isVisibleModalConcept, setIsVisibleModalConcept] =
    useState<boolean>(false);
  const [isVisibleModalException, setIsVisibleModalException] =
    useState<boolean>(false);
  const [isVisibleModalSignIn, setIsVisibleModalSignIn] =
    useState<boolean>(false);
  const [isVisibleModalSignOut, setIsVisibleModalSignOut] =
    useState<boolean>(false);

  const [listAppInCategory, setListAppInCategory] = useState<any>([]);
  const [currentCategory, setCurrentCategory] = useState<any>({});
  const [currentAccount, setCurrentAccount] = useState<any>({});
  const [currentApp, setCurrentApp] = useState<any>(null);
  const [dataSafetyContent, setDataSafetyContent] = useState<any>([]);

  const handleShowModalConcept = () => {
    setIsVisibleModalConcept(!isVisibleModalConcept);
  };

  const handleShowModalException = () => {
    setIsVisibleModalException(!isVisibleModalException);
  };

  const handleShowModalSignIn = () => {
    setIsVisibleModalSignIn(!isVisibleModalSignIn);
  };

  const handleShowModalSignOut = () => {
    setIsVisibleModalSignOut(!isVisibleModalSignOut);
  };

  const dataSafetyContent2 = [
    {
      label: 'Data Shared',
      value: 'Data Shared',
      key: '0',
      children: [
        {
          label: (
            <Tooltip
              content={'example'}
              arrowPointAtCenter={false}
              position={'topLeft'}
            >
              <p>Device or other IDs</p>
            </Tooltip>
          ),
          value: 'Device or other IDs',
          key: '0-0',
        },
      ],
    },
    {
      label: 'Data Collected',
      value: 'Data Collected',
      key: '1',
      children: [
        {
          label: (
            <Tooltip
              content={'example'}
              arrowPointAtCenter={false}
              position={'topLeft'}
            >
              <p>App activity</p>
            </Tooltip>
          ),
          value: 'App activity',
          key: '1-0',
        },
      ],
    },
    {
      label: 'Security Practices',
      value: 'Security Practices',
      key: '2',
      children: [
        {
          label: (
            <Tooltip
              content={'example'}
              arrowPointAtCenter={false}
              position={'topLeft'}
            >
              <p>Data is encrypted in transit</p>
            </Tooltip>
          ),
          value: 'Data is encrypted in transit',
          key: '2-0',
        },
      ],
    },
  ];

  const privacyPolicyContent = [
    {
      label: 'Data Shared',
      value: 'Data Shared',
      key: '0',
      children: [
        {
          label:
            'When you download, access, and use the App, it may use technology to automatically collect Usage Details, Device Information, Stored Information and Files, and Location Information. The app also collects information about the location of your device to tailor your user experience.',
          value:
            'When you download, access, and use the App, it may use technology to automatically collect Usage Details, Device Information, Stored Information and Files, and Location Information. The app also collects information about the location of your device to tailor your user experience.',
          key: '0-0',
        },
      ],
    },
    {
      label: 'Data Collected',
      value: 'Data Collected',
      key: '1',
      children: [
        {
          label:
            'When you download, register with, or use this App, we may ask you to provide Personal Information such as name, age, gender, postal address, email address, or telephone number. Additionally, the app automatically collects information like IP address, user name, usage patterns, and search queries. The App may also collect and use real-time information about your device’s location through the device’s privacy settings.',
          value:
            'When you download, register with, or use this App, we may ask you to provide Personal Information such as name, age, gender, postal address, email address, or telephone number. Additionally, the app automatically collects information like IP address, user name, usage patterns, and search queries. The App may also collect and use real-time information about your device’s location through the device’s privacy settings.',
          key: '1-0',
        },
      ],
    },
    {
      label: 'Security Practices',
      value: 'Security Practices',
      key: '2',
      children: [
        {
          label: (
            <Paragraph ellipsis={{rows: 5, showTooltip: {type: 'popover'}}}>
              {`Unleash the power of your imagination and explore your unique
                animation style with FlipaClip! This incredible app provides you
                with the tools and platform to bring your ideas to life.It is a
                great tool for beginners and aspiring animators to explore their
                creativity and make animated videos or gifs. Whether you are
                into whimsical storytelling, expressive characters, or
                captivating visual effects, FlipaClip empowers you to create
                animations that truly reflect your creative vision. Get ready to
                unlock your imagination and embark on a journey of endless
                possibilities.`}
            </Paragraph>
          ),
          value: `Unleash the power of your imagination and explore your unique
          animation style with FlipaClip! This incredible app provides you
          with the tools and platform to bring your ideas to life.It is a
          great tool for beginners and aspiring animators to explore their
          creativity and make animated videos or gifs. Whether you are
          into whimsical storytelling, expressive characters, or
          captivating visual effects, FlipaClip empowers you to create
          animations that truly reflect your creative vision. Get ready to
          unlock your imagination and embark on a journey of endless
          possibilities.`,
          key: '2-0',
        },
      ],
    },
  ];

  const goToHome = () => {
    window.location.href = '/';
  };

  const directToLink = (link: string) => {
    window.open(link, '_blank');
  };

  const checkIsSignIn = () => {
    if (
      currentAccount?.username === '' ||
      currentAccount?.username === null ||
      currentAccount?.username === undefined
    ) {
      return true;
    } else {
      return false;
    }
  };

  const assignDataSafetyContent = (data: any) => {
    setDataSafetyContent(renderDataSafetyContent(data));
  };

  const init = async () => {
    setCurrentCategory(JSON.parse(localStorage.getItem('category') || '{}'));
    setCurrentAccount(JSON.parse(localStorage.getItem('user') || '{}'));

    localStorage.setItem('appOrder', JSON.stringify(0));

    const res: any = await fetch(
      `${ApiUrl.GET_APP_BY_CATEGORY_ID}${JSON.parse(
        localStorage.getItem('category') || '{}'
      )?.category_id}`
    );
    await res.json().then((data: any) => {
      setListAppInCategory(data.data);
      setCurrentApp(data.data[0]);
      assignDataSafetyContent(data.data[0]);
    });
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [currentCategory, currentAccount, dataSafetyContent]);

  return (
    <Layout className="w-full h-screen flex flex-col justify-center items-center pt-10">
      <HeaderCustom />

      <Content className="w-5/6 flex flex-row">
        <div className="w-2/3 flex flex-col m-6 mr-3">
          <Breadcrumb>
            <Breadcrumb.Item
              icon={<IconHome />}
              onClick={goToHome}
            ></Breadcrumb.Item>
            <Breadcrumb.Item icon={<IconAppCenter />}>
              {currentCategory?.category_name}
            </Breadcrumb.Item>
            <Breadcrumb.Item>{currentApp?.app_name}</Breadcrumb.Item>
          </Breadcrumb>

          <div className="h-[140px] bg-gray-100 border border-gray-500 rounded-[10px] mt-2 flex flex-row items-center p-4">
            <div className="w-2/5 flex flex-row items-center">
              <div className="w-1/4">
                <Image
                  src={currentApp?.app_thumbnail}
                  alt="app thumbnail"
                  width={86}
                  height={86}
                  preview={false}
                />
              </div>
              <div className="w-3/4 pl-2">
                <Title heading={4}>{currentApp?.app_name}</Title>
                <Title heading={6}>{currentApp?.developer}</Title>
                <Text code>{currentApp?.number_of_downloads}</Text>
              </div>
            </div>
            <div className="text-justify w-3/5">
              <Tooltip
                content={<Text className="!text-white">Data Safety Link</Text>}
                arrowPointAtCenter={false}
                position={'topLeft'}
              >
                <Paragraph>
                  {currentApp?.app_description.length > 420
                    ? currentApp?.app_description.substring(0, 420) + '...'
                    : currentApp?.app_description}
                </Paragraph>
              </Tooltip>
            </div>
          </div>

          <div className="flex flex-row mt-6 gap-x-6">
            <div className="w-1/2 h-[600px] border border-gray-500 rounded-[10px] p-4">
              <Text
                strong
                className="text-lg"
                icon={
                  <IconLink
                    className="cursor-pointer"
                    onClick={() =>
                      directToLink(
                        'https://play.google.com/store/apps/datasafety?id=com.vblast.flipaclip'
                      )
                    }
                  />
                }
              >
                Data Safety
              </Text>
              <Divider margin={'8px'} />
              <div className="mt-[14px]"></div>

              <div>
                {dataSafetyContent2.length > 0 ? (
                  <Tree treeData={dataSafetyContent2} defaultExpandAll />
                ) : null}
              </div>
            </div>

            <div className="w-1/2 h-[600px] border border-gray-500 rounded-[10px] p-4 overflow-y-auto">
              <Text
                strong
                className="text-lg"
                icon={
                  <IconLink
                    className="cursor-pointer"
                    onClick={() =>
                      directToLink(
                        'https://play.google.com/store/apps/datasafety?id=com.vblast.flipaclip'
                      )
                    }
                  />
                }
              >
                Privacy Policy
              </Text>
              <Divider margin={'8px'} />
              <div className="mt-[14px]"></div>

              <div className="">
                <Tree treeData={privacyPolicyContent} defaultExpandAll />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 flex flex-col m-6 ml-3">
          <div
            className={`h-[140px] border border-gray-500 rounded-[10px] mt-8 p-4 ${
              checkIsSignIn() ? 'justify-center items-center flex' : ''
            }`}
          >
            {checkIsSignIn() ? (
              <Button
                className="bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 rounded-[30px] mt-1"
                icon={
                  <Image src="/logo.png" alt="logo" width={14} height={14} />
                }
                theme="light"
                type="tertiary"
                onClick={handleShowModalSignIn}
              >
                Sign In
              </Button>
            ) : (
              <div>
                <Descriptions
                  data={[
                    {
                      key: 'Username',
                      value: (
                        <Tag style={{margin: 0}}>
                          {currentAccount?.username}
                        </Tag>
                      ),
                    },
                    {
                      key: 'Email',
                      value: (
                        <Tag style={{margin: 0}}>{currentAccount?.email}</Tag>
                      ),
                    },
                  ]}
                />
                <Button
                  className="bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 rounded-[30px] mt-1"
                  icon={
                    <Image src="/logo.png" alt="logo" width={14} height={14} />
                  }
                  theme="light"
                  type="tertiary"
                  onClick={handleShowModalSignOut}
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>

          <div className="h-[476px] border border-gray-500 rounded-[10px] mt-6 p-4">
            <div>
              <Title heading={4}>Information We Have Analyzed</Title>
              <Divider margin={'8px'} />
              <div className="mt-[14px]"></div>

              <div className="flex gap-x-2">
                <Button
                  theme="solid"
                  type="danger"
                  className="bg-[#f87171] w-1/3 hover:opacity-80"
                  icon={<IconClose />}
                >
                  Incorrect
                </Button>

                <Button
                  theme="solid"
                  type="danger"
                  className="bg-[#4ade80] w-1/3 hover:opacity-80"
                  icon={<IconDuration />}
                >
                  Incomplete
                </Button>

                <Button
                  theme="solid"
                  type="danger"
                  className="bg-[#60a5fa] w-1/3 hover:opacity-80"
                  icon={<IconHash />}
                >
                  Inconsistent
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <Title heading={4}>Provide your opinion</Title>
              <Divider margin={'8px'} />
              <div className="mt-[14px]"></div>
              <RadioGroup
                direction="vertical"
                aria-label="RadioGroup demo"
                name="demo-radio-group-vertical"
              >
                <Radio value={1}>
                  <div className="flex">
                    <Text className="text-sm mr-2">Totally agree</Text>
                    {/* <Spin /> */}
                    <Text className="text-sm" code>
                      saved
                    </Text>
                  </div>
                </Radio>
                <Radio value={2}>Agree</Radio>
                <Radio value={3}>Neutral</Radio>
                <Radio value={4}>Disagree</Radio>
                <Radio value={5}>Totally disagree</Radio>
              </RadioGroup>

              <div
                className={`flex flex-row justify-between mt-6 ${
                  checkIsSignIn() ? 'mb-2' : 'mb-6'
                }`}
              >
                <div className="flex flex-row">
                  <Button
                    className={`${
                      checkIsSignIn()
                        ? ''
                        : 'bg-gray-100 w-[80px] mr-2 !text-gray-700 hover:bg-gray-200 cursor-pointer'
                    }`}
                    disabled
                  >
                    Clear
                  </Button>
                  <Button
                    className={`${
                      checkIsSignIn()
                        ? ''
                        : 'bg-gray-100 w-[80px] !text-red-500 hover:bg-gray-200 cursor-pointer'
                    }`}
                    disabled
                  >
                    Clear All
                  </Button>
                </div>
                <Pagination
                  total={
                    JSON.parse(localStorage.getItem('category') || '{}')
                      ?.total_app * 10 || 10
                  }
                  size="small"
                  disabled={checkIsSignIn() ? true : false}
                  hoverShowPageSelect
                  onPageChange={(page) => {
                    setCurrentApp(listAppInCategory[page - 1]);
                  }}
                ></Pagination>
              </div>

              {checkIsSignIn() ? (
                <div className="w-full flex justify-end mb-6">
                  <Title heading={6} className="!text-red-500">
                    Sign-in to continue
                  </Title>
                </div>
              ) : null}

              <Progress
                percent={0}
                stroke={[
                  {percent: 0, color: 'rgb(249, 57, 32)'},
                  {percent: 50, color: '#46259E'},
                  {percent: 100, color: 'hsla(125, 50%, 46% / 1)'},
                ]}
                strokeGradient={true}
                showInfo
                size="large"
                aria-label="file download speed"
              />
            </div>
          </div>

          <div className="h-[100px] border border-gray-500 rounded-[10px] mt-6 p-4">
            <div
              className="flex flex-row items-center cursor-pointer hover:!bg-blue-100"
              onClick={handleShowModalConcept}
            >
              <Title heading={5} className="!text-gray-700">
                See description of concepts
              </Title>
              <IconMember className="ml-2" />
            </div>
            <Divider margin={'10px'} />
            <div
              className="flex flex-row items-center cursor-pointer hover:!bg-blue-100"
              onClick={handleShowModalException}
            >
              <Title heading={5} className="!text-gray-700">
                See exceptions provided by Google
              </Title>
              <IconStrikeThrough className="ml-2" />
            </div>
          </div>
        </div>
      </Content>

      <ModalConcept
        isVisible={isVisibleModalConcept}
        handleCancel={handleShowModalConcept}
      />

      <ModalException
        isVisible={isVisibleModalException}
        handleCancel={handleShowModalException}
      />

      <ModalSignIn
        isVisible={isVisibleModalSignIn}
        handleCancel={handleShowModalSignIn}
      />

      <ModalSignOut
        isVisible={isVisibleModalSignOut}
        handleCancel={handleShowModalSignOut}
      />

      <FooterCustom />
    </Layout>
  );
};

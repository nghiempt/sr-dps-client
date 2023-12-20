/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import {ApiUrl} from '@/utils/apiUrl';
import React, {useEffect, useState} from 'react';
import HeaderCustom from '../Global/Global.Header';
import FooterCustom from '../Global/Global.Footer';
import {
  Breadcrumb,
  Button,
  Progress,
  Spin,
  Tooltip,
  Tree,
} from '@douyinfe/semi-ui';
import {Descriptions, Tag, Pagination} from '@douyinfe/semi-ui';
import {
  IconHome,
  IconAppCenter,
  IconLink,
  IconClose,
  IconDuration,
  IconHash,
  IconComment,
  IconExit,
  IconLock,
} from '@douyinfe/semi-icons';
import {Typography, Layout, Image, Divider} from '@douyinfe/semi-ui';
import {ModalConcept} from '../Modal/Modal.Concept';
import {ModalException} from '../Modal/Modal.Exception';
import {ModalSignIn} from '../Modal/Modal.SignIn';
import {ModalSignOut} from '../Modal/Modal.SignOut';
import {getPercentOpinion} from '@/utils/helper';
import {showToastFail} from '@/utils/showToast';
import {ModalClearAll} from '../Modal/Modal.ClearAll';

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
  const [isVisibleModalClearAll, setIsVisibleModalClearAll] =
    useState<boolean>(false);

  const [listAppInCategory, setListAppInCategory] = useState<any>([]);
  const [currentCategory, setCurrentCategory] = useState<any>({});
  const [currentAccount, setCurrentAccount] = useState<any>({});
  const [currentApp, setCurrentApp] = useState<any>(null);
  const [dataSafetyContent, setDataSafetyContent] = useState<any>([]);
  const [privacyPolicyContent, setPrivacyPolicyContent] = useState<any>([]);
  const [loadingOpinion, setLoadingOpinion] = useState<boolean>(false);
  const [percentOpinion, setPercentOpinion] = useState<number>(0);

  const renderDataSafetyContent = [
    {
      label: `Data Shared
      ${
        dataSafetyContent?.data_shared?.length === 0
          ? ' - No data shared with third parties'
          : ''
      }
      `,
      value: 'Data Shared',
      key: '0',
      children: dataSafetyContent?.data_shared?.map((item: any, index: any) => {
        return {
          label: (
            <Tooltip
              content={item?.sub_info.map((subItem: any, subIndex: any) => {
                return (
                  <div key={subIndex}>
                    <p>
                      {subItem?.optional ? '[Optional] ' : '[Non-Optional] '}
                      {subItem?.data_type} ({subItem?.purpose})
                    </p>
                    {item?.sub_info?.length > 1 ? (
                      <Divider margin={'8px'} dashed={true} />
                    ) : null}
                  </div>
                );
              })}
              arrowPointAtCenter={false}
              position={'topLeft'}
            >
              <p>
                {index + 1}. {item?.category}
              </p>
            </Tooltip>
          ),
          value: `${index + 1}. ${item?.category}`,
          key: `0-${index}`,
        };
      }),
    },
    {
      label: `Data Collected
      ${
        dataSafetyContent?.data_shared?.length === 0
          ? ' - No data collected'
          : ''
      }
      `,
      value: 'Data Collected',
      key: '1',
      children: dataSafetyContent?.data_collected?.map(
        (item: any, index: any) => {
          return {
            label: (
              <Tooltip
                content={item?.sub_info.map((subItem: any, subIndex: any) => {
                  return (
                    <div key={subIndex}>
                      <p>
                        {subItem?.optional ? '[Optional] ' : '[Non-Optional] '}
                        {subItem?.data_type} ({subItem?.purpose})
                      </p>
                      {item?.sub_info?.length > 1 ? (
                        <Divider margin={'8px'} dashed={true} />
                      ) : null}
                    </div>
                  );
                })}
                arrowPointAtCenter={false}
                position={'topLeft'}
              >
                <p>
                  {index + 1}. {item?.category}
                </p>
              </Tooltip>
            ),
            value: `${index + 1}. ${item?.category}`,
            key: `1-${index}`,
          };
        }
      ),
    },
    {
      label: `Security Practices
      ${
        dataSafetyContent?.data_shared?.length === 0
          ? ' - No information provided'
          : ''
      }
      `,
      value: 'Security Practices',
      key: '2',
      children: dataSafetyContent?.security_practices?.map(
        (item: any, index: any) => {
          return {
            label: (
              <Tooltip
                content={'No information provided'}
                arrowPointAtCenter={false}
                position={'topLeft'}
              >
                <p>
                  {index + 1}. {item?.category}
                </p>
              </Tooltip>
            ),
            value: `${index + 1}. ${item?.category}`,
            key: `2-${index}`,
          };
        }
      ),
    },
  ];

  const renderPrivacyPolicyContent = [
    {
      label: 'Data Shared',
      value: 'Data Shared',
      key: '0',
      children: [
        {
          label: (
            <Paragraph
              ellipsis={{
                rows: 5,
                showTooltip: {
                  type: 'popover',
                  opts: {
                    style: {backgroundColor: 'rgb(66,70,76)', color: 'white'},
                  },
                },
              }}
            >
              {privacyPolicyContent?.data_shared}
            </Paragraph>
          ),
          value: privacyPolicyContent?.data_shared,
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
            <Paragraph
              ellipsis={{
                rows: 5,
                showTooltip: {
                  type: 'popover',
                  opts: {
                    style: {backgroundColor: 'rgb(66,70,76)', color: 'white'},
                  },
                },
              }}
            >
              {privacyPolicyContent?.data_collected}
            </Paragraph>
          ),
          value: privacyPolicyContent?.data_collected,
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
            <Paragraph
              ellipsis={{
                rows: 5,
                showTooltip: {
                  type: 'popover',
                  opts: {
                    style: {backgroundColor: 'rgb(66,70,76)', color: 'white'},
                  },
                },
              }}
            >
              {privacyPolicyContent?.security_practices}
            </Paragraph>
          ),
          value: privacyPolicyContent?.security_practices,
          key: '2-0',
        },
      ],
    },
  ];

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

  const handleShowModalClearAll = () => {
    setIsVisibleModalClearAll(!isVisibleModalClearAll);
  };

  const handlePageChange = (page: number) => {
    setCurrentApp(listAppInCategory[page - 1]);
    setDataSafetyContent(listAppInCategory[page - 1].app_data_safety);
    setPrivacyPolicyContent(listAppInCategory[page - 1].app_privacy_policy);
  };

  const goToHome = () => {
    window.location.href = '/';
  };

  const directToLink = (link: string) => {
    window.open(link, '_blank');
  };

  const checkIsSignIn = () => {
    if (
      currentAccount?.user_name === '' ||
      currentAccount?.user_name === null ||
      currentAccount?.user_name === undefined
    ) {
      return true;
    } else {
      return false;
    }
  };

  const clearOption = async () => {
    console.log('clear');
    setLoadingOpinion(true);
    setCurrentApp({
      ...currentApp,
      score: 0,
    });
    const newListAppInCategory = listAppInCategory.map((item: any) => {
      if (item.app_id === currentApp?.app_id) {
        return {
          ...item,
          score: 0,
        };
      } else {
        return item;
      }
    });
    setListAppInCategory(newListAppInCategory);
    setPercentOpinion(Number(getPercentOpinion(newListAppInCategory)));
    const res: any = await fetch(ApiUrl.SAVE_OPINION, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          user_id: currentAccount?.user_id,
          app_id: currentApp?.app_id,
          score: 0,
        },
      ]),
    });
    await res.json().then((data: any) => {
      setLoadingOpinion(false);
    });
  };

  const saveOpition = async (option: number) => {
    setLoadingOpinion(true);
    setCurrentApp({
      ...currentApp,
      score: option,
    });
    const newListAppInCategory = listAppInCategory.map((item: any) => {
      if (item.app_id === currentApp?.app_id) {
        return {
          ...item,
          score: option,
        };
      } else {
        return item;
      }
    });
    setListAppInCategory(newListAppInCategory);
    setPercentOpinion(Number(getPercentOpinion(newListAppInCategory)));
    const res: any = await fetch(ApiUrl.SAVE_OPINION, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          user_id: currentAccount?.user_id,
          app_id: currentApp?.app_id,
          score: option,
        },
      ]),
    });
    await res.json().then((data: any) => {
      setLoadingOpinion(false);
    });
  };

  const clearAllOption = async () => {
    setLoadingOpinion(true);
    setCurrentApp({
      ...currentApp,
      score: 0,
    });
    const newListAppInCategory = listAppInCategory.map((item: any) => {
      return {
        ...item,
        score: 0,
      };
    });
    setListAppInCategory(newListAppInCategory);
    setPercentOpinion(Number(getPercentOpinion(newListAppInCategory)));
    const res: any = await fetch(
      `${ApiUrl.CLEAR_ALL_OPINION}userid=${currentAccount?.user_id}&categoyid=${currentCategory?.category_id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    await res.json().then((data: any) => {
      setLoadingOpinion(false);
      console.log(data);
    });
  };

  const init = async () => {
    setCurrentCategory(JSON.parse(localStorage.getItem('category') || '{}'));
    setCurrentAccount(JSON.parse(localStorage.getItem('user') || '{}'));

    localStorage.setItem('appOrder', JSON.stringify(0));

    if (localStorage.getItem('user') !== '') {
      const res: any = await fetch(
        `${ApiUrl.GET_APP_BY_CATEGORY_ID_USER_ID}categoryid=${JSON.parse(
          localStorage.getItem('category') || '{}'
        )?.category_id}&userid=${JSON.parse(
          localStorage.getItem('user') || '{"user_id": 999}'
        )?.user_id}`
      );

      await res.json().then((data: any) => {
        setListAppInCategory(data.data);
        setCurrentApp(data.data[0]);
        setDataSafetyContent(data.data[0].app_data_safety);
        setPrivacyPolicyContent(data.data[0].app_privacy_policy);
        setPercentOpinion(Number(getPercentOpinion(data.data)));
      });
    } else {
      const res: any = await fetch(
        `${ApiUrl.GET_APP_BY_CATEGORY_ID}id=${JSON.parse(
          localStorage.getItem('category') || '{}'
        )?.category_id}`
      );

      await res.json().then((data: any) => {
        setListAppInCategory(data.data);
        setCurrentApp(data.data[0]);
        setDataSafetyContent(data.data[0].app_data_safety);
        setPrivacyPolicyContent(data.data[0].app_privacy_policy);
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [
    currentCategory,
    currentAccount,
    dataSafetyContent,
    currentApp,
    listAppInCategory,
    percentOpinion,
  ]);

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
                content={
                  <div
                    className="flex flex-row items-center cursor-pointer"
                    onClick={() =>
                      directToLink(
                        `https://play.google.com/store/apps/details?id=${currentApp?.app_package_name}&hl=en&gl=US`
                      )
                    }
                  >
                    <IconLink />
                    <Text className="!text-white ml-2 font-bold">
                      Google Play Store
                    </Text>
                  </div>
                }
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
            <div className="w-1/2 h-[600px] border border-gray-500 rounded-[10px] p-4 overflow-y-auto">
              <Text
                strong
                className="text-lg"
                icon={
                  <IconLink
                    className="cursor-pointer"
                    onClick={() => directToLink(currentApp?.data_safety_link)}
                  />
                }
              >
                Data Safety
              </Text>
              <Divider margin={'8px'} />
              <div className="mt-[14px]"></div>

              <div>
                {renderDataSafetyContent.length > 0 ? (
                  <Tree treeData={renderDataSafetyContent} defaultExpandAll />
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
                      directToLink(currentApp?.privacy_policy_link)
                    }
                  />
                }
              >
                Privacy Policy
              </Text>
              <Divider margin={'8px'} />
              <div className="mt-[14px]"></div>

              <div className="">
                {renderPrivacyPolicyContent.length > 0 ? (
                  <Tree
                    treeData={renderPrivacyPolicyContent}
                    defaultExpandAll
                  />
                ) : null}
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
                icon={<IconLock />}
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
                          {currentAccount?.user_name}
                        </Tag>
                      ),
                    },
                    {
                      key: 'Email',
                      value: (
                        <Tag style={{margin: 0}}>
                          {currentAccount?.user_email}
                        </Tag>
                      ),
                    },
                  ]}
                />
                <Button
                  className="bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 rounded-[30px] mt-1"
                  icon={<IconExit />}
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
                  className={`${
                    currentApp?.label.incorrect === 1
                      ? 'bg-blue-500 hover:!bg-blue-400'
                      : 'bg-gray-300 hover:!bg-gray-200'
                  } w-1/3 hover:opacity-80`}
                  icon={<IconClose />}
                >
                  <Tooltip
                    content={currentApp?.label_description?.incorrect}
                    arrowPointAtCenter={false}
                    position={'topLeft'}
                  >
                    <p>Incorrect</p>
                  </Tooltip>
                </Button>

                <Button
                  theme="solid"
                  type="danger"
                  className={`${
                    currentApp?.label.incomplete === 1
                      ? 'bg-blue-500 hover:!bg-blue-400'
                      : 'bg-gray-300 hover:!bg-gray-200'
                  } w-1/3 `}
                  icon={<IconDuration />}
                >
                  <Tooltip
                    content={currentApp?.label_description?.incomplete}
                    arrowPointAtCenter={false}
                    position={'topLeft'}
                  >
                    <p>Incomplete</p>
                  </Tooltip>
                </Button>

                <Button
                  theme="solid"
                  type="danger"
                  className={`${
                    currentApp?.label.inconsistent === 1
                      ? 'bg-blue-500 hover:!bg-blue-400'
                      : 'bg-gray-300 hover:!bg-gray-200'
                  } w-1/3 hover:opacity-80`}
                  icon={<IconHash />}
                >
                  <Tooltip
                    content={currentApp?.label_description?.inconsistent}
                    arrowPointAtCenter={false}
                    position={'topLeft'}
                  >
                    <p>Inconsistent</p>
                  </Tooltip>
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-row items-center">
                <Title heading={4} className="mr-2">
                  Provide your opinion
                </Title>
                {loadingOpinion ? <Spin /> : null}
              </div>
              <Divider margin={'8px'} />
              <div className="mt-[14px]"></div>

              <div>
                <div
                  className="flex flex-row items-center cursor-pointer mb-2"
                  onClick={() => {
                    checkIsSignIn()
                      ? showToastFail('Plase sign-in to continue !', 2000)
                      : saveOpition(1);
                  }}
                >
                  <div
                    className={`w-[15px] h-[15px] border ${
                      currentApp?.score === 1
                        ? 'border-[5px] border-blue-500'
                        : 'border border-gray-500'
                    } rounded-[20px] mr-2`}
                  ></div>
                  <Text className="text-md mr-2">Totally Agree</Text>
                  {currentApp?.score === 1 ? <Text code>saved</Text> : null}
                </div>

                <div
                  className="flex flex-row items-center cursor-pointer mb-2"
                  onClick={() => {
                    checkIsSignIn()
                      ? showToastFail('Plase sign-in to continue !', 2000)
                      : saveOpition(2);
                  }}
                >
                  <div
                    className={`w-[15px] h-[15px] border ${
                      currentApp?.score === 2
                        ? 'border-[5px] border-blue-500'
                        : 'border border-gray-500'
                    } rounded-[20px] mr-2`}
                  ></div>
                  <Text className="text-md mr-2">Agree</Text>
                  {currentApp?.score === 2 ? <Text code>saved</Text> : null}
                </div>

                <div
                  className="flex flex-row items-center cursor-pointer mb-2"
                  onClick={() => {
                    checkIsSignIn()
                      ? showToastFail('Plase sign-in to continue !', 2000)
                      : saveOpition(3);
                  }}
                >
                  <div
                    className={`w-[15px] h-[15px] border ${
                      currentApp?.score === 3
                        ? 'border-[5px] border-blue-500'
                        : 'border border-gray-500'
                    } rounded-[20px] mr-2`}
                  ></div>
                  <Text className="text-md mr-2">Neutral</Text>
                  {currentApp?.score === 3 ? <Text code>saved</Text> : null}
                </div>

                <div
                  className="flex flex-row items-center cursor-pointer mb-2"
                  onClick={() => {
                    checkIsSignIn()
                      ? showToastFail('Plase sign-in to continue !', 2000)
                      : saveOpition(4);
                  }}
                >
                  <div
                    className={`w-[15px] h-[15px] border ${
                      currentApp?.score === 4
                        ? 'border-[5px] border-blue-500'
                        : 'border border-gray-500'
                    } rounded-[20px] mr-2`}
                  ></div>
                  <Text className="text-md mr-2">Disagree</Text>
                  {currentApp?.score === 4 ? <Text code>saved</Text> : null}
                </div>

                <div
                  className="flex flex-row items-center cursor-pointer mb-2"
                  onClick={() => {
                    checkIsSignIn()
                      ? showToastFail('Plase sign-in to continue !', 2000)
                      : saveOpition(5);
                  }}
                >
                  <div
                    className={`w-[15px] h-[15px] border ${
                      currentApp?.score === 5
                        ? 'border-[5px] border-blue-500'
                        : 'border border-gray-500'
                    } rounded-[20px] mr-2`}
                  ></div>
                  <Text className="text-md mr-2">Totally Disagree</Text>
                  {currentApp?.score === 5 ? <Text code>saved</Text> : null}
                </div>
              </div>

              <div
                className={`flex flex-row justify-between mt-6 ${
                  checkIsSignIn() ? 'mb-2' : 'mb-6'
                }`}
              >
                {!checkIsSignIn() ? (
                  <div className="flex flex-row">
                    <Button
                      className={`${
                        checkIsSignIn()
                          ? ''
                          : 'bg-gray-100 w-[80px] mr-2 !text-gray-700 hover:bg-gray-200 cursor-pointer'
                      }`}
                      onClick={clearOption}
                    >
                      Clear
                    </Button>
                    <Button
                      className={`${
                        checkIsSignIn()
                          ? ''
                          : 'bg-gray-100 w-[80px] !text-red-500 hover:bg-gray-200 cursor-pointer'
                      }`}
                      onClick={handleShowModalClearAll}
                    >
                      Clear All
                    </Button>
                  </div>
                ) : (
                  <div></div>
                )}
                {listAppInCategory?.length > 0 ? (
                  <Pagination
                    total={listAppInCategory?.length * 10 || 10}
                    size="small"
                    disabled={checkIsSignIn() ? true : false}
                    hoverShowPageSelect
                    onPageChange={(page) => {
                      handlePageChange(page);
                    }}
                  />
                ) : null}
              </div>

              {checkIsSignIn() ? (
                <div className="w-full flex justify-end mb-6">
                  <Title heading={6} className="!text-red-500">
                    Sign-in to continue
                  </Title>
                </div>
              ) : null}

              <Progress
                percent={percentOpinion}
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
              <IconComment className="ml-2" />
            </div>
            <Divider margin={'10px'} />
            <div
              className="flex flex-row items-center cursor-pointer hover:!bg-blue-100"
              onClick={handleShowModalException}
            >
              <Title heading={5} className="!text-gray-700">
                See exceptions provided by Google
              </Title>
              <IconComment className="ml-2" />
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

      <ModalClearAll
        isVisible={isVisibleModalClearAll}
        handleCancel={handleShowModalClearAll}
        clearAllOption={clearAllOption}
      />

      <FooterCustom />
    </Layout>
  );
};

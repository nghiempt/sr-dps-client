/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, {useEffect, useState} from 'react';
import {Button, Image} from '@douyinfe/semi-ui';
import {ApiUrl} from '@/utils/apiUrl';
import {IconClose, IconExit, IconHome} from '@douyinfe/semi-icons';
import HHHeader from '../HHeader';
import {showToastDevelopment} from '@/utils/showToast';
import {ModalSignOut} from '../Modal/Modal.SignOut';
import {ModalSignIn} from '../Modal/Modal.SignIn';

export const DetailPage = () => {
  const categoryStore = localStorage.getItem('category');
  const appOrderStrore = localStorage.getItem('appOrder');
  const user: any = localStorage.getItem('user');

  const [category, setCategory] = useState<any>(null);
  const [data, setData] = useState<any>([]);
  const [currentApp, setCurrentApp] = useState<any>(null);

  const [showModalLogin, setShowModalLogin] = useState<any>(false);
  const [showModalSignOut, setShowModalSignOut] = useState<any>(false);
  const [showInfoWindow, setShowInfoWindow] = useState<any>('');
  const [showInfoWindowPrivacyPolicy, setShowInfoWindowPrivacyPolicy] =
    useState<any>('');

  const [username, setUsername] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [option, setOption] = useState<any>('');

  const handleShowModalLogin = () => {
    setShowModalLogin(!showModalLogin);
  };

  const handleShowModalSignOut = () => {
    setShowModalSignOut(!showModalSignOut);
  };

  const next = async () => {
    if (!validate()) {
      return;
    }
    const payload = {
      username,
      email,
      option,
      currentApp: currentApp?.id,
    };
    let appOrder = parseInt(localStorage.getItem('appOrder') || '0');
    setOption('');
    if (appOrder < data.length - 1) {
      appOrder = appOrder + 1;
      localStorage.setItem('appOrder', JSON.stringify(appOrder));
      setCurrentApp(data[appOrder]);
    } else {
      localStorage.setItem('appOrder', JSON.stringify(0));
      window.location.href = `/`;
    }
  };

  const prev = async () => {
    if (!validate()) {
      return;
    }
    const payload = {
      username,
      email,
      option,
      currentApp: currentApp?.id,
    };
    let appOrder = parseInt(localStorage.getItem('appOrder') || '0');
    setOption('');
    if (appOrder > 0) {
      appOrder = appOrder - 1;
      localStorage.setItem('appOrder', JSON.stringify(appOrder));
      setCurrentApp(data[appOrder]);
    } else {
      localStorage.setItem('appOrder', JSON.stringify(0));
      window.location.href = `/`;
    }
  };

  const validate = () => {
    return true;
  };

  const goToHome = async () => {
    window.location.href = `/`;
  };

  const checkSignIn = () => {
    if (
      JSON.parse(user || '')?.username === undefined ||
      JSON.parse(user || '')?.username === ''
    ) {
      return false;
    }
    return true;
  };

  const init = async () => {
    if (category) {
      setCategory(JSON.parse(categoryStore || ''));
    }
    localStorage.setItem('appOrder', JSON.stringify(0));

    const res: any = await fetch(
      `${ApiUrl.GET_APP_BY_CATEGORY_ID}${JSON.parse(categoryStore || '')
        ?.category_id}`
    );
    await res.json().then((data: any) => {
      setData(data.data);
      setCurrentApp(data.data[0]);
      console.log(data.data[0]?.app_data_safety);
    });

    setUsername(JSON.parse(user || '')?.username || '');
    setEmail(JSON.parse(user || '')?.email || '');
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [
    data,
    category,
    currentApp,
    option,
    user,
    username,
    email,
  ]);

  return (
    <div className="h-screen w-ful">
      <div className="min-h-screen flex flex-col">
        <HHHeader />

        {/* Content Section */}
        <main className="flex-grow container mx-auto px-4 py-4 font-sans mt-8">
          <div className="flex items-center mb-5">
            <IconHome
              size="large"
              color="#4F4F4F"
              className="mr-5 cursor-pointer"
              onClick={() => goToHome()}
            />
            <h2 className="font-bold text-[#4F4F4F] text-left text-2xl ">
              Information We Have Analyzed
            </h2>
          </div>

          {data?.length > 0 ? (
            <section className="bg-white mt-2 grid grid-cols-10 gap-10">
              <div className="col-span-7">
                <div className="grid grid-cols-10 gap-1 p-5 rounded-[20px] border border-solid border-opacity-10 bg-[#DEEBF2] bg-opacity-50">
                  <Image
                    src={currentApp?.app_thumbnail}
                    alt="icon"
                    width={80}
                    height={80}
                  />
                  <div className="col-span-2 p-0">
                    <div>
                      <h4 className="text-xl font-semibold text-left text-[#4F4F4F]">
                        {currentApp?.app_name}
                      </h4>
                      <p className="text-lg text-left text-[#4F4F4F]">
                        {currentApp?.developer}
                      </p>
                      <p className="text-lg font-medium text-left text-[#4F4F4F]">
                        {currentApp?.number_of_downloads}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-7 p-0">
                    <p className="text-lg text-left text-[#4F4F4F] text-justify">
                      {currentApp?.app_description.length > 300
                        ? currentApp?.app_description.substring(0, 300) + '...'
                        : currentApp?.app_description}
                    </p>
                  </div>
                </div>
                <div className="relative grid grid-cols-2 gap-44 p-0 mt-8 ">
                  <div className="col-span-1 p-5 rounded-[20px] border border-solid border-opacity-10 bg-[#DEEBF2] bg-opacity-50 h-[560px]">
                    <h4 className="text-xl font-bold text-left text-[#4F4F4F] mb-4">
                      Data Safety
                    </h4>

                    <h6 className="font-bold">I. Data Shared</h6>
                    {currentApp?.app_data_safety?.data_shared?.length > 0 ? (
                      currentApp?.app_data_safety?.data_shared?.map(
                        (item: any, index: any) => (
                          <div key={index}>
                            <a
                              className="cursor-pointer hover:text-[#36DDC4]"
                              onClick={() => setShowInfoWindow(item?.category)}
                            >
                              - {item.category.toString()}
                            </a>
                            <div
                              className={`${
                                showInfoWindow === item?.category
                                  ? ''
                                  : 'hidden'
                              } absolute mt-1 bg-white rounded p-3 shadow-lg border border-gray-300`}
                            >
                              {item?.sub_info?.map((sub: any, index: any) => {
                                return (
                                  <div key={index}>
                                    <p>
                                      {sub?.optional
                                        ? '[Optional] '
                                        : '[Must] '}
                                      {sub?.data_type} ({sub?.purpose})
                                    </p>
                                  </div>
                                );
                              })}
                              <IconClose
                                className="absolute top-1 right-1 cursor-pointer hover:text-[#36DDC4]"
                                size="small"
                                onClick={() => setShowInfoWindow('')}
                              />
                            </div>
                          </div>
                        )
                      )
                    ) : (
                      <p>- No data shared with third party</p>
                    )}
                    <br />

                    <h6 className="font-bold">II. Data Collected</h6>
                    {currentApp?.app_data_safety?.data_collected?.map(
                      (item: any, index: any) => (
                        <div key={index}>
                          <a
                            className="cursor-pointer hover:text-[#36DDC4]"
                            onClick={() => setShowInfoWindow(item?.category)}
                          >
                            - {item.category.toString()}
                          </a>
                          <div
                            className={`${
                              showInfoWindow === item?.category ? '' : 'hidden'
                            } absolute mt-1 bg-white rounded p-3 shadow-lg border border-gray-300`}
                          >
                            {item?.sub_info?.map((sub: any, index: any) => {
                              return (
                                <div key={index}>
                                  <p>
                                    {sub?.optional ? '[Optional] ' : '[Must] '}
                                    {sub?.data_type} ({sub?.purpose})
                                  </p>
                                </div>
                              );
                            })}
                            <IconClose
                              className="absolute top-1 right-1 cursor-pointer hover:text-[#36DDC4]"
                              size="small"
                              onClick={() => setShowInfoWindow('')}
                            />
                          </div>
                        </div>
                      )
                    )}
                    <br />

                    <h6 className="font-bold">III. Security Practices</h6>
                    {currentApp?.app_data_safety?.security_practices?.map(
                      (item: any, index: any) => (
                        <p key={index}>- {item.category.toString()}</p>
                      )
                    )}
                  </div>

                  <div className="col-span-1 p-5 rounded-[20px] border border-solid border-opacity-10 bg-[#DEEBF2] bg-opacity-50 h-[560px] overflow-y-auto">
                    <h4 className="text-xl font-bold text-left text-[#4F4F4F] mb-4">
                      Privacy Policy
                    </h4>

                    <h6 className="font-bold">I. Data Shared</h6>
                    <p>
                      {currentApp?.app_privacy_policy?.data_shared?.toString()}
                    </p>
                    <br />

                    <h6 className="font-bold">II. Data Collected</h6>
                    <p>
                      {currentApp?.app_privacy_policy?.data_collected?.toString()}
                    </p>
                    <br />

                    <h6 className="font-bold">III. Security Practices</h6>
                    <p>
                      {currentApp?.app_privacy_policy?.security_practices?.toString()}
                    </p>
                  </div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col items-center">
                    <div
                      className={`${
                        currentApp?.label?.incorrect == 1
                          ? 'bg-[#0000ff] cursor-pointer hover:bg-opacity-70'
                          : 'bg-[#ccc]'
                      } bg-opacity-50 flex justify-center w-[200px] py-4 my-3 rounded-lg flex justify-center items-center `}
                    >
                      <h1 className="text-xl text-white font-bold mr-2">
                        Incorrect
                      </h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 61 45"
                        fill="none"
                      >
                        <path
                          d="M20.4958 44.1162L0.883695 24.5041C-0.294565 23.3258 -0.294565 21.4154 0.883695 20.237L5.15063 15.97C6.32889 14.7916 8.23943 14.7916 9.41769 15.97L22.6294 29.1815L50.9273 0.883695C52.1056 -0.294565 54.0161 -0.294565 55.1944 0.883695L59.4613 5.15075C60.6396 6.32901 60.6396 8.23943 59.4613 9.4178L24.7629 44.1163C23.5845 45.2946 21.6741 45.2946 20.4958 44.1162Z"
                          fill={`#ffffff`}
                        />
                      </svg>
                    </div>

                    <div
                      className={`${
                        currentApp?.label?.incomplete == 1
                          ? 'bg-[#0000ff] cursor-pointer hover:bg-opacity-70'
                          : 'bg-[#ccc]'
                      } bg-opacity-50 flex justify-center my-3 rounded-lg flex justify-center items-center w-[200px] py-4`}
                      onClick={() =>
                        setShowInfoWindowPrivacyPolicy(
                          !showInfoWindowPrivacyPolicy
                        )
                      }
                    >
                      <h1 className="text-xl text-white font-bold mr-2">
                        Incomplete
                      </h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 61 45"
                        fill="none"
                      >
                        <path
                          d="M20.4958 44.1162L0.883695 24.5041C-0.294565 23.3258 -0.294565 21.4154 0.883695 20.237L5.15063 15.97C6.32889 14.7916 8.23943 14.7916 9.41769 15.97L22.6294 29.1815L50.9273 0.883695C52.1056 -0.294565 54.0161 -0.294565 55.1944 0.883695L59.4613 5.15075C60.6396 6.32901 60.6396 8.23943 59.4613 9.4178L24.7629 44.1163C23.5845 45.2946 21.6741 45.2946 20.4958 44.1162Z"
                          fill={`#ffffff`}
                        />
                      </svg>
                      <div
                        className={`${
                          showInfoWindowPrivacyPolicy ? '' : 'hidden'
                        } absolute bg-white rounded p-3 shadow-lg border border-gray-300 w-[400px]`}
                      >
                        <p>{currentApp?.label_description?.incomplete}</p>

                        <IconClose
                          className="absolute top-1 right-1 cursor-pointer hover:text-[#36DDC4]"
                          size="default"
                          onClick={() =>
                            setShowInfoWindowPrivacyPolicy(
                              !showInfoWindowPrivacyPolicy
                            )
                          }
                        />
                      </div>
                    </div>

                    <div
                      className={`${
                        currentApp?.label?.inconsistent == 1
                          ? 'bg-[#0000ff] cursor-pointer hover:bg-opacity-70'
                          : 'bg-[#ccc]'
                      } bg-opacity-50 flex justify-center w-[200px] py-4 my-3 rounded-lg flex justify-center items-center`}
                    >
                      <h1 className="text-xl text-white font-bold mr-2">
                        Inconsistent
                      </h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 61 45"
                        fill="none"
                      >
                        <path
                          d="M20.4958 44.1162L0.883695 24.5041C-0.294565 23.3258 -0.294565 21.4154 0.883695 20.237L5.15063 15.97C6.32889 14.7916 8.23943 14.7916 9.41769 15.97L22.6294 29.1815L50.9273 0.883695C52.1056 -0.294565 54.0161 -0.294565 55.1944 0.883695L59.4613 5.15075C60.6396 6.32901 60.6396 8.23943 59.4613 9.4178L24.7629 44.1163C23.5845 45.2946 21.6741 45.2946 20.4958 44.1162Z"
                          fill={`#ffffff`}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 pl-5 border-l-2 border-[#6B6B6B] text-[#4F4F4F]">
                {checkSignIn() ? (
                  <div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="flex">
                          <p className="text-left font-semibold">Username</p>
                          <svg
                            className="mt-1 ml-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992ZM8.00004 7.33325C8.36823 7.33325 8.66671 7.63173 8.66671 7.99992V11.3338C8.66671 11.702 8.36823 12.0005 8.00004 12.0005C7.63185 12.0005 7.33337 11.702 7.33337 11.3338V7.99992C7.33337 7.63173 7.63185 7.33325 8.00004 7.33325ZM8.00004 5.99992C8.36823 5.99992 8.66671 5.70144 8.66671 5.33325C8.66671 4.96506 8.36823 4.66659 8.00004 4.66659C7.63185 4.66659 7.33337 4.96506 7.33337 5.33325C7.33337 5.70144 7.63185 5.99992 8.00004 5.99992Z"
                              fill="#4F4F4F"
                            />
                          </svg>
                        </div>
                        <IconExit
                          className="mt-1 cursor-pointer"
                          onClick={handleShowModalSignOut}
                        />
                      </div>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg bg-[#DEEBF2] bg-opacity-50 px-5 py-3"
                        value={username}
                        disabled
                      />
                    </div>

                    <div className="my-5">
                      <div className="flex">
                        <p className="text-left font-semibold mb-2">Email</p>
                        <svg
                          className="mt-1 ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992ZM8.00004 7.33325C8.36823 7.33325 8.66671 7.63173 8.66671 7.99992V11.3338C8.66671 11.702 8.36823 12.0005 8.00004 12.0005C7.63185 12.0005 7.33337 11.702 7.33337 11.3338V7.99992C7.33337 7.63173 7.63185 7.33325 8.00004 7.33325ZM8.00004 5.99992C8.36823 5.99992 8.66671 5.70144 8.66671 5.33325C8.66671 4.96506 8.36823 4.66659 8.00004 4.66659C7.63185 4.66659 7.33337 4.96506 7.33337 5.33325C7.33337 5.70144 7.63185 5.99992 8.00004 5.99992Z"
                            fill="#4F4F4F"
                          />
                        </svg>
                      </div>
                      <input
                        type="email"
                        required
                        className="w-full rounded-lg bg-[#DEEBF2] bg-opacity-50 px-5 py-3"
                        value={email}
                        disabled
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-[200px] bg-gray-100 flex justify-center items-center">
                    <Button
                      onClick={handleShowModalLogin}
                      className="bg-gray-200 !text-gray-700"
                    >
                      Sign In
                    </Button>
                  </div>
                )}

                <div className="mt-10">
                  <div className="relative">
                    <h2 className="font-medium text-[#4F4F4F] text-left text-2xl">
                      Your Opinion
                    </h2>
                    <h2 className="absolute right-2 top-0 font-medium text-[#4F4F4F] text-left text-xl">
                      {parseInt(appOrderStrore || '') + 1}/{data?.length} (
                      {JSON.parse(categoryStore || '').category_name})
                    </h2>
                  </div>
                  <div className="relative my-4">
                    <form className="max-w-md">
                      <div className="text-left text-[#4F4F4F] text-md">
                        <div className="mb-1">
                          <input
                            type="radio"
                            name="opinion"
                            value="1"
                            className="form-radio accent-[#4f4f4f] h-4 w-4"
                            onChange={(e) => setOption(e.target.value)}
                          />
                          <span className="ml-2">Totally agree</span>
                        </div>
                        <div className="mb-1">
                          <input
                            type="radio"
                            name="opinion"
                            value="2"
                            className="form-radio accent-[#4f4f4f] h-4 w-4"
                            onChange={(e) => setOption(e.target.value)}
                          />
                          <span className="ml-2">Agree</span>
                        </div>
                        <div className="mb-1">
                          <input
                            type="radio"
                            name="opinion"
                            value="3"
                            className="form-radio accent-[#4f4f4f] h-4 w-4"
                            onChange={(e) => setOption(e.target.value)}
                          />
                          <span className="ml-2">Neutral</span>
                        </div>
                        <div className="mb-1">
                          <input
                            type="radio"
                            name="opinion"
                            value="4"
                            className="form-radio accent-[#4f4f4f] h-4 w-4"
                            onChange={(e) => setOption(e.target.value)}
                          />
                          <span className="ml-2">Disagree</span>
                        </div>
                        <div className="mb-1">
                          <input
                            type="radio"
                            name="opinion"
                            value="5"
                            className="form-radio accent-[#4f4f4f] h-4 w-4"
                            onChange={(e) => setOption(e.target.value)}
                          />
                          <span className="ml-2">Totally disagree</span>
                        </div>
                      </div>

                      <div className="absolute right-0 flex">
                        <button
                          type="button"
                          className="flex justify-center bg-[#36DDC4] bg-opacity-5 py-2 px-5 border border-[#36DDC4] border-opacity-50 rounded-xl mr-3"
                          onClick={prev}
                        >
                          <svg
                            className="mt-[5px]"
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                          >
                            <path
                              d="M13.9465 0.592219L0.365956 8.42704C-0.164375 8.73176 -0.0969846 9.47012 0.430416 9.6928L3.54501 10.9996L11.9629 3.58082C12.1241 3.43725 12.3526 3.657 12.2149 3.82401L5.15651 12.4236V14.7822C5.15651 15.4737 5.99156 15.7462 6.40176 15.2452L8.26231 12.9803L11.9131 14.5097C12.3292 14.6855 12.8038 14.4248 12.88 13.9765L14.9896 1.31886C15.0892 0.726999 14.4534 0.299219 13.9465 0.592219Z"
                              fill="#36DDC4"
                            />
                          </svg>
                          <p className="ml-2">Prev</p>
                        </button>

                        <button
                          type="button"
                          className="flex justify-center bg-[#36DDC4] bg-opacity-5 py-2 px-5 border border-[#36DDC4] border-opacity-50 rounded-xl"
                          onClick={next}
                        >
                          <p className="">Next</p>
                          <svg
                            className="mt-[5px] ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                          >
                            <path
                              d="M13.9465 0.592219L0.365956 8.42704C-0.164375 8.73176 -0.0969846 9.47012 0.430416 9.6928L3.54501 10.9996L11.9629 3.58082C12.1241 3.43725 12.3526 3.657 12.2149 3.82401L5.15651 12.4236V14.7822C5.15651 15.4737 5.99156 15.7462 6.40176 15.2452L8.26231 12.9803L11.9131 14.5097C12.3292 14.6855 12.8038 14.4248 12.88 13.9765L14.9896 1.31886C15.0892 0.726999 14.4534 0.299219 13.9465 0.592219Z"
                              fill="#36DDC4"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <hr className="mx-10 mt-20 border-[1px]"></hr>

                <div className="mt-10 text-lg text-[#4f4f4f]">
                  <a
                    className="flex cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      showToastDevelopment();
                    }}
                  >
                    <h3 className="text-left">See description of concepts</h3>
                    <svg
                      className="mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M7.58331 18.4166L18.4166 7.58331"
                        stroke="#36DDC4"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.58331 7.58331H18.4166V18.4166"
                        stroke="#36DDC4"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    className="flex mt-2 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      showToastDevelopment();
                    }}
                  >
                    <h3 className="text-right">
                      See exceptions provided by Google
                    </h3>
                    <svg
                      className="mt-0.5"
                      xmlns="http://www.w3.orgs/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M7.58331 18.4166L18.4166 7.58331"
                        stroke="#36DDC4"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.58331 7.58331H18.4166V18.4166"
                        stroke="#36DDC4"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          ) : (
            <div className="h-[500px] flex justify-center items-center bg-white">
              <Image
                src={'https://srdps.pfamilies.me/loading.gif'}
                alt="loading"
                className="w-[80px] bg-white"
                preview={false}
              />
            </div>
          )}

          <ModalSignIn
            visible={showModalLogin}
            handleCancel={handleShowModalLogin}
          />
          <ModalSignOut
            visible={showModalSignOut}
            handleCancel={handleShowModalSignOut}
          />
        </main>
      </div>
    </div>
  );
};

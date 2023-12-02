'use client';

import {fake} from '@/utils/fake';
import {convertNumber} from '@/utils/helpers';
import React, {useEffect, useState} from 'react';
import {Image} from '@douyinfe/semi-ui';

export const DetailPage = () => {
  const [category, setCategory] = useState<any>(null);
  const [data, setData] = useState<any>([]);
  const [currentApp, setCurrentApp] = useState<any>(null);

  const [username, setUsername] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [option, setOption] = useState<any>('');

  const submit = async () => {
    const payload = {
      username,
      email,
      option,
      currentApp: currentApp?.id,
    };
    console.log(payload);

    let appOrder = parseInt(localStorage.getItem('appOrder') || '0');

    if (appOrder < data.length - 1) {
      appOrder = appOrder + 1;
      localStorage.setItem('appOrder', JSON.stringify(appOrder));
      setCurrentApp(data[appOrder]);
    } else {
      localStorage.setItem('appOrder', JSON.stringify(0));
      window.location.href = `/`;
    }
  };

  const init = async () => {
    setData(fake.apps);

    // TODO: Get data from API
    const category = localStorage.getItem('category');
    if (category) {
      setCategory(JSON.parse(category));
    }

    localStorage.setItem('appOrder', JSON.stringify(0));
    setCurrentApp(fake.apps[0]);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [data, category, currentApp]);

  return (
    <div className="h-screen w-ful">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-[#f4f4f4] text-black text-lg p-4 w:lg-1/3 mx-auto mt-10 rounded-full font-sans">
          <div className="flex justify-center text-[#4F4F4F]">
            <a href="/" className="flex justify-center mx-12">
              <h3 className="text-left">Thông Tin Nhóm Nghiên Cứu</h3>
              <svg
                className="mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
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
            <a href="/" className="flex justify-center mx-12">
              <h3 className="text-right">Thông Tin Dự Án</h3>
              <svg
                className="mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
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
        </header>

        {/* Content Section */}
        <main className="flex-grow container mx-auto px-4 py-4 font-sans mt-10">
          <h2 className="font-bold text-[#4F4F4F] text-left text-2xl">
            Thông tin chúng tôi đã phân tích
          </h2>
          <section className="bg-white mt-2 grid grid-cols-10 gap-10">
            <div className="col-span-7">
              <div className="grid grid-cols-10 gap-1 p-5 rounded-[20px] border border-solid border-opacity-10 bg-[#DEEBF2] bg-opacity-50">
                <Image
                  src={currentApp?.thumbnail}
                  alt="icon"
                  width={80}
                  height={80}
                />
                <div className="col-span-2 p-0">
                  <div>
                    <h4 className="text-xl font-semibold text-left text-[#4F4F4F]">
                      {currentApp?.name}
                    </h4>
                    <p className="text-lg text-left text-[#4F4F4F]">
                      {currentApp?.developer}
                    </p>
                    <p className="text-lg font-medium text-left text-[#4F4F4F]">
                      {convertNumber(currentApp?.numberOfDownloads)}
                    </p>
                  </div>
                </div>
                <div className="col-span-7 p-0">
                  <p className="text-lg text-left text-[#4F4F4F] text-justify">
                    {currentApp?.description}
                  </p>
                </div>
              </div>
              <div className="relative grid grid-cols-2 gap-44 p-0 mt-8">
                <div className="col-span-1 p-5 rounded-[20px] border border-solid border-opacity-10 bg-[#DEEBF2] bg-opacity-50">
                  <h4 className="text-xl font-bold text-left text-[#4F4F4F] mb-4">
                    Data Safety
                  </h4>
                  <p>{currentApp?.dataSafety}</p>
                </div>

                <div className="col-span-1 p-5 rounded-[20px] border border-solid border-opacity-10 bg-[#DEEBF2] bg-opacity-50">
                  <h4 className="text-xl font-bold text-left text-[#4F4F4F] mb-4">
                    Privacy Policy
                  </h4>
                  <p>{currentApp?.privacyPolicy}</p>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col items-center">
                  <h3 className={`text-xl font-sans ${currentApp?.status == 1 ? 'text-[#00B298]' : 'text-[#fd0000]'} font-semibold`}>
                    {
                      currentApp?.status == 1 ? 'Correct' : 'Incorrect'
                    }
                  </h3>

                  <div className={`${currentApp?.status == 1 ? 'bg-[#BAFFF5]' : 'bg-[#fd0000]'} bg-opacity-50 flex justify-center px-20 py-5 my-3 rounded-lg`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="45"
                      viewBox="0 0 61 45"
                      fill="none"
                    >
                      <path
                        d="M20.4958 44.1162L0.883695 24.5041C-0.294565 23.3258 -0.294565 21.4154 0.883695 20.237L5.15063 15.97C6.32889 14.7916 8.23943 14.7916 9.41769 15.97L22.6294 29.1815L50.9273 0.883695C52.1056 -0.294565 54.0161 -0.294565 55.1944 0.883695L59.4613 5.15075C60.6396 6.32901 60.6396 8.23943 59.4613 9.4178L24.7629 44.1163C23.5845 45.2946 21.6741 45.2946 20.4958 44.1162Z"
                        fill={`${currentApp?.status == 1 ? '#36DDC4' : '#fd0000'}`}
                      />
                    </svg>
                  </div>

                  <h3 className={`text-xl font-sans ${currentApp?.status == 1 ? 'text-[#00B298]' : 'text-[#fd0000]'} font-semibold`}>
                    {
                      currentApp?.status == 1 ? 'Không vi phạm' : 'Vi phạm'
                    }
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-span-3 pl-5 border-l-2 border-[#6B6B6B] text-[#4F4F4F]">
              <div>
                <div>
                  <div className="flex">
                    <p className="text-left font-semibold mb-1">Tên của bạn</p>
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
                    type="text"
                    required
                    className="w-full rounded-lg bg-[#DEEBF2] bg-opacity-50 px-5 py-3"
                    placeholder="Nguyen Van A"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="my-5">
                  <div className="flex">
                    <p className="text-left font-semibold mb-1">
                      Email của bạn
                    </p>
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
                    placeholder="nguyenvana@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <h2 className="font-medium text-[#4F4F4F] text-left text-2xl">
                    Ý kiến của bạn
                  </h2>
                  <h2 className="absolute right-2 top-0 font-medium text-[#4F4F4F] text-left text-xl">
                    {currentApp?.id}/50 ({category?.name})
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
                        <span className="ml-2">Hoàn toàn đồng ý</span>
                      </div>
                      <div className="mb-1">
                        <input
                          type="radio"
                          name="opinion"
                          value="2"
                          className="form-radio accent-[#4f4f4f] h-4 w-4"
                          onChange={(e) => setOption(e.target.value)}
                        />
                        <span className="ml-2">Đồng ý</span>
                      </div>
                      <div className="mb-1">
                        <input
                          type="radio"
                          name="opinion"
                          value="3"
                          className="form-radio accent-[#4f4f4f] h-4 w-4"
                          onChange={(e) => setOption(e.target.value)}
                        />
                        <span className="ml-2">Trung lập</span>
                      </div>
                      <div className="mb-1">
                        <input
                          type="radio"
                          name="opinion"
                          value="4"
                          className="form-radio accent-[#4f4f4f] h-4 w-4"
                          onChange={(e) => setOption(e.target.value)}
                        />
                        <span className="ml-2">Không đồng ý</span>
                      </div>
                      <div className="mb-1">
                        <input
                          type="radio"
                          name="opinion"
                          value="5"
                          className="form-radio accent-[#4f4f4f] h-4 w-4"
                          onChange={(e) => setOption(e.target.value)}
                        />
                        <span className="ml-2">Hoàn toàn không đồng ý</span>
                      </div>
                    </div>

                    <div className="absolute right-0">
                      <button
                        type="button"
                        className="flex justify-center bg-[#36DDC4] bg-opacity-5 py-2 px-5 border border-[#36DDC4] border-opacity-50 rounded-xl"
                        onClick={submit}
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
                        <p className="ml-2">Gửi</p>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <hr className="mx-10 mt-20 border-[1px]"></hr>

              <div className="mt-10 text-lg text-[#4f4f4f]">
                <a href="/" className="flex">
                  <h3 className="text-left">Xem mô tả các khái niệm</h3>
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
                <a href="/" className="flex mt-2">
                  <h3 className="text-right">
                    Xem ngoại lệ cung cấp bởi Google
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
        </main>
      </div>
    </div>
  );
};

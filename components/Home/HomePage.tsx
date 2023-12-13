'use client';

import {ApiUrl} from '@/utils/apiUrl';
import {Image} from '@douyinfe/semi-ui';
import React, {useEffect, useState} from 'react';

export const HomePage = () => {
  const [data, setData] = useState<any>([]);

  const goToDetail = async (item: any) => {
    localStorage.setItem('category', JSON.stringify(item));
    window.location.href = `/detail`;
  };

  const init = async () => {
    const res: any = await fetch(ApiUrl.GET_ALL_CATEGORIES);
    await res.json().then((data: any) => {
      setData(data.data);
    });
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [data]);

  return (
    <div className="h-screen w-full">
      <div className="min-h-screen flex flex-col">
        <header className="bg-[#f4f4f4] text-black text-lg p-4 w:lg-1/3 mx-auto mt-10 rounded-full font-sans">
          <div className="flex justify-center text-[#4F4F4F]">
            <a href="/" className="flex justify-center mx-12">
              <h3 className="text-left">Research Group Information</h3>
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
              <h3 className="text-right">Project Information</h3>
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

        <main className="flex-grow container mx-auto px-4 py-4 font-sans text-2xl mt-10">
          <h2 className="font-bold text-[#4F4F4F] ml-[352px] mb-10">
            Select Category
          </h2>

          {data?.length === 0 ? (
            <div className="h-[500px] flex justify-center items-center bg-white">
              <Image
                src={"https://srdps.pfamilies.me/loading.gif"}
                alt="loading"
                className="w-[80px] bg-white"
                preview={false}
              />
            </div>
          ) : (
            <section className="bg-white mt-2 mx-[300px]">
              <div className="flex justify-center flex-wrap gap-[30px]">
                {data?.map((item: any, index: any) => (
                  <a
                    key={index}
                    className="hover:opacity-80 transition duration-300 ease-in-out cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      goToDetail(item);
                    }}
                  >
                    <div
                      className="relative rounded-[30px] w-44"
                    >
                      <Image
                        src={item?.category_thumbnail || 'https://srdps.pfamilies.me/social.png'}
                        alt={'https://srdps.pfamilies.me/social.png'}
                        className=""
                        preview={false}
                      />
                      <div className="absolute top-5 left-5">
                        <p className="font-bold text-xl text-white">{item?.category_name}</p>
                        <p className="font-bold text-sm text-white">{item?.total_app} apps</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

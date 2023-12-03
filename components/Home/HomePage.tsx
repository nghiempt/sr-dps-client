'use client';

import {APIService} from '@/utils/api/apps.api';
import {fake} from '@/utils/fake';
import {Image} from '@douyinfe/semi-ui';
import React, {useEffect, useState} from 'react';

export const HomePage = () => {
  const [data, setData] = useState<any>([]);

  const goToDetail = async (item: any) => {
    localStorage.setItem('category', JSON.stringify(item));
    window.location.href = `/detail`;
  };

  const init = async () => {
    const res = await APIService.getAllCategories();
    setData(res);
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

        <main className="flex-grow container mx-auto px-4 py-4 font-sans text-2xl mt-10">
          <h2 className="font-bold text-[#4F4F4F] ml-[346px] mb-5">
            Chọn Danh Mục
          </h2>

          {data?.length === 0 ? (
            <div className="h-[200px] flex justify-center items-center bg-white">
              <Image
                src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
                alt="loading"
                className="w-[50px] bg-white"
                preview={false}
              />
            </div>
          ) : (
            <section className="bg-white mt-2">
              <div className="flex justify-center">
                {data?.map((item: any, index: any) => (
                  <a
                    key={index}
                    className='hover:opacity-80 transition duration-300 ease-in-out cursor-pointer'
                    onClick={(e) => {
                      e.preventDefault();
                      goToDetail(item);
                    }}
                  >
                    <div
                      className="relative rounded-[20px] overflow-hidden m-3 h-44"
                      style={{
                        background:
                          'linear-gradient(74deg, #00AFFF 0%, #4D9BFF 100%)',
                      }}
                    >
                      <Image
                        src={item?.thumbnail}
                        alt={item?.thumbnail}
                        className="w-full h-full object-cover"
                        preview={false}
                      />
                      <div className="absolute bottom-0 right-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="158"
                          height="111"
                          viewBox="0 0 178 131"
                          fill="none"
                        >
                          <g filter="url(#filter0_d_49_9)">
                            <path
                              d="M107.855 45.8148C86.4592 19.6043 63.656 5.69347 50.763 13.1372C37.87 20.581 38.5155 47.2846 50.5166 78.9189L107.855 45.8148ZM66.0382 111.414C70.1895 118.604 74.5611 125.278 79.0747 131.525L139.102 96.8686C135.949 89.8363 132.354 82.7132 128.203 75.5231C124.052 68.333 119.68 61.6588 115.167 55.4121L55.1398 90.0686C58.2929 97.1009 61.887 104.224 66.0382 111.414ZM153.272 19.5932C131.31 2.9509 102.737 -3.22375 75.6106 3.28261C89.8351 9.6662 104.795 23.0095 118.286 39.7924L153.272 19.5932ZM29.7724 29.7473C10.607 49.9674 1.63533 77.8187 5.09965 105.14L40.0856 84.9413C32.2641 64.8854 28.1885 45.2579 29.7724 29.7473ZM162.722 27.9562L125.565 49.4084C130.172 55.8171 134.581 62.5561 138.602 69.5195C142.622 76.4829 146.254 83.6707 149.5 90.8649L186.624 69.4314C184.573 61.7632 181.594 54.2848 177.443 47.0947C173.291 39.9045 168.304 33.5857 162.722 27.9562ZM55.672 117.399C51.6517 110.436 48.0201 103.248 44.7736 96.0535L7.61718 117.506C9.70121 125.155 12.6475 132.652 16.7987 139.842C20.9499 147.033 25.9695 153.333 31.5521 158.962L68.6761 137.529C64.1014 131.101 59.6924 124.362 55.672 117.399ZM86.419 141.104C107.815 167.314 130.618 181.225 143.511 173.781C156.404 166.337 155.758 139.634 143.757 108L86.419 141.104ZM164.501 157.171C183.667 136.951 192.638 109.1 189.207 81.7593L154.221 101.958C162.01 122.033 166.085 141.661 164.501 157.171ZM41.002 167.325C62.9636 183.968 91.537 190.142 118.663 183.636C104.439 177.252 89.4786 163.909 75.988 147.126L41.002 167.325Z"
                              fill="url(#paint0_linear_49_9)"
                              shape-rendering="crispEdges"
                            />
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_49_9"
                              x="0.369629"
                              y="0.740234"
                              width="193.555"
                              height="193.438"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                              />
                              <feOffset dy="4" />
                              <feGaussianBlur stdDeviation="2" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                              />
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_49_9"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_49_9"
                                result="shape"
                              />
                            </filter>
                            <linearGradient
                              id="paint0_linear_49_9"
                              x1="50.7468"
                              y1="13.1466"
                              x2="143.495"
                              y2="173.791"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="white" stop-opacity="0.75" />
                              <stop offset="1" stop-color="#02AFFE" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="absolute top-5 left-7">
                        <h2 className="font-bold text-white">{item?.name}</h2>
                        <h2 className="font-bold text-white">5/5</h2>
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

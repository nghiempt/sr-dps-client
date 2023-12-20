'use client';

import {ApiUrl} from '@/utils/apiUrl';
import React, {useEffect, useState} from 'react';
import HeaderCustom from '../Global/Global.Header';
import FooterCustom from '../Global/Global.Footer';
import {
  List,
  Typography,
  Layout,
  Image,
  Divider,
  Spin,
} from '@douyinfe/semi-ui';

export const HomePage = () => {
  const {Content} = Layout;
  const {Title} = Typography;

  const [listCategory, setListCategory] = useState<any>([]);

  const goToStatistical = (category: any) => {
    localStorage.setItem('category', JSON.stringify(category));
    // localStorage.setItem(
    //   'user',
    //   JSON.stringify({
    //     user_id: 1,
    //     user_name: 'nghiempt',
    //     user_email: 'nghiempt.dev@gmail.com',
    //   })
    // );
    window.location.href = `/statistical`;
  };

  const init = async () => {
    const res: any = await fetch(ApiUrl.GET_ALL_CATEGORIES);
    await res.json().then((data: any) => {
      setListCategory(data.data);
    });
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [listCategory]);

  return (
    <Layout className="w-full h-screen flex flex-col justify-center items-center pt-10">
      <HeaderCustom />

      <Content className="w-3/5">
        <Title heading={3} style={{margin: '20px 0 0'}}>
          Select Category
        </Title>
        <Divider margin={'8px'} />
        <div className="mt-[14px]"></div>
        {listCategory.length === 0 ? (
          <div className="w-full h-[400px] flex justify-center items-center">
            <Spin size="large" />
          </div>
        ) : (
          <List
            grid={{
              gutter: 12,
              span: 6,
            }}
            dataSource={listCategory}
            renderItem={(category) => (
              <List.Item>
                <a
                  className="hover:opacity-80 transition duration-300 ease-in-out cursor-pointer mb-[7px]"
                  onClick={(e) => {
                    e.preventDefault();
                    goToStatistical(category);
                  }}
                >
                  <div className="relative rounded-[30px]">
                    <Image
                      src={
                        category?.category_thumbnail ||
                        'https://srdps.pfamilies.me/social.png'
                      }
                      alt={'category'}
                      preview={false}
                    />
                    <div className="absolute top-5 left-5">
                      <p className="font-bold text-xl text-white">
                        {category?.category_name}
                      </p>
                      <p className="font-bold text-sm text-white">
                        {category?.total_app} apps
                      </p>
                    </div>
                  </div>
                </a>
              </List.Item>
            )}
          />
        )}
      </Content>

      <FooterCustom />
    </Layout>
  );
};

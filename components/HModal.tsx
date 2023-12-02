'use client';

import {fake_apps, fake_categories} from '@/utils/fake';
import {
  IconApartment,
  IconBriefcase,
  IconBytedanceLogo,
  IconFeishuLogo,
  IconHelpCircle,
  IconTwitter,
  IconSearch,
  IconUploadError,
} from '@douyinfe/semi-icons';
import {Modal, Image, AutoComplete} from '@douyinfe/semi-ui';
import {useState} from 'react';

const HModal = ({isVisible, onClose}: {isVisible: any; onClose: any}) => {
  const [searchValue, setSearchValue] = useState({
    result: [],
    list: fake_apps,
  });

  const filterAppByCategoryID = (categoryID: string) => {
    let result = fake_apps?.filter((item: any) => item?.cat_id === categoryID);
    return result;
  };

  const renderIconCatgory = (categoryID: any) => {
    switch (categoryID) {
      case 1:
        return <IconFeishuLogo size="default" />;
      case 2:
        return <IconBytedanceLogo size="default" />;
      case 3:
        return <IconBriefcase size="default" />;
      case 4:
        return <IconApartment size="default" />;
      case 5:
        return <IconTwitter size="default" />;
      default:
        return <IconHelpCircle size="default" />;
    }
  };

  const handleCickApp = (app: any) => {
    window.open(app?.app_url, '_blank');
  };

  function renderItem(item: any) {
    return (
      <div
        className={`flex justify-start ${
          getWidthScreen() > 768 ? 'w-full' : 'w-[150px]'
        }  items-center border-b border-gray-100`}
      >
        <div className="flex flex-row gap-3 justify-center items-center pb-[5px]">
          <Image
            src={item?.app_logo}
            width={20}
            height={20}
            alt="loading"
            className={
              '!bg-[#00000000] flex items-center justify-center hover:pointer'
            }
          />
          <div>{item?.app_name}</div>
          {getWidthScreen() > 768 ? (
            <div className="flex flex-row gap-3 justify-center items-center">
              {'(' + item?.app_url + ')'}
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  function handleSelect(value: any) {
    window.open(value?.app_url, '_blank');
  }

  function search(value: any) {
    let result;
    if (value) {
      result = searchValue.list.filter((item: any) => {
        return item?.app_name.toLowerCase().includes(value.toLowerCase());
      });
      result = result.map((item: any) => {
        return {...item, value: item.app_name, label: item.app_name};
      });
    } else {
      result = [];
    }
    setSearchValue({result: result as never[], list: searchValue.list});
  }

  const getWidthScreen = () => {
    console.log('window.innerWidth', window.innerWidth);
    return window.innerWidth;
  };

  return (
    <Modal
      visible={isVisible}
      // title="Source Apps"
      onCancel={onClose}
      closable={false}
      footer={
        <div className="shrink-0 inline-flex w-full justify-between flex-col items-center gap-y-[0px] border-solid border-[#00000000] rounded-bl-[5px] rounded-br-[5px] bg-[#00000000]">
          <div className="self-stretch shrink-0 flex w-full justify-between items-center gap-x-[0px] bg-[#00000000]"></div>
        </div>
      }
      width={getWidthScreen() > 768 ? 1000 : 250}
    >
      <div className="self-stretch shrink-0 flex flex-col items-center gap-y-[16px]">
        <div className="self-stretch shrink-0 flex items-center gap-x-[24px] pl-2 pr-2">
          <AutoComplete
            className="h-[40px] w-full !bg-gray-100"
            size="large"
            placeholder="Search app"
            suffix={<IconSearch />}
            data={searchValue.result}
            renderItem={renderItem}
            onChangeWithObject
            onSelect={handleSelect}
            onSelectWithObject
            onSearch={search}
          />
        </div>

        {fake_categories?.map((category: any, index: any) => (
          <div key={index} className="w-full">
            {' '}
            <div className="self-stretch shrink-0 flex items-center">
              <div className="shrink-0 inline-flex flex justify-between items-center gap-x-[10px] w-full">
                <div className="flex justify-start items-center ml-2 mr-2 border-b border-gray-300 border-dashed w-full py-3">
                  {renderIconCatgory(category?.cat_id)}
                  <p className="shrink-0 min-w-[73px] ml-3 text-[15px] leading-[8px] tracking-[-0.14px] text-left align-top font-[600] !text-black-600">
                    {category?.cat_name}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-wrap items-center gap-y-[21px] flex-start mt-5 mb-10">
              {filterAppByCategoryID(category?.cat_id).map(
                (app: any, index: any) => (
                  <div key={index} className="w-[95px]">
                    <div
                      className="flex items-center justify-center flex-col cursor-pointer hover:opacity-60"
                      onClick={() => handleCickApp(app)}
                    >
                      <div className="!bg-white border border-gray-100 p-4 rounded-xl flex items-center justify-center">
                        <Image
                          src={app?.app_logo}
                          width={42}
                          height={42}
                          preview={false}
                          alt="loading"
                          fallback={<IconUploadError style={{fontSize: 50}} />}
                          onLoad={(e: any) => console.log('Image loaded!', e)}
                          className={
                            '!bg-[#00000000] flex items-center justify-center'
                          }
                        />
                      </div>

                      <p className="mt-2 text-[13px]">{app?.app_name}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default HModal;

import {SideSheet, Button, Upload} from '@douyinfe/semi-ui';
import {IconUpload} from '@douyinfe/semi-icons';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import HLanguageSelect from './HLanguageSelect';
import HSwitchMode from './HSwitchMode';

const HSidebarSetting = ({visible = false, closeHandle = () => {}}) => {
  return (
    <SideSheet
      visible={visible}
      title="Setting"
      closeOnEsc={true}
      closable={true}
      maskClosable={true}
      onCancel={closeHandle}
      width={360}
      footer={
        <div className="self-stretch shrink-0 flex justify-end items-start gap-x-[0px] bg-[#00000000]">
          <div className="self-stretch shrink-0 inline-flex items-center flex-row gap-x-[8px] bg-[#00000000]">
            <Button className="h-[32px]" onClick={closeHandle}>
              Cancel
            </Button>
            <Button className="h-[32px]" theme="light">
              Save
            </Button>
          </div>
        </div>
      }
      placement="left"
    >
      <div className="inline-flex flex-col items-start gap-y-[36px] py-[24px] px-[36px]">
        <div className="self-stretch shrink-0 flex flex-col items-start gap-y-[16px]">
          <p className="shrink-0 min-w-[68px] text-[14px]  leading-[20px] text-left align-top font-[700]">
            Language
          </p>
          <HLanguageSelect />
        </div>
        <div className="self-stretch shrink-0 flex flex-col items-start gap-y-[16px]">
          <Text className="shrink-0 min-w-[75px] text-[14px] leading-[20px] text-left align-top font-[700]">
            Dark mode
          </Text>
          <HSwitchMode />
        </div>

        <div className="self-stretch shrink-0 flex flex-col items-start gap-y-[16px]">
          <p className="shrink-0 min-w-[128px] text-[14px] leading-[20px] text-left align-top font-[700]">
            Background Image
          </p>
          <Upload
            className="w-[145px] h-[32px]"
            action="https://run.mocky.io/v3/d6ac5c9e-4d39-4309-a747-7ed3b5694859"
            dragSubText="png, jpeg"
            promptPosition="left"
            defaultFileList={[
              {
                uid: '1',
                name: 'file1.jpeg',
                status: 'success',
                size: '130kb',
                url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/semi-linker/semi-logo.png',
              },
            ]}
          >
            <Button icon={<IconUpload />} theme="light">
              Change Image
            </Button>
          </Upload>
        </div>
      </div>
    </SideSheet>
  );
};

export default HSidebarSetting;

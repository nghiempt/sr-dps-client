import {Button, Modal} from '@douyinfe/semi-ui';

export const ModalGroupInfo = ({
  visible,
  handleCancel,
}: {
  visible: any;
  handleCancel: any;
}) => {
  return (
    <Modal
      title="GroupInfo"
      visible={visible}
      onCancel={handleCancel}
      closeOnEsc={true}
      footer={
        <div className="shrink-0 inline-flex w-full justify-between flex-col items-center gap-y-[0px] border-solid border-[#00000000] rounded-bl-[5px] rounded-br-[5px] bg-[#00000000]">
          <div className="self-stretch shrink-0 flex w-full justify-between items-center gap-x-[0px] bg-[#00000000]">
            <div></div>
            <div className="flex flex-row">
              <div className="shrink-0 inline-flex justify-center items-center gap-x-[0px] pt-[0px] pl-[12px] pr-[0px] pb-[0px]">
                <Button className="h-[32px] bg-gray-100" type="tertiary">
                  Cancel
                </Button>
              </div>
              <div className="shrink-0 inline-flex justify-center items-center gap-x-[0px] pt-[0px] pl-[0px] pr-[0px] pb-[0px]">
                <Button className="h-[32px] !bg-blue-500 !text-white">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div>
        <h2>GroupInfo</h2>
      </div>
    </Modal>
  );
};

import {IconAlertTriangle} from '@douyinfe/semi-icons';
import {Button, Modal} from '@douyinfe/semi-ui';

export const ModalClearAll = ({
  isVisible,
  handleCancel,
  clearAllOption,
}: {
  isVisible: any;
  handleCancel: any;
  clearAllOption: any;
}) => {
  const submit = async () => {
    clearAllOption();
    handleCancel();
    window.location.href = `/statistical`;
  };

  return (
    <Modal
      title="Confirm Clear All"
      visible={isVisible}
      onOk={() => {}}
      onCancel={handleCancel}
      icon={
        <IconAlertTriangle
          style={{color: 'var(--semi-color-danger)'}}
          size="extra-large"
        />
      }
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
                <Button
                  className="h-[32px] !bg-[rgb(231,75,51)] !text-white hover:!opacity-80 hover:!text-white"
                  onClick={submit}
                >
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <p>Do you really want to CLEAR ALL your opinions ?</p>
    </Modal>
  );
};

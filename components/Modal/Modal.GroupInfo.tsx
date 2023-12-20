import {Modal, Button, List} from '@douyinfe/semi-ui';
import {IconBox, IconFaceuLogo, IconUserGroup} from '@douyinfe/semi-icons';

export const ModalGroupInfo = ({
  isVisible,
  handleCancel,
  groupInfo,
}: {
  isVisible: any;
  handleCancel: any;
  groupInfo: any;
}) => {
  const data = [
    {
      icon: <IconFaceuLogo style={{fontSize: 40}} />,
      title: `Group Name: ${groupInfo?.team_name}`,
      content: `${groupInfo?.target}`,
    },
    {
      icon: <IconBox style={{fontSize: 40}} />,
      title: 'Intended Target',
      content: `${groupInfo?.intended_target
        ?.map((item: any, index: any) => item)
        .join(' ')}`,
    },
    {
      icon: <IconUserGroup style={{fontSize: 40}} />,
      title: 'Member',
      content: `${groupInfo?.member
        ?.map((item: any, index: any) => item.name)
        .join(', ')}`,
    },
  ];

  return (
    <Modal
      header={null}
      visible={isVisible}
      onOk={() => {}}
      onCancel={handleCancel}
      centered
      footer={
        <div style={{textAlign: 'center'}}>
          <Button
            onClick={handleCancel}
            className="h-[32px] bg-blue-500 !text-white hover:!bg-blue-400"
            style={{
              width: 240,
              margin: '4px 50px',
            }}
          >
            Contact Us
          </Button>
          <Button
            className="h-[32px] bg-gray-100 !text-gray-700"
            style={{
              width: 240,
              margin: '4px 50px',
            }}
            onClick={handleCancel}
          >
            Learn more information
          </Button>
        </div>
      }
    >
      <h3
        style={{
          textAlign: 'center',
          fontSize: 24,
          margin: 40,
          fontWeight: 'bold',
        }}
      >
        Research Group Information
      </h3>
      <List
        dataSource={data}
        split={false}
        renderItem={(item) => (
          <List.Item
            header={item.icon}
            main={
              <div>
                <h6 style={{margin: 0, fontSize: 16, fontWeight: 'bold'}}>
                  {item.title}
                </h6>
                <p
                  style={{
                    marginTop: 4,
                    color: 'var(--semi-color-text-1)',
                    textAlign: 'justify',
                  }}
                >
                  {item.content}
                </p>
              </div>
            }
          />
        )}
      />
    </Modal>
  );
};

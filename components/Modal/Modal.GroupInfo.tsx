import {Modal, Button, List} from '@douyinfe/semi-ui';
import {IconVigoLogo, IconSemiLogo} from '@douyinfe/semi-icons';

export const ModalGroupInfo = ({
  isVisible,
  handleCancel,
}: {
  isVisible: any;
  handleCancel: any;
}) => {
  const data = [
    {
      icon: <IconSemiLogo style={{fontSize: 48}} />,
      title: 'Boost new feature adoption with Integration',
      content:
        'Sample data is prepared for you to demostrate how Integration may be useful for your team',
    },
    {
      icon: <IconVigoLogo style={{fontSize: 48}} />,
      title: 'Introducing Dark Mode',
      content:
        'Sample data is prepared for you to demostrate how Integration may be useful for your team',
    },
    {
      icon: <IconSemiLogo style={{fontSize: 48}} />,
      title: 'New List Component',
      content:
        'Sample data is prepared for you to demostrate how Integration may be useful for your team',
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
            type="primary"
            theme="solid"
            onClick={handleCancel}
            style={{
              width: 240,
              margin: '4px 50px',
            }}
          >
            Continue
          </Button>
          <Button
            className="h-[32px] bg-gray-100"
            type="tertiary"
            style={{
              width: 240,
              margin: '4px 50px',
            }}
            onClick={handleCancel}
          >
            Learn more features
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
        Semi Design New Features
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
                <p style={{marginTop: 4, color: 'var(--semi-color-text-1)'}}>
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

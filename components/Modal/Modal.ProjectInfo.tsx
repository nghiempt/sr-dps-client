import {IconMinusCircle, IconTickCircle} from '@douyinfe/semi-icons';
import {Button, List, Modal} from '@douyinfe/semi-ui';

export const ModalProjectInfo = ({
  isVisible,
  handleCancel,
  projectInfo,
}: {
  isVisible: any;
  handleCancel: any;
  projectInfo: any;
}) => {
  const data = [
    {
      icon: <IconTickCircle style={{fontSize: 40}} />,
      title: projectInfo?.info_1,
      content: projectInfo?.sub_info_1,
    },
    {
      icon: <IconMinusCircle style={{fontSize: 40}} />,
      title: projectInfo?.info_2,
      content: projectInfo?.sub_info_2,
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
            className="h-[32px] bg-gray-100 !text-gray-700"
            style={{
              width: 240,
              margin: '4px 50px',
            }}
            onClick={handleCancel}
          >
            Close
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
        Project Information
      </h3>
      <List
        dataSource={data}
        split={false}
        renderItem={(item) => (
          <List.Item
            header={item.icon}
            main={
              <div>
                <h6
                  style={{margin: 0, fontSize: 16, fontWeight: 'bold'}}
                  className="text-justify"
                >
                  {item.title.toString().substring(0, 100)} ...
                </h6>
                <p className="text-justify">{item.content}</p>
              </div>
            }
          />
        )}
      />
    </Modal>
  );
};

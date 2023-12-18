import {IconArrowUp} from '@douyinfe/semi-icons';
import {Descriptions, Modal, Tag} from '@douyinfe/semi-ui';

export const ModalProjectInfo = ({
  isVisible,
  handleCancel,
}: {
  isVisible: any;
  handleCancel: any;
}) => {
  const data = [
    {key: 'Actual Users', value: '1,480,000'},
    {
      key: '7-day Rentention',
      value: (
        <span>
          98%
          <IconArrowUp size="small" style={{color: 'red', marginLeft: '4px'}} />
        </span>
      ),
    },
  ];

  const data2 = [
    {key: 'Actual Users', value: '1,480,000'},
    {key: '7-day Rentention', value: '98%'},
    {key: 'Security Level', value: 'III'},
    {key: 'Category Tag', value: <Tag style={{margin: 0}}>E-commerce</Tag>},
    {key: 'Authorized State', value: 'Unauthorized'},
  ];

  return (
    <Modal
      title="Project Information"
      visible={isVisible}
      onOk={() => {}}
      onCancel={handleCancel}
      centered
      bodyStyle={{overflow: 'auto'}}
      footer={<div className=""></div>}
    >
      <Descriptions data={data2} />

      <Descriptions
        data={data}
        row
        size="small"
        style={{
          boxShadow: 'var(--semi-shadow-elevated)',
          backgroundColor: 'var(--semi-color-bg-2)',
          borderRadius: '4px',
          padding: '10px',
          marginTop: '20px',
        }}
      />
    </Modal>
  );
};

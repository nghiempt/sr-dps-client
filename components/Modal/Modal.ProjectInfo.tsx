import {Button, Modal} from '@douyinfe/semi-ui';

export const ModalProjectInfo = ({
  isVisible,
  handleCancel,
}: {
  isVisible: any;
  handleCancel: any;
}) => {
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
      <p style={{lineHeight: 1.8}}>
        Semi Design is a design system developed and maintained by IES Front-end
        Team and UED Team
      </p>
      <p style={{lineHeight: 1.8}}>
        Semi Design create a consistent, good-looking, easy-to-use, and
        efficient user experience with a user-centric, content-first, and
        human-friendly design system.
      </p>
      <ul>
        <li>
          <p>Content-first</p>
        </li>
        <li>
          <p>Customized theming</p>
        </li>
        <li>
          <p>Internationalized</p>
        </li>
        <li>
          <p>Humanism</p>
        </li>
      </ul>
    </Modal>
  );
};

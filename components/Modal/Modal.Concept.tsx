import {Modal, Button, List} from '@douyinfe/semi-ui';
import {IconClose, IconDuration, IconHash} from '@douyinfe/semi-icons';
import {useEffect, useState} from 'react';
import {ApiUrl} from '@/utils/apiUrl';

export const ModalConcept = ({
  isVisible,
  handleCancel,
}: {
  isVisible: any;
  handleCancel: any;
}) => {
  const [listConcept, setListConcept] = useState<any>({});

  const init = async () => {
    const resGroupInfo: any = await fetch(ApiUrl.GET_CONCEPT);
    await resGroupInfo.json().then((data: any) => {
      setListConcept(data.data);
      console.log(data.data);
    });
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [listConcept]);

  const data = [
    {
      icon: <IconDuration style={{fontSize: 40}} />,
      title: 'Incomplete',
      content: `${listConcept?.incomplete}`,
    },
    {
      icon: <IconHash style={{fontSize: 40}} />,
      title: 'Inconsistent',
      content: `${listConcept?.inconsistent}`,
    },
    {
      icon: <IconClose style={{fontSize: 40}} />,
      title: 'Incorrect',
      content: `${listConcept?.incorrect}`,
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
        Some Concepts Label
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

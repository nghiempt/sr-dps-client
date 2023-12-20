import {ApiUrl} from '@/utils/apiUrl';
import {
  IconExport,
  IconGlobeStroke,
  IconImport,
  IconPaperclip,
  IconSafe,
} from '@douyinfe/semi-icons';
import {Typography} from '@douyinfe/semi-ui';
import {useEffect, useState} from 'react';
import {Modal, Button, List} from '@douyinfe/semi-ui';

export const ModalException = ({
  isVisible,
  handleCancel,
}: {
  isVisible: any;
  handleCancel: any;
}) => {
  const {Text} = Typography;
  const [listException, setListException] = useState<any>({});

  const init = async () => {
    const resGroupInfo: any = await fetch(ApiUrl.GET_GOOGLE_EXCEPTION);
    await resGroupInfo.json().then((data: any) => {
      setListException(data.data);
      console.log(data.data);
    });
  };

  const directToLink = (link: string) => {
    window.open(link, '_blank');
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {}, [listException]);

  const data = [
    {
      icon: <IconImport style={{fontSize: 40}} />,
      title: 'Data Collected',
      content: listException?.data_collected,
    },
    {
      icon: <IconExport style={{fontSize: 40}} />,
      title: 'Data Shared',
      content: listException?.data_shared,
    },
    {
      icon: <IconSafe style={{fontSize: 40}} />,
      title: 'Security Practices',
      content: listException?.security_practices,
    },
    {
      icon: <IconPaperclip style={{fontSize: 40}} />,
      title: 'References',
      content: (
        <Text
          className="font-bold text-blue-500 cursor-pointer"
          icon={<IconGlobeStroke />}
          onClick={() =>
            directToLink(
              'https://support.google.com/googleplay/answer/11416267?hl=en&visit_id=638227555913177053-2754724865&p=data-safety&rd=1'
            )
          }
        >
          Link
        </Text>
      ),
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
        Exceptions by Google
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
                <p className="text-justify">{item.content}</p>
              </div>
            }
          />
        )}
      />
    </Modal>
  );
};

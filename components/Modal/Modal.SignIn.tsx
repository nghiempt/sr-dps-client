import {Button, Modal} from '@douyinfe/semi-ui';
import {useState} from 'react';
import {Form} from '@douyinfe/semi-ui';
import {IconMailStroked1, IconUser} from '@douyinfe/semi-icons';

export const ModalSignIn = ({
  isVisible,
  handleCancel,
}: {
  isVisible: any;
  handleCancel: any;
}) => {
  const [username, setUsername] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [loading, setLoading] = useState<any>(false);

  const {Input} = Form;

  const submit = async () => {
    setLoading(true);
    localStorage.setItem(
      'user',
      JSON.stringify({
        username,
        email,
      })
    );
    setLoading(false);
    handleCancel();
    window.location.href = `/statistical`;
  };

  return (
    <Modal
      title="Sign In"
      visible={isVisible}
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
                <Button
                  className="h-[32px] !bg-blue-500 !text-white"
                  loading={loading}
                  onClick={submit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <Form>
        <Input
          field="Username"
          style={{width: '100%'}}
          placeholder={'Nghiem Thanh Pham'}
          onChange={(e) => setUsername(e)}
          rules={[
            {required: true, message: 'required error'},
            {type: 'string', message: 'type error'},
          ]}
          prefix={<IconUser />}
          showClear
        />
        <Input
          field="Email"
          style={{width: '100%'}}
          placeholder={'nghiempt.dev@gmailc.com'}
          onChange={(e) => setEmail(e)}
          rules={[
            {required: true, message: 'required error'},
            {type: 'string', message: 'type error'},
          ]}
          prefix={<IconMailStroked1 />}
          showClear
        />
      </Form>
    </Modal>
  );
};

import {Button, Modal} from '@douyinfe/semi-ui';
import {useState} from 'react';

export const ModalLogin = ({
  visible,
  handleCancel,
}: {
  visible: any;
  handleCancel: any;
}) => {
  const [username, setUsername] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [loading, setLoading] = useState<any>(false);

  return (
    <Modal
      title="Sign In"
      visible={visible}
      onCancel={handleCancel}
      closeOnEsc={true}
      footer={
        <div className="shrink-0 inline-flex w-full justify-between flex-col items-center gap-y-[0px] border-solid border-[#00000000] rounded-bl-[5px] rounded-br-[5px] bg-[#00000000]">
          <div className="self-stretch shrink-0 flex w-full justify-between items-center gap-x-[0px] bg-[#00000000]">
            <div></div>
            <div className="flex flex-row">
              <div className="shrink-0 inline-flex justify-center items-center gap-x-[0px] pt-[0px] pl-[12px] pr-[0px] pb-[0px]">
                <Button
                  className="h-[32px] bg-gray-100"
                  type="tertiary"
                >
                  Cancel
                </Button>
              </div>
              <div className="shrink-0 inline-flex justify-center items-center gap-x-[0px] pt-[0px] pl-[0px] pr-[0px] pb-[0px]">
                <Button
                  className="h-[32px] !bg-blue-500 !text-white"
                  loading={loading}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div>
        <div>
          <div className="flex">
            <p className="text-left font-semibold mb-1">Username</p>
            <svg
              className="mt-1 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992ZM8.00004 7.33325C8.36823 7.33325 8.66671 7.63173 8.66671 7.99992V11.3338C8.66671 11.702 8.36823 12.0005 8.00004 12.0005C7.63185 12.0005 7.33337 11.702 7.33337 11.3338V7.99992C7.33337 7.63173 7.63185 7.33325 8.00004 7.33325ZM8.00004 5.99992C8.36823 5.99992 8.66671 5.70144 8.66671 5.33325C8.66671 4.96506 8.36823 4.66659 8.00004 4.66659C7.63185 4.66659 7.33337 4.96506 7.33337 5.33325C7.33337 5.70144 7.63185 5.99992 8.00004 5.99992Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
          <input
            type="text"
            required
            className="w-full rounded-lg bg-[#DEEBF2] bg-opacity-50 px-5 py-3"
            placeholder="Nguyen Van A"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="my-5">
          <div className="flex">
            <p className="text-left font-semibold mb-1">Email</p>
            <svg
              className="mt-1 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992ZM8.00004 7.33325C8.36823 7.33325 8.66671 7.63173 8.66671 7.99992V11.3338C8.66671 11.702 8.36823 12.0005 8.00004 12.0005C7.63185 12.0005 7.33337 11.702 7.33337 11.3338V7.99992C7.33337 7.63173 7.63185 7.33325 8.00004 7.33325ZM8.00004 5.99992C8.36823 5.99992 8.66671 5.70144 8.66671 5.33325C8.66671 4.96506 8.36823 4.66659 8.00004 4.66659C7.63185 4.66659 7.33337 4.96506 7.33337 5.33325C7.33337 5.70144 7.63185 5.99992 8.00004 5.99992Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
          <input
            type="email"
            required
            className="w-full rounded-lg bg-[#DEEBF2] bg-opacity-50 px-5 py-3"
            placeholder="nguyenvana@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

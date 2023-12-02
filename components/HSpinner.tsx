'use client';

import {Spin} from '@douyinfe/semi-ui';

const HSpinner = ({...props}) => {
  return (
    <div className="min-h-screen flex-col flex justify-center items-center">
      <div className="py-5">loading...</div>
      <Spin />
    </div>
  );
};

export default HSpinner;

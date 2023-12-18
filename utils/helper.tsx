import {Tooltip} from '@douyinfe/semi-ui';

export const renderDataSafetyContent = (data: any) => {
  console.log(data);
  
  const dataSafetyContent = [
    {
      label: 'Data Shared',
      value: 'Data Shared',
      key: '0',
      children: [
        data?.data_shared?.map((item: any) => {}),
        {
          label: (
            <Tooltip
              content={'example'}
              arrowPointAtCenter={false}
              position={'topLeft'}
            >
              <p>Device or other IDs</p>
            </Tooltip>
          ),
          value: 'Device or other IDs',
          key: '0-0',
        },
      ],
    },
    {
      label: 'Data Collected',
      value: 'Data Collected',
      key: '1',
      children: [
        // data?.data_collected?.map((item: any, index: any) => {
        //   return {
        //     label: (
        //       <Tooltip
        //         content={'example'}
        //         arrowPointAtCenter={false}
        //         position={'topLeft'}
        //       >
        //         <p>{item?.category}</p>
        //       </Tooltip>
        //     ),
        //     value: `${item?.category}`,
        //     key: `1-${index}`,
        //   }
        // }),
      ],
    },
    {
      label: 'Security Practices',
      value: 'Security Practices',
      key: '2',
      children: [
        {
          label: (
            <Tooltip
              content={'example'}
              arrowPointAtCenter={false}
              position={'topLeft'}
            >
              <p>Data is encrypted in transit</p>
            </Tooltip>
          ),
          value: 'Data is encrypted in transit',
          key: '2-0',
        },
      ],
    },
  ];

  return dataSafetyContent;
};

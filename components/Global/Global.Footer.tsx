'use client';

import {IconBytedanceLogo} from '@douyinfe/semi-icons';
import {Layout} from '@douyinfe/semi-ui';

const FooterCustom = () => {
  const {Footer} = Layout;
  return (
    <Footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        color: 'var(--semi-color-text-2)',
        fontSize: '14px',
      }}
    >
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconBytedanceLogo size="large" style={{marginRight: '8px'}} />
        <span>Copyright © 2023 Double N. All Rights Reserved. </span>
      </span>
    </Footer>
  );
};

export default FooterCustom;

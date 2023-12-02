'use client';

import {Nav} from '@douyinfe/semi-ui';
import Link from 'next/link';
import {IconUser, IconCode, IconSmallTriangleDown, IconUserGroup, IconSemiLogo} from '@douyinfe/semi-icons';
import {signIn, signOut, useSession} from 'next-auth/react';
import HBoxWrapper from './HBoxWrapper';

const HNavigation = () => {
  const {data: session, status} = useSession();
  return (
    <HBoxWrapper>
      <Nav className="h-[60px] w-full border-b-0" mode="horizontal">
        <Link href="/" className="hidden md:inline-block">
          <Nav.Header className="h-full" />
        </Link>
          <>
            <Link href="/">
              <Nav.Item
                itemKey="Home"
                text="Home"
                icon={<IconSemiLogo size="large" />}
              />
            </Link>
            <Link href="/admin">
              <Nav.Item
                itemKey="Admin Dashboard"
                text="Admin Dashboard"
                icon={<IconSemiLogo size="large" />}
              />
            </Link>
            <Link href="/home">
              <Nav.Item
                itemKey="Admin Dashboard"
                text="Admin Dashboard"
                icon={<IconSemiLogo size="large" />}
              />
            </Link>
            <div
              onClick={(e) => {
              }}
            >
              <Nav.Item
                itemKey="Login"
                text="Sign in"
                icon={<IconSemiLogo size="large" />}
              />
            </div>
          </>
      </Nav>
    </HBoxWrapper>
  );
};

export default HNavigation;

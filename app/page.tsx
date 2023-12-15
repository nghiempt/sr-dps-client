import HBoxWrapper from '@/components/HBoxWrapper';
import {HomePage} from '@/components/Home/Home.Page';

export default async function HomeServer() {
  return (
    <HBoxWrapper>
      <HomePage />
    </HBoxWrapper>
  );
}

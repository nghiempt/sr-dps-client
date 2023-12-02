import HBoxWrapper from '@/components/HBoxWrapper';
import {HomePage} from '@/components/Home/HomePage';

export default async function HomeServer() {
  return (
    <HBoxWrapper>
      <HomePage />
    </HBoxWrapper>
  );
}

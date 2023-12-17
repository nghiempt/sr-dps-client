import BoxWrapperCustom from '@/components/Global/Global.BoxWrapper';
import {HomePage} from '@/components/Home/Home.Page';

export default async function HomeServer() {
  return (
    <BoxWrapperCustom>
      <HomePage />
    </BoxWrapperCustom>
  );
}

import BoxWrapperCustom from '@/components/Global/Global.BoxWrapper';
import {StatisticalPage} from '@/components/Statistical/Statistical.Page';

export default async function HomeServer() {
  return (
    <BoxWrapperCustom>
      <StatisticalPage />
    </BoxWrapperCustom>
  );
}

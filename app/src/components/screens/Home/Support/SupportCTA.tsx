import type { FC } from 'react';

import { SecondaryButton } from '@components/ui/Buttons/CustomButton';

import sharedStyles from './Support.module.scss';

const SupportCTA: FC = () => (
  <div className={sharedStyles['support-info']}>
    <p className={sharedStyles['support-text']}>Підтримайте Спільноту та подбайте про щасливе майбутнє молоді!</p>
    <SecondaryButton type="route-link" className={sharedStyles['support-button']} to="/Support">
      Підтримати
    </SecondaryButton>
  </div>
);

export default SupportCTA;

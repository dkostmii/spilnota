import type { FC } from 'react';

import { GhostButton } from '@components/ui/Buttons/CustomButton';
import BecomePartnerButton from './BecomePartnerButton';

import styles from './Partners.module.scss';

interface Props {
  showMorePartnersLink?: boolean;
}

const Buttons: FC<Props> = ({ showMorePartnersLink = false }) => (
  <div className={styles['partners-buttons']}>
    {showMorePartnersLink && (
      <GhostButton type="route-link" className={styles['more-partners-link']} to="/Partners">
        Дивитись більше
      </GhostButton>
    )}
    <BecomePartnerButton />
  </div>
);

export default Buttons;

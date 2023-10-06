import type { FC } from 'react';

import { useLocation } from 'react-router-dom';

import { GhostButton } from '@components/ui/Buttons/CustomButton';
import BecomePartnerButton from './BecomePartnerButton';

import styles from './Partners.module.scss';

const Buttons: FC = () => {
  const { pathname } = useLocation();

  const showMorePartnersLink = !pathname.endsWith('partners');

  return (
    <div className={styles['partners-buttons']}>
      {showMorePartnersLink && (
        <GhostButton type="route-link" className={styles['more-partners-link']} to="/Partners">
          Дивитись більше
        </GhostButton>
      )}
      <BecomePartnerButton />
    </div>
  );
};
export default Buttons;

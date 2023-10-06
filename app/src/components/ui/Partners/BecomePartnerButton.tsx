import type { FC } from 'react';

import ErrorLight from '@img/ErrorLight.svg';

import { PrimaryButton } from '@components/ui/Buttons/CustomButton';
import { useGetBecomePartnerPresentationQuery } from '@store/services/presentation';

import sharedStyles from './Partners.module.scss';
import style from './BecomePartnerButton.module.scss';

const BecomePartnerButton: FC = () => {
  const { data, error, isLoading } = useGetBecomePartnerPresentationQuery();

  if (error || !(isLoading || error || data)) {
    return (
      <div className={style.wrapper}>
        <img className={style.wrapper_icon} src={ErrorLight} alt="" />
      </div>
    );
  }

  return (
    <PrimaryButton
      type="link"
      href={data && data.file && data.file.url}
      disabled={isLoading || !data}
      target="_blank"
      className={sharedStyles['become-partner-btn']}
    >
      Стати партнером
    </PrimaryButton>
  );
};

export default BecomePartnerButton;

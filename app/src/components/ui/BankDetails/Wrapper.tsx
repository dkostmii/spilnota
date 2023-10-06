import type { FC } from 'react';

import { useGetBankDetailsQuery } from '@store/services/bankDetails';

import BankDetails from './index';

import ErrorLight from '@img/ErrorLight.svg';

import InlineLoader from '@components/ui/Loader/InlineLoader';

import style from './BankDetails.module.scss';

const BankDetailsWrapper: FC = () => {
  const { data, error, isLoading } = useGetBankDetailsQuery();

  if (isLoading) {
    return (
      <div className={style.wrapper}>
        <InlineLoader compact />
      </div>
    );
  }

  if (error || !(isLoading || error || data)) {
    return (
      <div className={style.wrapper}>
        <img className={style.wrapper_icon} src={ErrorLight} alt="" />
      </div>
    );
  }

  return <BankDetails data={data} />;
};

export default BankDetailsWrapper;

import type { FC } from 'react';

import { useGetSupportItemsQuery } from '@store/services/support';

import SupportPanel from './index';

import ErrorLight from '@img/ErrorLight.svg';

import InlineLoader from '@components/ui/Loader/InlineLoader';

import style from './SupportPanel.module.scss';

const SupportPanelWrapper: FC = () => {
  const { data, error, isLoading } = useGetSupportItemsQuery();

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

  return <SupportPanel data={data} />;
};

export default SupportPanelWrapper;

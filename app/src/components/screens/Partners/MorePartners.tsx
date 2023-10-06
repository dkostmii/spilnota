import type { FC } from 'react';

import PartnersList from '@components/ui/Partners/List';
import InlineLoader from '@components/ui/Loader/InlineLoader';

import { useGetPartnersQuery } from '@store/services/partners';
import useHeaderSize from '@hooks/useHeaderSize';

import styles from './MorePartners.module.scss';

const MorePartners: FC = () => {
  const { height: headerHeight } = useHeaderSize();

  const { data, error, isLoading } = useGetPartnersQuery();

  if (error) {
    throw new Error('Unable to load data');
  }

  if (!data) {
    throw new Error('Unable to load data');
  }

  return (
    <section style={{ paddingTop: headerHeight }}>
      <div className={styles.container}>
        <h2 className="section-title">Партнери</h2>
        {isLoading ? <InlineLoader /> : <PartnersList displayAll data={data} />}
      </div>
    </section>
  );
};

export default MorePartners;

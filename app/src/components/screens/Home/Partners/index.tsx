import type { FC } from 'react';

import Section from '@components/layout/Section';

import PartnersList from '@components/ui/Partners/List';
import PartnersButtons from '@components/ui/Partners/Buttons';
import InlineLoader from '@components/ui/Loader/InlineLoader';

import { useGetPartnersQuery } from '@store/services/partners';

import style from './Partners.module.scss';

const Partners: FC = () => {
  const { data, error, isLoading } = useGetPartnersQuery();

  if (error) {
    throw new Error('Unable to load data');
  }

  if (!isLoading && !error && !data) {
    throw new Error('Unable to load data');
  }

  if (!isLoading && data.length < 1) {
    return null;
  }

  return (
    <Section id="Partners">
      <h2 className="section-title">Наші партнери</h2>
      {isLoading ? (
        <InlineLoader />
      ) : (
        <div className={style.container}>
          <PartnersList data={data} />
          <PartnersButtons showMorePartnersLink />
        </div>
      )}
    </Section>
  );
};

export default Partners;

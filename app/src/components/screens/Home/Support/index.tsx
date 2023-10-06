import BankDetailsWrapper from '@components/ui/BankDetails/Wrapper';

import Section from '@components/layout/Section';

import LayoutSeparator from './LayoutSeparator';
import SupportCTA from './SupportCTA';

import style from './Support.module.scss';

const Support = () => (
  <Section className={style.wrapper} id="Support">
    <h2 className="section-title">Підтримка</h2>
    <div className={style.layout}>
      <div className={style['bank-details-wrapper']}>
        <BankDetailsWrapper />
      </div>
      <LayoutSeparator />
      <SupportCTA />
    </div>
  </Section>
);

export default Support;

import type { FC } from 'react';

import MorePartners from '@components/screens/Partners/MorePartners';
import RetryFetch from '@components/ui/RetryFetch';

const Partners: FC = () => (
  <RetryFetch>
    <MorePartners />
  </RetryFetch>
);

export default Partners;

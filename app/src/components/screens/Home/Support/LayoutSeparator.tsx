import type { FC } from 'react';

import Separator from '@components/ui/Separator';

import sharedStyles from './Support.module.scss';

const LayoutSeparator: FC = () => (
  <div className={sharedStyles.layout_separator_wrapper}>
    <Separator className={sharedStyles.layout_separator} vertical />
  </div>
);

export default LayoutSeparator;

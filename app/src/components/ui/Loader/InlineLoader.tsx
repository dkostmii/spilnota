import type { FC } from 'react';

import DotLoader from 'react-spinners/DotLoader';
import variables from '@data/variables.json';

import style from './InlineLoader.module.scss';

interface Props {
  compact?: boolean;
}

const InlineLoader: FC<Props> = ({ compact = false }) => {
  if (compact) {
    return <DotLoader color={variables.accent} loading />;
  }

  return (
    <div className={style.container}>
      <DotLoader color={variables.accent} loading />
      <p className={style.caption}>Завантаження...</p>
    </div>
  );
};

export default InlineLoader;

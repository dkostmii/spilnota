import type { FC } from 'react';

import DropdownItem from '@components/ui/DropdownItem';

import breakpoints from '@data/breakpoints.json';

import useWindowSize from '@hooks/useWindowSize';
import config from '@/config';

import style from './InformationListBlock.module.scss';

interface Props {
  title: string;
  subtitle: string;
  items: string[];
}

const InformationListBlock: FC<Props> = ({ title, subtitle, items }) => {
  const { width } = useWindowSize(config.resizeDebounceTimeMs);

  const listItems = items.map((item, id) => <li key={id}>{item}</li>);

  if (width < breakpoints.tablet) {
    return (
      <DropdownItem title={title}>
        <h3 className={style.subtitle}>{subtitle}</h3>
        <ul className={style.list}>{listItems}</ul>
      </DropdownItem>
    );
  }

  return (
    <div className={style.container}>
      <h3 className={style.title}>{title}</h3>
      <h3 className={style.subtitle}>{subtitle}</h3>
      <ul className={style.list}>{listItems}</ul>
    </div>
  );
};

export default InformationListBlock;

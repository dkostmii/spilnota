import type { FC } from 'react';

import type IPartner from '@interfaces/IPartner';

import Item from './Item';

import styles from './Partners.module.scss';

interface Props {
  displayAll?: boolean;
  data: IPartner[];
}

const List: FC<Props> = ({ data, displayAll = false }) => {
  let className = styles['partners-list'];

  if (displayAll) {
    className = `${className} ${styles['display-all']}`;
  }

  return (
    <ul className={className}>
      {data.map((item, id) => (
        <Item key={id} data={item} />
      ))}
    </ul>
  );
};

export default List;

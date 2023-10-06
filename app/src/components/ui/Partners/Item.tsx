import type { FC } from 'react';

import type IPartner from '@interfaces/IPartner';

import styles from './Partners.module.scss';

interface Props {
  data: IPartner;
}

const Item: FC<Props> = ({ data }) => {
  let imgUrl = data.logo.url;

  if (data.logo.formats && data.logo.formats.small) {
    imgUrl = data.logo.formats.small.url;
  }

  return (
    <li className={styles['partners-element']}>
      <a href={data.url}>
        <img className="img-container" src={imgUrl} alt="" />
      </a>
    </li>
  );
};

export default Item;

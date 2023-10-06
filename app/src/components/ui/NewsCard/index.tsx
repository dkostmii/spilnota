import type { FC } from 'react';
import { Link } from 'react-router-dom';

import type INews from '@interfaces/INews';

import markdownToPlaintext from '@/helpers/markdownToPlaintext';
import { trimEllipsis } from '@/helpers/words';

import styles from './NewsCard.module.scss';

interface Props {
  data: INews;
}

const NewsCard: FC<Props> = ({ data }) => {
  const title = trimEllipsis(data.title, 4);

  let content = markdownToPlaintext(data.content);
  content = trimEllipsis(content, 10);

  let imgUrl = data.photo.url;

  if (data.photo.formats && data.photo.formats.small) {
    imgUrl = data.photo.formats.small.url;
  }

  return (
    <Link to={`/News/${data.id}`}>
      <div className={styles.container}>
        <img className={styles.image} src={imgUrl} alt="" />
        <div className={styles.caption}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;

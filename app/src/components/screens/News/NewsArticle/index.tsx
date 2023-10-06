import type { FC } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import InlineLoader from '@components/ui/Loader/InlineLoader';

import { useGetNewsArticleQuery } from '@store/services/news';
import useResponsiveImage from '@hooks/useResponsiveImage';
import useHeaderSize from '@hooks/useHeaderSize';

import styles from './NewsArticle.module.scss';

import './NewsArticle.scss';

const NewsArticle: FC = () => {
  const { height: headerHeight } = useHeaderSize();
  const navigate = useNavigate();
  let { newsArticleId } = useParams();

  if (!newsArticleId) {
    newsArticleId = '';
    navigate('/');
  }

  const { data, error, isLoading } = useGetNewsArticleQuery(newsArticleId);
  const image = useResponsiveImage(data && data.photo && data.photo);

  if (error) {
    throw new Error('Unable to load data');
  }

  if (!isLoading && !error && !data) {
    throw new Error('Unable to load data');
  }

  if (isLoading) {
    return <InlineLoader />;
  }

  return (
    <div className={styles.container} style={{ paddingTop: headerHeight }}>
      {image && image.url && <img className={styles.photo} src={image.url} alt="" />}
      <div className={`${styles.content} news-article`}>
        <h2 className={styles.title}>{data.title}</h2>
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default NewsArticle;

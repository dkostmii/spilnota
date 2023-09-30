import type { FC } from 'react'

import ReactMarkdown from 'react-markdown'

import useHeaderSize from '@hooks/useHeaderSize'

import newsData from '@data/news_temp';

import styles from './NewsArticle.module.scss';
import './NewsArticle.scss';

const data = newsData[0]

const NewsArticle: FC = () => {
  const { height: headerHeight } = useHeaderSize()

  return (
    <div className={styles.container} style={{ paddingTop: headerHeight }}>
      <img className={styles.photo} src={data.photo.url} alt="" />
      <div className={`${styles.content} news-article`}>
        <h2 className={styles.title}>{data.title}</h2>
        <ReactMarkdown>
          {data.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default NewsArticle

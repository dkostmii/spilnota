import type { FC } from 'react'
import { Link } from 'react-router-dom'

import type INews from '@interfaces/INews'

import markdownToPlaintext from '@/helpers/markdownToPlaintext'
import { trimEllipsis } from '@/helpers/words'

import styles from './NewsCard.module.scss'


interface Props {
  data: INews
}


const NewsCard: FC<Props> = ({ data }) => {
  data.title = trimEllipsis(data.title, 4)
  data.content = markdownToPlaintext(data.content)
  data.content = trimEllipsis(data.content, 10)

  return (
    <Link to={`/News/${data.id}`}>
      <div className={styles.container}>
        <img className={styles.image} src={data.photo.url} alt="" />
        <div className={styles.caption}>
          <h4 className={styles.title}>{data.title}</h4>
          <p className={styles.content}>{data.content}</p>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard

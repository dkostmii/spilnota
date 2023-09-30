import type { FC } from 'react'

import InformationListBlock from '@components/ui/InformationListBlock'

import styles from './InformationList.module.scss'

import data from '@data/informationList.json'


const titleClass = `section-title-dark ${styles["information-list-title"]}`


const InformationList: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles["information-list"]}>
      <h1 className={titleClass}>{data.title}</h1>
      <div className={styles["information-list-blocks"]}>
        {data.items.map((item, id) => (
          <InformationListBlock key={id} title={item.title} subtitle={item.subtitle} items={item.items} />
        ))}
      </div>
    </div>
  </div>
)

export default InformationList

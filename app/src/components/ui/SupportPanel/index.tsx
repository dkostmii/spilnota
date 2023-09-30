import type { FC } from 'react'
import type { ISupport, ISupportCollection } from '@interfaces/ISupport'

import { useState } from 'react'

import SupportPanelButton from '@components/ui/Buttons/SupportPanelButton'
import { GhostButton } from '@components/ui/Buttons/CustomButton'

import ArrowBack from '@img/ArrowBack.svg'

import styles from './SupportPanel.module.scss'


type ISupportItem = ISupport | ISupportCollection

interface Props {
  data: ISupportItem[]
}

interface SupportPanelItemProps {
  item: ISupportItem
  onClick?: (coll: ISupportCollection) => void
}


const SupportPanelItem: FC<SupportPanelItemProps> = ({ item, onClick }) => {
  const itemCollection = item as ISupportCollection

  if (Array.isArray(itemCollection.items)) {
    const clickHandler = () => {
      if (onClick instanceof Function) {
        onClick(itemCollection)
      }
    }

    return (
      <SupportPanelButton
        className={`${styles.button} ${styles.button_coll}`}
        type="button"
        onClick={clickHandler}>
          {itemCollection.title}
      </SupportPanelButton>
    )
  }

  const singleItem = item as ISupport

  return (
    <SupportPanelButton
      className={styles.button}
      type="link"
      href={singleItem.url}>
        {singleItem.title}
    </SupportPanelButton>
  )
}

const SupportPanel: FC<Props> = ({ data }) => {
  const [coll, setColl] = useState<ISupportCollection | null>(null)

  if (coll) {
    return (
      <div className={styles.layout}>
        <div className={styles.container}>
          <div className={`${styles.heading} ${styles.heading_shift}`}>
            <GhostButton
              className={styles["return-button"]}
              type="button"
              onClick={() => setColl(null)}>
                <img
                  className={styles["return-button_icon"]}
                  src={ArrowBack}
                  alt="" />
            </GhostButton>
            <h2 className={styles.title}>{coll.title}</h2>
          </div>
          <div className={styles.items}>
            {coll.items.map((item, id) => (
              <SupportPanelItem key={id} item={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Оберіть спосіб підтримки</h2>
        </div>
        <div className={styles.items}>
          {data.map((item, id) => (
            <SupportPanelItem key={id} item={item} onClick={(coll) => setColl(coll)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SupportPanel

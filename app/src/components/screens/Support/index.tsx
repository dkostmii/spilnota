import type { FC } from 'react'

import SupportPanel from '@components/ui/SupportPanel'

import useHeaderSize from '@hooks/useHeaderSize'

import supportData from '@data/support.json'

import Support2 from '@img/Support2.png'

import styles from './Support.module.scss'


const Support: FC = () => {
  const { height: headerHeight } = useHeaderSize()

  return (
    <section style={{ paddingTop: headerHeight }}>
      <div className={styles.wrapper}>
        <SupportPanel data={supportData} />
        <div className={styles.message}>
          <div className={styles.caption}>
            <h1 className="section-title">Підтримка</h1>
            <p>Підтримайте Спільноту та подбайте про щасливе майбутнє молоді!</p>
          </div>
          <img className={styles.message_img} src={Support2} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Support

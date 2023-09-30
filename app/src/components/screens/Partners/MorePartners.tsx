import type { FC } from 'react'

import { useMemo } from 'react'

import PartnersList from "@components/ui/Partners/List"

import partnersData from '@data/partners_temp'
import useHeaderSize from '@hooks/useHeaderSize'

import styles from './MorePartners.module.scss'

const MorePartners: FC = () => {
  const { height: headerHeight } = useHeaderSize()
  const data = useMemo(() => new Array(20).fill(partnersData[0]), [])

  return (
    <section style={{ paddingTop: headerHeight }}>
      <div className={styles.container}>
        <h2 className="section-title">Партнери</h2>
        <PartnersList displayAll data={data} />
      </div>
    </section>
  )
}

export default MorePartners

import type { FC } from 'react'

import Separator from '@components/ui/Separator'

import styles from './PanelSeparator.module.scss'


const PanelSeparator: FC = () => (
  <div className={styles.separator_wrapper}>
    <Separator className={styles.separator} />
  </div>
)

export default PanelSeparator

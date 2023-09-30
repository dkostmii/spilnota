import type { FC } from 'react'

import styles from './SupportButton.module.scss'

const SupportButton: FC = () => (
  <a className={styles.button} href="/Support">Підтримати</a>
)

export default SupportButton

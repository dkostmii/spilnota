import type { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './SupportButton.module.scss'

const SupportButton: FC = () => (
  <Link className={styles.button} to="/Support">Підтримати</Link>
)

export default SupportButton

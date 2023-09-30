import type { FC } from 'react'

import type IPartner from '@interfaces/IPartner'

import styles from './Partners.module.scss'

interface Props {
  data: IPartner
}


const Item: FC<Props> = ({ data }) => (
  <li className={styles["partners-element"]}>
    <a href={data.url}>
      <img className="img-container" src={data.imgUrl} alt="" />
    </a>
  </li>
)

export default Item

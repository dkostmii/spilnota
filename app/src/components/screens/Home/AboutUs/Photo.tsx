import type { FC } from 'react'

import sharedStyles from './AboutUs.module.scss'
import img from '@img'


const Photo: FC = () => (
  <div className={sharedStyles["about-photo"]}>
    <img className={sharedStyles["about-photo_message"]} src={img.MessageAbout} alt="Message" />
    <div className={sharedStyles["chiled-block-about-photo"]}>
      <a href="https://ridni.org.ua/">
        <img src={img.Logo_Ridni} alt="Ridni" />
      </a>

      <a href="https://city-adm.lviv.ua/">
        <img src={img.Logo_LMR} alt="Львівська міська рада" />
      </a>
    </div>
  </div>
)

export default Photo

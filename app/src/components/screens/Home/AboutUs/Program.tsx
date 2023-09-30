import type { FC } from 'react'

import sharedStyles from './AboutUs.module.scss'

import img  from '@img'


const Program: FC = () => (
  <div>
    <h1 className="section-title">Наповнення формаційної програми</h1>
    <div className={sharedStyles["about-blocks"]}>
      <div className={sharedStyles["about-block"]}>
        <img src={img.Development} alt="" />
        <div className={sharedStyles["about-block-text"]}>
          <b>Особистий розвиток</b>
          <p>
            Пізнання та прийняття себе. Нагода краще зрозуміти себе та
            відкрити у собі таланти для подальшого їх розвитку.
          </p>
        </div>
      </div>

      <div className={sharedStyles["about-block"]}>
        <img src={img.Environment} alt="" />
        <div className={sharedStyles["about-block-text"]}>
          <b>Виховне середовище</b>
          <p>
            Можливість всебічно розвиватися завдяки запропонованій
            навчальній програмі.
          </p>
        </div>
      </div>

      <div className={sharedStyles["about-block"]}>
        <img src={img.Community} alt="" />
        <div className={sharedStyles["about-block-text"]}>
          <b>Формування спільноти</b>
          <p>
            Створення кола активних молодих людей з сильною проактивною та
            моральною позицією в суспільстві.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Program

import type { FC } from 'react';

import sharedStyles from './AboutUs.module.scss';

import AboutUs from '@img/AboutUs.png';

const Header: FC = () => (
  <div className={sharedStyles['about-us']}>
    <div className={sharedStyles['about-text']}>
      <h1 className={`section-title ${sharedStyles['about-us-title']}`}>Про нас</h1>
      <div>
        <p>
          <b>Простір “Спільнота”</b> - унікальний осередок, який має на меті забезпечити комплексну підтримку та
          розвиток молоді і допомогти розірвати коло сирітства, готуючи підлітків до самостійного життя.
        </p>
        <p>
          Тут проживатиме та навчатиметься молодь (хлопці та дівчата) з інтернатних закладів, сімейних форм виховання та
          молодь з сімей у складних життєвих обставинах, які постраждали від війни.
        </p>
      </div>
    </div>
    <div className={sharedStyles['about-us-photo_wrapper']}>
      <img className={sharedStyles['about-us-photo']} src={AboutUs} alt="" />
    </div>
  </div>
);

export default Header;

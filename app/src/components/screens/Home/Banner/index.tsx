import type { FC } from 'react';

import { PrimaryButton } from '@components/ui/Buttons/CustomButton';

import style from './Banner.module.scss';

const Banner: FC = () => (
  <div className={style.body}>
    <div className={style.content}>
      <div className={style.heading}>
        <h1 className={style.title}>Спільнота - Рідні</h1>
        <h2 className={style.subtitle}>Проєкт Благодійного фонду «Рідні»</h2>
      </div>

      <PrimaryButton type="link" className={style['main-button']} href="#AboutUs">
        Детальніше
      </PrimaryButton>
    </div>
  </div>
);

export default Banner;

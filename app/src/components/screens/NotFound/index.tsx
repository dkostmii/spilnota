import type { FC } from 'react';

import { SecondaryButton } from '@components/ui/Buttons/CustomButton';

import useHeaderSize from '@hooks/useHeaderSize';

import style from './NotFound.module.scss';

const NotFound: FC = () => {
  const { height: headerHeight } = useHeaderSize();

  return (
    <section className={style.section} style={{ paddingTop: headerHeight }}>
      <div className={style.container}>
        <h1 className="section-title">Сторінку не знайдено</h1>
        <SecondaryButton className={style.button} type="link" href="/">
          Повернутись на головну
        </SecondaryButton>
      </div>
    </section>
  );
};

export default NotFound;

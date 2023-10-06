import type { FC, PropsWithChildren } from 'react';

import { useState, useEffect } from 'react';

import Close from '@img/Close.svg';

import style from './HeaderMenuPanel.module.scss';

interface Props {
  show?: boolean;
  onClose?: () => void;
}

const HeaderMenuPanel: FC<Props & PropsWithChildren> = ({ show = false, children, onClose }) => {
  const [wrapperClass, setWrapperClass] = useState(style.wrapper);
  const [containerClass, setContainerClass] = useState(style.container);

  useEffect(() => {
    if (show) {
      setWrapperClass(`${style.wrapper} ${style.show}`);

      const timeout = setTimeout(() => {
        setContainerClass(`${style.container} ${style.show}`);
      }, 20);

      return () => clearTimeout(timeout);
    }

    setContainerClass(style.container);

    const timeout = setTimeout(() => {
      setWrapperClass(style.wrapper);
    }, 270);

    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <div className={wrapperClass}>
      <div className={style.placeholder} onClick={onClose}></div>
      <div className={containerClass}>
        <div className={style.close_wrapper}>
          <button className={style.close} onClick={onClose}>
            <img src={Close} alt="" />
          </button>
        </div>

        <div className={style['content-wrapper']} onClick={onClose}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuPanel;

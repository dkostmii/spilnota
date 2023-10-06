import type { FC, PropsWithChildren } from 'react';

import { useState, useRef } from 'react';

import DropdownHide from '@img/DropdownHide.svg';

import style from './DropdownItem.module.scss';

interface Props {
  title: string;
}

const DropdownItem: FC<Props & PropsWithChildren> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  let contentHeight = 0;

  if (isOpen && contentRef && contentRef.current) {
    contentHeight = contentRef.current.scrollHeight;
  }

  return (
    <div className={style.container}>
      <button type="button" className={style.button} onClick={() => setIsOpen(!isOpen)}>
        <span className={style.caption}>{title}</span>
      </button>
      <div ref={contentRef} className={`${style.container} ${style.content}`} style={{ height: contentHeight }}>
        {children}
        <button type="button" className={style.button_hide} onClick={() => setIsOpen(false)}>
          <img className={style.hide} src={DropdownHide} alt="" />
        </button>
      </div>
    </div>
  );
};

export default DropdownItem;

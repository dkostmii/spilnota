import type { FC } from 'react';

import style from './Navigation.module.scss';

interface NavigationData {
  title: string;
  href: string;
}

interface Props {
  data: NavigationData[];
  isDark?: boolean;
  vertical?: boolean | 'center';
  fullSize?: boolean;
  customListClass?: string;
  className?: string;
}

const Navigation: FC<Props> = ({
  data,
  isDark = false,
  vertical = false,
  fullSize = false,
  className,
  customListClass,
}) => {
  let listClassName = style.list;
  let wrapperClass;

  if (isDark) {
    listClassName += ` ${style.dark}`;
  }

  if (vertical) {
    listClassName += ` ${style.vertical}`;

    if (vertical === 'center') {
      listClassName += ` ${style.center}`;
    }
  }

  if (fullSize) {
    wrapperClass = style['flex-grow'];
    listClassName += ` ${style['space-evenly']}`;
  }

  if (customListClass) {
    listClassName += ` ${customListClass}`;
  }

  if (className && wrapperClass) {
    className = `${wrapperClass} ${className}`;
  } else if (wrapperClass) {
    className = wrapperClass;
  }

  return (
    <nav className={className}>
      <ul className={listClassName}>
        {data.map(({ title, href }, id) => (
          <li key={id}>
            <a className={`hover-link ${style.link}`} href={href}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

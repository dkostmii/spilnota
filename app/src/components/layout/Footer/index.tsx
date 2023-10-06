import type { FC } from 'react';

import { useLocation } from 'react-router-dom';

import Logo from '@components/ui/Logo';
import Navigation from '@components/ui/Navigation';

import ContactsWrapper from '@components/ui/Contacts/Wrapper';
import SocialWrapper from '@components/ui/Contacts/Social/Wrapper';

import style from './Footer.module.scss';

const Footer: FC = () => {
  const { pathname } = useLocation();

  const links = [
    {
      title: 'Про нас',
      href: '#AboutUs',
    },
    {
      title: 'Концепція',
      href: '#Concept',
    },
    {
      title: 'Новини',
      href: '#News',
    },
    {
      title: 'Партнери',
      href: '#Partners',
    },
  ];

  const isHome = pathname === '/';

  if (!isHome) {
    links.forEach((l) => {
      l.href = `/${l.href}`;
    });
  }

  const invertClass = !isHome ? ` ${style.invert}` : '';

  return (
    <footer>
      <div className={`${style.wrapper}${invertClass}`}>
        <div className={`${style.container}${invertClass}`}>
          <a href="/">
            <Logo isDark={isHome} />
          </a>

          <div id="Contacts" className={style.content}>
            <Navigation
              className={style.content_navigation}
              isDark={isHome}
              vertical
              data={links}
              customListClass={style['navigation-list']}
            />
            <ContactsWrapper className={style.content_contacts} invert={!isHome} />
            <SocialWrapper className={style.content_social} dark={isHome} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

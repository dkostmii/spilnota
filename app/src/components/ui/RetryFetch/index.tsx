import type { FC, PropsWithChildren, CSSProperties } from 'react';

import { useLocation } from 'react-router-dom';

import { SecondaryButton } from '@components/ui/Buttons/CustomButton';

import { ErrorBoundary } from 'react-error-boundary';

import useHeaderSize from '@hooks/useHeaderSize';

import ErrorLight from '@img/ErrorLight.svg';

import style from './RetryFetch.module.scss';

interface RetryRenderArgs {
  resetErrorBoundary: () => void;
  headerHeight?: number;
  isHomePage?: boolean;
}

function retryRender({ resetErrorBoundary, headerHeight = 0, isHomePage = true }: RetryRenderArgs) {
  const sectionStyle: CSSProperties = {};

  if (!isHomePage) {
    sectionStyle.paddingTop = `${headerHeight}px`;
  }

  return (
    <section className={style.section} style={sectionStyle}>
      <div className={style.container}>
        <div className={style.content}>
          <img className={style.icon} src={ErrorLight} alt="" />
          <h2 className={style.title}>Виникла помилка завантаження</h2>
        </div>
        <SecondaryButton type="button" onClick={resetErrorBoundary}>
          Спробувати ще раз
        </SecondaryButton>
      </div>
    </section>
  );
}

const RetryFetch: FC<PropsWithChildren> = ({ children }) => {
  const { height: headerHeight } = useHeaderSize();
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <ErrorBoundary
      fallbackRender={({ resetErrorBoundary }) =>
        retryRender({
          resetErrorBoundary,
          headerHeight,
          isHomePage,
        })
      }
    >
      {children}
    </ErrorBoundary>
  );
};

export default RetryFetch;

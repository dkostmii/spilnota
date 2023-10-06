import type { FC } from 'react';

import { useGetSocialQuery } from '@store/services/social';

import Social, { Props } from './index';

import Error from '@img/Error.svg';
import ErrorLight from '@img/ErrorLight.svg';

import InlineLoader from '@components/ui/Loader/InlineLoader';

import style from '../Contacts.module.scss';

type SocialWrapperProps = Omit<Props, 'socialNetworks'>;

const SocialWrapper: FC<SocialWrapperProps> = (props) => {
  const { data, error, isLoading } = useGetSocialQuery();

  if (isLoading) {
    return (
      <div className={style.wrapper}>
        <InlineLoader compact />
      </div>
    );
  }

  if (error || !(isLoading || error || data)) {
    return (
      <div className={style.wrapper}>
        <img className={style.wrapper_icon} src={props.dark === false ? ErrorLight : Error} alt="" />
      </div>
    );
  }

  return <Social {...props} socialNetworks={data} />;
};

export default SocialWrapper;

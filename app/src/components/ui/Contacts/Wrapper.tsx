import type { FC } from 'react';

import { useGetContactsQuery } from '@store/services/contacts';

import Contacts, { Props } from './index';

import Error from '@img/Error.svg';
import ErrorLight from '@img/ErrorLight.svg';

import InlineLoader from '@components/ui/Loader/InlineLoader';

import style from './Contacts.module.scss';

type ContactsWrapperProps = Pick<Props, 'className' | 'invert'>;

const ContactsWrapper: FC<ContactsWrapperProps> = (props) => {
  const { data, error, isLoading } = useGetContactsQuery();

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
        <img className={style.wrapper_icon} src={props.invert === true ? ErrorLight : Error} alt="" />
      </div>
    );
  }

  return <Contacts {...props} {...data} />;
};

export default ContactsWrapper;

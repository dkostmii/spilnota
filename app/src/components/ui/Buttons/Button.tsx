import type { FC, HTMLProps } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import assertUnreachable from '@/helpers/assertUnreachable';

type LinkButtonProps = { type: 'link' } & HTMLProps<HTMLAnchorElement>;
type RegularButtonProps = { type: 'button' | undefined } & HTMLProps<HTMLButtonElement>;
type RouteLinkButtonProps = { type: 'route-link' } & LinkProps;

export type ButtonProps = LinkButtonProps | RegularButtonProps | RouteLinkButtonProps;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  if (!props.type) {
    props.type = 'button';
  }

  switch (props.type) {
    case 'link':
      return <a {...props}>{children}</a>;
    case 'button':
      return <button {...props}>{children}</button>;
    case 'route-link':
      return <Link {...props}>{children}</Link>;
    default:
      assertUnreachable(props.type);
  }
};

export default Button;

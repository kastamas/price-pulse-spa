import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ComponentProps extends LinkProps {
  className?: string;
}

export const RouterLink: FC<ComponentProps> = ({
  to,
  className,
  children,
  ...rest
}) => {
  return (
    <Link
      to={to}
      className={`text-lg text-blue-500 dark:text-blue-300 hover:underline ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

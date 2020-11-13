import React from 'react';
import classnames from 'classnames';

import theme from '../../styles/theme';

export default function Heading({
  children,
  size = 'xl',
  className,
  ...props
}) {
  return (
    <h1 className={classnames('heading', className)} {...props}>
      {children}
      <style jsx>{`
        .heading {
          font-size: ${theme.fontSizes.heading[size]};
          line-height: 1.5em;
        }
      `}</style>
    </h1>
  );
}

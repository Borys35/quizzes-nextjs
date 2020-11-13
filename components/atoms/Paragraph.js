import React from 'react';
import classnames from 'classnames';
import theme from '../../styles/theme';

export default function Paragraph({
  children,
  size = 'sm',
  color = 'grey',
  ...props
}) {
  return (
    <p className="paragraph" {...props}>
      {children}
      <style jsx>
        {`
          .paragraph {
            font-size: ${theme.fontSizes.body[size]};
            line-height: 1.8em;
            color: ${(() => {
              switch (color) {
                case 'white':
                  return theme.colors.textWhite;
                case 'grey':
                  return theme.colors.textGrey;
                default:
                  return theme.colors.textGrey;
              }
            })()};
          }
        `}
      </style>
    </p>
  );
}

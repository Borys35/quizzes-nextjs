import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import theme from '../../styles/theme';

export default function Button({
  children,
  variant = 'primary',
  size = 'lg',
  href,
  onClick,
  ...props
}) {
  return (
    <>
      {href ? (
        <Link href={href} passHref {...props}>
          <a
            className={classnames(
              `button`,
              `button--${variant}`,
              `button--${size}`
            )}
          >
            {children}
          </a>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={classnames(
            `button`,
            `button--${variant}`,
            `button--${size}`
          )}
          {...props}
        >
          {children}
        </button>
      )}
      <style jsx>{`
        .button {
          display: inline-block;
          padding: 0.25em 0.75em;
          border: 2px solid ${theme.colors.atomPrimary};
          border-radius: 2em;
          font-size: ${theme.fontSizes.body[size]};
          text-decoration: none;
          cursor: pointer;
          transition: filter 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          &:hover {
            filter: brightness(110%);
            box-shadow: 0 8px 20px ${theme.colors.textBlack}66;
          }
          &--primary {
            background-color: ${theme.colors.atomPrimary};
            color: ${theme.colors.textBlack};
          }
          &--secondary {
            background-color: transparent;
            color: ${theme.colors.textWhite};
          }
          &--lg {
            font-weight: bold;
          }
        }
      `}</style>
    </>
  );
}

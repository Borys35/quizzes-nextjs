import React from 'react';

import theme from './theme';

export default function GlobalStyle() {
  return (
    <style global jsx>{`
      :root {
        font-size: 12px;
      }
      *,
      *:before,
      *:after {
        font-family: ${theme.fontFamilies.body};
        color: ${theme.colors.textWhite};
        box-sizing: border-box;
        outline: none;
      }
      html,
      body,
      #__next {
        height: 100%;
      }
      body {
        background-color: ${theme.colors.backgroundLight};
        color: ${theme.colors.textWhite};
        margin: 0;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${theme.fontFamilies.heading};
        font-weight: medium;
        margin: 0;
      }
      p {
        margin: 0;
      }
      a {
        text-decoration: none;
      }

      @media (min-width: ${theme.breakpoints.phone}) {
        :root {
          font-size: 14px;
        }
      }

      @media (min-width: ${theme.breakpoints.tablet}) {
        :root {
          font-size: 16px;
        }
      }
    `}</style>
  );
}

import React from 'react';

import theme from '../../styles/theme';
import Paragraph from '../atoms/Paragraph';

export default function Footer() {
  return (
    <footer className="footer">
      <Paragraph>{new Date().getFullYear()}, All rights reserved</Paragraph>
      <style jsx>{`
        .footer {
          padding: 2rem;
          text-align: center;
          background-color: ${theme.colors.backgroundDark};
        }
      `}</style>
    </footer>
  );
}

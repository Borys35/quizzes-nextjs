import React from 'react';
import theme from '../../styles/theme';

export default function ErrorMessage({ children }) {
  return (
    <span className="error-message">
      {children}
      <style jsx>{`
        .error-message {
          color: ${theme.colors.textRed};
        }
      `}</style>
    </span>
  );
}

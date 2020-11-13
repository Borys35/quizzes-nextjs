import React from 'react';
import theme from '../../styles/theme';

export default function Badge({ children }) {
  return (
    <div className="badge">
      {children}
      <style jsx>{`
        .badge {
          display: inline-block;
          background-color: ${theme.colors.atomLighter};
          color: ${theme.colors.textBlack};
          border-radius: 2rem;
          padding: 0.25rem 0.5rem;
        }
      `}</style>
    </div>
  );
}

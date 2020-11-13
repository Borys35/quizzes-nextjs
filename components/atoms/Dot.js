import React from 'react';

import theme from '../../styles/theme';

export default function Dot() {
  return (
    <div className="dot">
      <style jsx>{`
        .dot {
          border-radius: 50%;
          background-color: ${theme.colors.atomPrimary};
          width: 1rem;
          height: 1rem;
        }
      `}</style>
    </div>
  );
}

import React from 'react';

import Dot from '../atoms/Dot';
import Paragraph from '../atoms/Paragraph';

export default function ParagraphsWithDots({ items = [] }) {
  return (
    <div className="paragraphs">
      {items.map(({ text, ...props }, i) => (
        <>
          <Paragraph {...props}>{text}</Paragraph>
          {i < items.length - 1 && <Dot />}
        </>
      ))}
      <style jsx>{`
        .paragraphs {
          :global(.paragraph),
          :global(.dot) {
            display: inline-block;
            vertical-align: middle;
            margin-right: 1.5rem;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      `}</style>
    </div>
  );
}

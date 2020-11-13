import React from 'react';

import QuizCard from '../molecules/QuizCard';

export default function QuizCardList({ items = [] }) {
  return (
    <div className="quiz-card-list">
      {items.map(({ heading, paragraph, imageSrc, href }, i) => (
        <QuizCard
          key={i}
          heading={heading}
          paragraph={paragraph}
          imageSrc={imageSrc}
          href={href}
        />
      ))}

      <style jsx>{`
        .quiz-card-list {
          display: flex;
          flex-direction: column;
          :global(.quiz-card) {
            margin-bottom: 4rem;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      `}</style>
    </div>
  );
}

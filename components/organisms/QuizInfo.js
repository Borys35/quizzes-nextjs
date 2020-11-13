import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '../../components/atoms/Button';
import Heading from '../../components/atoms/Heading';
import Paragraph from '../../components/atoms/Paragraph';
import Image from '../../components/atoms/Image';
import theme from '../../styles/theme';
import ParagraphsWithDots from '../molecules/ParagraphsWithDots';

export default function QuizInfo({
  heading,
  paragraph,
  createdAt,
  questionsCount,
  btn: { text, ...btnProps },
  imageSrc,
}) {
  const isDesktopMin = useMediaQuery({
    minWidth: theme.breakpoints.desktop,
  });

  return (
    <div className="quiz-info">
      <div className="img-container">
        <Image src="/joji.jpg" />
      </div>
      <div className="info-container">
        <Heading size="lg">{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
        <ParagraphsWithDots
          items={[
            {
              text: `Created at: ${new Date(createdAt).toUTCString()}`,
              color: 'white',
            },
            { text: `${questionsCount} questions`, color: 'white' },
          ]}
        />
      </div>
      <Button {...btnProps}>{text}</Button>
      <style jsx>{`
        .quiz-info {
          display: ${isDesktopMin ? 'grid' : 'flex'};
          grid-template-columns: 1fr 45%;
          grid-template-rows: 1fr auto;
          grid-column-gap: 4rem;
          grid-row-gap: 4rem;
          flex-direction: column;
          place-items: center;
          :global(.button) {
            grid-column: 1/3;
          }
        }
        .info-container {
          grid-column: 1/2;
          grid-row: 1/2;
          > :global(.paragraph) {
            margin-top: 0.5rem;
          }
          :global(.paragraphs) {
            margin-top: 2.5rem;
          }
        }
        .img-container {
          grid-column: 2/3;
          height: 400px;
          :global(.img) {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50px 0 50px 0;
          }
        }
      `}</style>
    </div>
  );
}

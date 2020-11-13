import React from 'react';
import Image from '../atoms/Image';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';
import theme from '../../styles/theme';

export default function QuizCard({ heading, paragraph, imageSrc, href }) {
  return (
    <div className="quiz-card">
      <Heading size="md">{heading}</Heading>
      <Paragraph size="sm">{paragraph}</Paragraph>
      <Button href={href} size="md">
        View
      </Button>
      <div className="img-container">
        <Image src={imageSrc} unsized />
        <div className="img-foreground"></div>
      </div>
      <style jsx>{`
        .quiz-card {
          z-index: 0;
          position: relative;
          background-color: ${theme.colors.atomSecondary};
          border-radius: 1rem;
          box-shadow: 0 0 10px ${theme.colors.textBlack}66;
          padding: 1.5rem;
          overflow: hidden;
          max-width: ${theme.breakpoints.wideTablet};
          :global(.paragraph) {
            margin-top: 0.5rem;
          }
          :global(.button) {
            margin-top: 4rem;
          }
          .img-container {
            z-index: -1;
            position: absolute;
            width: 15rem;
            top: -25%;
            bottom: -25%;
            right: 0;
            pointer-events: none;
            border-radius: 50% 0 0 50%;
            overflow: hidden;
            :global(.img) {
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .img-foreground {
              position: absolute;
              content: '';
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              background-color: ${theme.colors.backgroundLight};
              opacity: 0.6;
            }
          }
        }
      `}</style>
    </div>
  );
}

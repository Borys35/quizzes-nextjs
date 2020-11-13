import React from 'react';
import Image from '../atoms/Image';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';
import theme from '../../styles/theme';

export default function CategoryCard({ heading, paragraph, iconSrc, href }) {
  return (
    <div className="category-card">
      <Heading size="md">{heading}</Heading>
      <Paragraph size="sm">{paragraph}</Paragraph>
      <Button href={href} size="md">
        View
      </Button>
      <Image src={iconSrc} unsized />
      <style jsx>{`
        .category-card {
          position: relative;
          background-color: ${theme.colors.atomSecondary};
          border-radius: 1rem;
          box-shadow: 0 0 10px ${theme.colors.textBlack}66;
          padding: 1.5rem;
          overflow: hidden;
          width: 25rem;
          :global(.paragraph) {
            margin-top: 0.5rem;
          }
          :global(.button) {
            margin-top: 4rem;
          }
          :global(.img) {
            position: absolute;
            right: -10%;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0.15;
            height: 85%;
            pointer-events: none;
          }
        }
      `}</style>
    </div>
  );
}

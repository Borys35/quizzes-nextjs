import React from 'react';
import { useMediaQuery } from 'react-responsive';
import classnames from 'classnames';

import theme from '../../styles/theme';
import Button from '../atoms/Button';
import CategoryCard from '../molecules/CategoryCard';
import Heading from '../atoms/Heading';

export default function CategoryCardList({ heading, items = [], className }) {
  const isPhoneMin = useMediaQuery({ minWidth: theme.breakpoints.phone });
  const isTabletMin = useMediaQuery({ minWidth: theme.breakpoints.tablet });

  return (
    <div className={classnames('card-list-container', className)}>
      <Heading className="list-heading">{heading}</Heading>
      <div className="card-list">
        {items.map(({ heading, paragraph, iconSrc, href }, i) => (
          <CategoryCard
            key={i}
            heading={heading}
            paragraph={paragraph}
            iconSrc={iconSrc}
            href={href}
          />
        ))}
        <div className="fade">
          <Button href="/categories">All categories</Button>
        </div>
      </div>
      <style jsx>{`
        .card-list-container {
          :global(.list-heading) {
            text-align: center;
            margin-bottom: 2rem;
          }
        }
        .card-list {
          position: relative;
          white-space: nowrap;
          overflow: hidden;
          :global(.category-card) {
            white-space: normal;
            vertical-align: middle;
            display: ${isTabletMin ? 'inline-block' : 'block'};
            width: ${isPhoneMin ? null : '100%'};
            margin: ${isTabletMin ? '0 2rem 0 0' : '2rem auto 0'};
          }
        }
        .fade {
          position: absolute;
          left: ${isTabletMin ? '50%' : '0'};
          right: 0;
          top: ${isTabletMin ? '0' : '50%'};
          bottom: 0;
          background: linear-gradient(
            ${isTabletMin ? '270deg' : '0'},
            ${theme.colors.backgroundLight},
            ${theme.colors.backgroundLight}00
          );
          pointer-events: none;

          :global(.button) {
            position: absolute;
            right: ${isTabletMin ? '2rem' : '50%'};
            bottom: ${isTabletMin ? '50%' : '2rem'};
            transform: ${isTabletMin ? 'translateY(50%)' : 'translateX(50%)'};
            pointer-events: auto;
          }
        }
      `}</style>
    </div>
  );
}

import React from 'react';
import CategoryCard from '../molecules/CategoryCard';

export default function CategoryCardGrid({ items = [] }) {
  return (
    <div className="category-card-grid">
      {items.map(({ heading, paragraph, iconSrc, href }, i) => (
        <CategoryCard
          key={i}
          heading={heading}
          paragraph={paragraph}
          iconSrc={iconSrc}
          href={href}
        />
      ))}

      <style jsx>{`
        .category-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
          grid-column-gap: 2rem;
          grid-row-gap: 4rem;
          place-items: center;
        }
      `}</style>
    </div>
  );
}

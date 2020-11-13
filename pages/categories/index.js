import React from 'react';
import { useMediaQuery } from 'react-responsive';

import theme from '../../styles/theme';
import CategoryCardGrid from '../../components/organisms/CategoryCardGrid';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/categories');
  const { categories } = await res.json();

  return { props: { categories } };
}

export default function Categories({ categories }) {
  const isDesktopMin = useMediaQuery({ minWidth: theme.breakpoints.desktop });

  return (
    <div className="categories">
      <CategoryCardGrid
        items={categories.map(
          ({ category_id, category_name, category_description }) => ({
            heading: category_name,
            paragraph: category_description,
            iconSrc: '/computer.svg',
            href: `/categories/${category_id}`,
          })
        )}
      />
      <style jsx>{`
        .categories {
          padding: 64px
            ${isDesktopMin ? theme.paddings.desktop : theme.paddings.phone};
        }
      `}</style>
    </div>
  );
}

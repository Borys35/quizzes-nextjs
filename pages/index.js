import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Image from '../components/atoms/Image';
import Block from '../components/molecules/Block';
import CategoryCardList from '../components/organisms/CategoryCardList';
import useInView from '../hooks/useInView';
import theme from '../styles/theme';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/categories?limit=4');
  const { categories } = await res.json();

  return {
    props: { categories },
  };
}

export default function Home({ categories }) {
  const isDesktopMin = useMediaQuery({ minWidth: theme.breakpoints.desktop });

  return (
    <div className="home">
      <Block
        className="section"
        heading="Solve quizzes and create your own ones"
        paragraph="Commodo vestibulum, volutpat at orci morbi curabitur justo. Neque ut nisl dictum feugiat donec at cras magna. Id lectus porttitor egestas."
        btns={[{ text: 'Get started', href: '/categories' }]}
        imgSrc="/quiz.svg"
        dark={true}
      />
      <Image className="wave" src="/wave.svg" unsized />
      <CategoryCardList
        className="section"
        heading="Dive into quizzes"
        items={categories.map(
          ({ category_id, category_name, category_description }) => ({
            heading: category_name,
            paragraph: category_description,
            iconSrc: '/computer.svg',
            href: `/categories/${category_id}`,
          })
        )}
      />
      <Image className="wave" src="/wave.svg" rotate="180deg" />
      <Block
        className="section"
        heading="Collect points and climb on ladder"
        paragraph="Ac, morbi vitae amet, senectus odio ridiculus at. Tempor, consectetur vulputate tortor sed consectetur id amet purus. Ac ultricies vestibulum turpis lacinia vel sed at id in. Ac commodo nunc posuere nibh vitae quam."
        btns={[
          { text: 'View quizzes' },
          { text: 'Watch add', variant: 'secondary' },
        ]}
        imgSrc="/points.svg"
        reverse={true}
        dark={true}
      />
      <Image className="wave" src="/wave.svg" unsized />
      <Block
        className="section"
        heading="Create own quiz and check others’ knowledge"
        paragraph="Ac, morbi vitae amet, senectus odio ridiculus at. Tempor, consectetur vulputate tortor sed consectetur id amet purus. Ac ultricies vestibulum turpis lacinia vel sed at id in. Ac commodo nunc posuere nibh vitae quam."
        btns={[{ text: 'Create quiz' }]}
        imgSrc="/creator.svg"
      />
      <Image className="wave" src="/wave.svg" rotate="180deg" />
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          :global(.section) {
            padding: 96px
              ${isDesktopMin ? theme.paddings.desktop : theme.paddings.phone};
          }
          :global(.wave) {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

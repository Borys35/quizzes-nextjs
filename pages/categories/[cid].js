import React from 'react';
import { useMediaQuery } from 'react-responsive';
import QuizCardList from '../../components/organisms/QuizCardList';

import theme from '../../styles/theme';

export async function getServerSideProps(context) {
  const cid = context.params.cid;
  const res = await fetch(`http://localhost:3000/api/categories/${cid}`);
  const { quizzes } = await res.json();

  return { props: { quizzes } };
}

export default function Category({ quizzes=[] }) {
  const isDesktopMin = useMediaQuery({ minWidth: theme.breakpoints.desktop });

  return (
    <div className="category">
      <QuizCardList
        items={quizzes.map(({ quiz_id, quiz_name, quiz_description }) => ({
          heading: quiz_name,
          paragraph: quiz_description,
          imageSrc: '/joji.jpg',
          href: `/quizzes/${quiz_id}`,
        }))}
      />
      <style jsx>{`
        .category {
          padding: 36px
            ${isDesktopMin ? theme.paddings.desktop : theme.paddings.phone};
        }
      `}</style>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';

import theme from '../../styles/theme';
import Button from '../../components/atoms/Button';
import Heading from '../../components/atoms/Heading';
import Paragraph from '../../components/atoms/Paragraph';
import QuizInfo from '../../components/organisms/QuizInfo';
import QuizQuestion from '../../components/organisms/QuizQuestion';

export async function getServerSideProps(context) {
  const { qid } = context.params;
  const res = await fetch(`http://localhost:3000/api/quizzes/${qid}`);
  const props = await res.json();

  return { props };
}

export default function Quiz({ quiz, questions, answers }) {
  const [started, setStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const { quiz_name, quiz_description, quiz_image, created_at } = quiz;

  const isDesktopMin = useMediaQuery({
    minWidth: theme.breakpoints.desktop,
  });

  function handleStart() {
    setStarted(true);
    // const tl = gsap.timeline();
    // tl.to('.quiz-info-container', {
    //   autoAlpha: 0,
    //   duration: 0.5,
    // })
    //   .call(() => setStarted(true))
    //   .to('.quiz-question-container', {
    //     autoAlpha: 1,
    //     duration: 0.5,
    //     delay: -0.3,
    //   });
  }

  function handleSubmit() {
    setQuestionIndex(questionIndex + 1);
  }

  return (
    <div className="quiz">
      {!started ? (
        <div className="quiz-info-container">
          <QuizInfo
            heading={quiz_name}
            paragraph={quiz_description}
            createdAt={created_at}
            questionsCount={questions.length}
            btn={{ text: 'Start quiz', onClick: handleStart }}
            imageSrc={quiz_image}
          />
        </div>
      ) : (
        <div className="quiz-question-container">
          <QuizQuestion
            index={questionIndex}
            question={questions[questionIndex]}
            answers={answers.filter(
              (a) => a.question_id === questions[questionIndex].question_id
            )}
            onSubmit={handleSubmit}
          />
        </div>
      )}

      <style jsx>{`
        .quiz {
          padding: ${isDesktopMin
            ? `72px ${theme.paddings.desktop}`
            : `24px ${theme.paddings.phone}`};
        }
      `}</style>
    </div>
  );
}

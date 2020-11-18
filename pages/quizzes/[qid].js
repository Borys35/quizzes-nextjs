import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

import theme from "../../styles/theme";
import Button from "../../components/atoms/Button";
import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";
import QuizInfo from "../../components/organisms/QuizInfo";
import QuizQuestion from "../../components/organisms/QuizQuestion";
import QuizEnd from "../../components/organisms/QuizEnd";

export async function getServerSideProps(context) {
  const { qid } = context.params;
  const res = await fetch(`http://localhost:3000/api/quizzes/${qid}`);
  const props = await res.json();

  return { props };
}

export default function Quiz({ quiz, questions, answers }) {
  const [state, setState] = useState("not-started");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const { quiz_id, quiz_name, quiz_description, quiz_image, created_at } = quiz;

  const isDesktopMin = useMediaQuery({
    minWidth: theme.breakpoints.desktop,
  });

  function handleStart() {
    setState("during");
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

  async function handleSubmit(correct) {
    if (correct) setScore(score + 1);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setState("finished");
    }
  }

  return (
    <div className="quiz">
      {state === "not-started" ? (
        <div className="quiz-info-container">
          <QuizInfo
            heading={quiz_name}
            paragraph={quiz_description}
            createdAt={new Date(created_at)}
            questionsCount={questions.length}
            btn={{ text: "Start quiz", onClick: handleStart }}
            imageSrc={quiz_image}
          />
        </div>
      ) : state === "during" ? (
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
      ) : (
        <div>
          <QuizEnd
            // url={`http://localhost:3000/quizzes/${quiz_id}`}
            url={`https://google.com`}
            score={score}
            maxScore={questions.length}
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

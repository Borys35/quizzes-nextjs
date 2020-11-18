import React, { useState } from "react";
import theme from "../../styles/theme";
import Badge from "../atoms/Badge";
import Paragraph from "../atoms/Paragraph";
import QuizAnswer from "../molecules/QuizAnswer";

export default function QuizQuestion({ index, question, answers, onSubmit }) {
  const [correctAnswerId, setCorrectAnswerId] = useState(null);
  const { question_id, question_content } = question;

  async function handleSubmit(submittedId) {
    const res = await fetch(`/api/quiz-questions/${question_id}`);
    const { answerId } = await res.json();
    setCorrectAnswerId(answerId);

    setTimeout(() => {
      onSubmit(submittedId === answerId);
      setCorrectAnswerId(null);
    }, 2000);
  }

  return (
    <div className="quiz-question">
      <Badge>Answer {index + 1}</Badge>
      <Paragraph size="xl" color="white">
        {question_content}
      </Paragraph>
      <div className="answers">
        {answers.map(({ answer_id, answer_content }) => (
          <QuizAnswer
            key={answer_id}
            onClick={handleSubmit}
            answerId={answer_id}
            answerContent={answer_content}
            correctId={correctAnswerId}
          />
        ))}
      </div>
      <style jsx>{`
        .quiz-question {
        }
        .answers {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          grid-gap: 2rem;
          max-width: ${theme.breakpoints.desktop};
        }
      `}</style>
    </div>
  );
}

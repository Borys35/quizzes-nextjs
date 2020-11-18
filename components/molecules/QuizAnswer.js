import React, { useEffect, useState } from "react";
import classnames from "classnames";

import theme from "../../styles/theme";
import Paragraph from "../atoms/Paragraph";

export default function QuizAnswer({
  children,
  onClick,
  answerId,
  answerContent,
  correctId,
  ...props
}) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    onClick(answerId);
    setClicked(true);
  }

  useEffect(() => {
    setClicked(false);
  }, [answerId]);

  return (
    <div
      className={classnames(
        "quiz-answer",
        {
          "quiz-answer--correct": correctId !== null && answerId === correctId,
        },
        {
          "quiz-answer--incorrect":
            correctId !== null && clicked && answerId !== correctId,
        },
        { "quiz-answer--selected": correctId === null && clicked }
      )}
      onClick={handleClick}
      {...props}
    >
      <Paragraph size="md">{answerContent}</Paragraph>
      <style jsx>{`
        .quiz-answer {
          background-color: ${theme.colors.atomSecondary};
          border-radius: 8px;
          text-align: center;
          padding: 40px;
          cursor: pointer;
          &--correct {
            background-color: ${theme.colors.answerCorrect};
          }
          &--incorrect {
            background-color: ${theme.colors.answerIncorrect};
          }
          &--selected {
            background-color: ${theme.colors.answerSelected};
          }
        }
      `}</style>
    </div>
  );
}

import React from 'react';
import Badge from '../atoms/Badge';
import Paragraph from '../atoms/Paragraph';
import QuizAnswer from '../molecules/QuizAnswer';

export default function QuizQuestion({ index, question, answers, onSubmit }) {
  const { question_content } = question;

  return (
    <div className="quiz-question">
      <Badge>Answer {index + 1}</Badge>
      <Paragraph size="xl" color="white">
        {question_content}
      </Paragraph>
      {answers.map(({ answer_content }) => (
        <QuizAnswer onClick={onSubmit}>{answer_content}</QuizAnswer>
      ))}
      <style jsx>{``}</style>
    </div>
  );
}

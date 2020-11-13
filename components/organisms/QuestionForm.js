import React from 'react';

import Field from '../molecules/Field';
import theme from '../../styles/theme';
import Label from '../atoms/Label';
import Button from '../atoms/Button';

export default function QuestionForm({
  content,
  answers = [],
  onChangeContent,
  onChangeAnswers,
  onAddAnswer,
  onDelete,
}) {
  return (
    <div className="question-form">
      <Field
        id="question"
        label="Question"
        inputType="text"
        value={content}
        onChange={(e) => {
          onChangeContent(e.target.value);
        }}
      />
      <Label>Answers</Label>
      {answers.map(({ content, correct }, i) => (
        <Field
          key={i}
          id={`answer${i}`}
          inputType="text"
          radioName="answer"
          radioChecked={correct}
          onRadioChange={() => {
            const as = [...answers];
            as.forEach((a) => {
              a.correct = false;
            });
            as[i].correct = true;
            onChangeAnswers(as);
          }}
          value={content}
          onChange={(e) => {
            const as = [...answers];
            as[i].content = e.target.value;
            onChangeAnswers(as);
          }}
          onDelete={() => {
            onDelete(i);
          }}
        />
      ))}
      {answers.length < 4 && (
        <Button size="sm" onClick={onAddAnswer}>
          Add answer
        </Button>
      )}
      <style jsx>{`
        .question-form {
          padding: 2rem;
          background-color: ${theme.colors.backgroundMedium};
          box-shadow: 0 0 10px ${theme.colors.textBlack}55;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}

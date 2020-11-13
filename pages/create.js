import React, { useState } from 'react';

import Heading from '../components/atoms/Heading';
import Image from '../components/atoms/Image';
import Button from '../components/atoms/Button';
import BasicInfoForm from '../components/organisms/BasicInfoForm';
import QuestionForm from '../components/organisms/QuestionForm';

import withPrivateRoute from '../hoc/withPrivateRoute';

function Create() {
  const newQuestionTemplate = (index) => ({
    content: `Question #${index}`,
    answers: [
      { content: 'False answer', correct: false },
      { content: 'Correct answer', correct: true },
    ],
  });

  const [firstStep, setFirstStep] = useState(true);
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    description: '',
    image: '',
    category: '',
  });
  const [questionIndex, setQuestionIndex] = useState(1);
  const [questions, setQuestions] = useState([newQuestionTemplate(0)]);

  function handleSubmitBasicInfo() {
    setFirstStep(false);
  }

  function handleGoBack() {
    setFirstStep(true);
  }

  async function handleSubmitQuestions() {
    await fetch(`/api/categories/${category}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(basicInfo),
    });
  }

  function handleAddQuestion() {
    setQuestions([...questions, newQuestionTemplate(questionIndex)]);
    setQuestionIndex(questionIndex + 1);
  }

  function handleAddAnswer(qi) {
    const qs = [...questions];
    const q = qs[qi];

    if (q.answers.length >= 4) return;

    q.answers.push({ content: '', correct: false });
    setQuestions(qs);
  }

  function handleDeleteAnswer(qi, ai) {
    const qs = [...questions];
    const q = qs[qi];

    if (q.answers.length <= 2) return;

    q.answers.splice(ai, 1);
    setQuestions(qs);
  }

  function handleChangeContent(qi, content) {
    const qs = [...questions];
    const q = qs[qi];
    q.content = content;

    setQuestions(qs);
  }

  function handleChangeAnswers(qi, answers) {
    const qs = [...questions];
    const q = qs[qi];
    q.answers = answers;

    setQuestions(qs);
  }

  return (
    <div>
      {firstStep ? (
        <div className="basic-info-container">
          <Heading size="md">Step 1: Basic info</Heading>
          <BasicInfoForm
            value={basicInfo}
            onSetValue={setBasicInfo}
            onSubmit={handleSubmitBasicInfo}
          />
        </div>
      ) : (
        <div className="questions-container">
          <Heading size="md">Step 2: Questions</Heading>
          <div className="questions-grid">
            {questions.map(({ content, answers }, i) => (
              <QuestionForm
                key={i}
                content={content}
                answers={answers}
                onChangeContent={(content) => {
                  handleChangeContent(i, content);
                }}
                onChangeAnswers={(answers) => {
                  handleChangeAnswers(i, answers);
                }}
                onAddAnswer={() => {
                  handleAddAnswer(i);
                }}
                onDelete={(ai) => {
                  handleDeleteAnswer(i, ai);
                }}
              />
            ))}

            <Button onClick={handleAddQuestion}>
              <Image src="/add_circle.svg" />
            </Button>
          </div>
          <div>
            <Button variant="secondary" onClick={handleGoBack}>
              Go back
            </Button>
            <Button onClick={handleSubmitQuestions}>Submit</Button>
          </div>
        </div>
      )}
      <style jsx>{`
        .basic-info-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .questions-container {
          display: flex;
          flex-direction: column;
        }
        .questions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: 1fr;
          grid-gap: 2rem;
          place-items: center;
        }
      `}</style>
    </div>
  );
}

export default withPrivateRoute(Create);

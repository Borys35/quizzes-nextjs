import SQL from 'sql-template-strings';

import db from '../../../lib/db';

module.exports = async (req, res) => {
  const { method, query } = req;
  if (method !== 'GET')
    return res.status(400).json({ message: 'Only GET requests allowed' });

  const { qid } = query;

  const [quiz] = await db.query(
    SQL`SELECT * FROM quizzes WHERE quiz_id=${qid};`
  );
  const questions = await db.query(
    SQL`SELECT * FROM quiz_questions WHERE quiz_id=${qid};`
  );
  const answers = await db.query(
    SQL`SELECT * FROM quiz_question_answers WHERE quiz_id=${qid};`
  );

  res.status(200).json({ quiz, questions, answers });
};

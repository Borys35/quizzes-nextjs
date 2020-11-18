import SQL from 'sql-template-strings';

import db from '../../../lib/db';

module.exports = async (req, res) => {
  const { method, query } = req;
  const { cid } = query;
  if (method === 'GET') {
    const result = await db.query(
      SQL`SELECT * FROM quizzes WHERE category_id = ${cid};`
    );
    res.status(200).json({ quizzes: result });
  } else if (method === 'POST') {
    const { body } = req;
    const { name, description, image, questions } = body;

    await db.query(
      SQL`INSERT INTO quizzes (quiz_name, quiz_description, quiz_image, creator_id, category_id) VALUES (${name}, ${description}, ${image}, 1, ${parseInt(
        cid
      )});`
    );
    const [{ quizId }] = await db.query(
      SQL`SELECT LAST_INSERT_ID() as quizId;`
    );

    for (const { content, answers } of questions) {
      await db.query(
        SQL`INSERT INTO quiz_questions (question_content, quiz_id) VALUES (${content}, ${quizId});`
      );
      const [{ questionId }] = await db.query(
        SQL`SELECT LAST_INSERT_ID() as questionId;`
      );

      for (const { content, correct } of answers) {
        await db.query(
          SQL`INSERT INTO quiz_question_answers (answer_content, quiz_id, question_id, is_correct) VALUES (${content}, ${quizId}, ${questionId}, ${correct});`
        );
      }
    }

    res.status(200).send('hi');
  }
};

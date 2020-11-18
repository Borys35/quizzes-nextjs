import SQL from "sql-template-strings";

import db from "../../../lib/db";

module.exports = async (req, res) => {
  const { method, query } = req;
  if (method !== "GET")
    return res.status(400).json({ message: "Only GET requests allowed" });

  const { qid } = query;

  const [{ answerId }] = await db.query(
    SQL`SELECT answer_id AS answerId FROM quiz_question_answers WHERE question_id=${parseInt(
      qid
    )} AND is_correct=TRUE`
  );

  res.status(200).json({ answerId });
};

import SQL from 'sql-template-strings';

import db from '../../../lib/db';

module.exports = async (req, res) => {
  const { limit } = req.query;
  const result = await db.query(
    SQL`SELECT * FROM categories LIMIT ${limit ? parseInt(limit) : 100}`
  );
  res.status(200).json({ categories: result });
};

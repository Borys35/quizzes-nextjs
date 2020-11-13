import { serialize } from 'cookie';
import SQL from 'sql-template-strings';

import { magic } from '../../../lib/magic';
import { cookieOptions, encryptCookie } from '../../../lib/cookies';
import db from '../../../lib/db';

module.exports = async (req, res) => {
  const { method } = req;
  if (method !== 'POST')
    return res.status(400).json({ message: 'Only POST method allowed here' });

  try {
    const did = magic.utils.parseAuthorizationHeader(req.headers.authorization);
    magic.token.validate(did);
    const claim = magic.token.decode(did)[1];
    const userMetadata = await magic.users.getMetadataByIssuer(claim.iss);

    // check if user exists
    // if not then save user in db
    let [existingUser] = await db.query(
      SQL`SELECT user_id FROM users WHERE email=${userMetadata.email}`
    );
    if (!existingUser) {
      existingUser = await db.query(
        SQL`INSERT INTO users (email, username) VALUES (${userMetadata.email}, dummy_username)`
      );
    }

    const token = await encryptCookie(userMetadata);
    await res.setHeader('Set-Cookie', serialize('token', token, cookieOptions));

    res.status(200).json({ user: userMetadata });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

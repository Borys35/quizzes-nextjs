import { magic } from '../../../lib/magic';
import { decryptCookie } from '../../../lib/cookies';

module.exports = async (req, res) => {
  try {
    const { issuer } = await decryptCookie(req.cookies.token);
    await magic.users.logoutByIssuer(issuer);
    res.clearCookie('token');
    res.sendStatus(200);
  } catch ({ message }) {
    res.status(401).json({ message });
  }
};

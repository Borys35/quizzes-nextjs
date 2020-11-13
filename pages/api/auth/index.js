import { decryptCookie } from '../../../lib/cookies';

module.exports = async (req, res) => {
  const { method } = req;
  if (method !== 'GET')
    return res.status(400).json({ message: 'Only GET method allowed here' });

  try {
    const userMetadata = await decryptCookie(req.cookies.token);
    res.status(200).json({ user: userMetadata });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

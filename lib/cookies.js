import Iron from '@hapi/iron';

export const cookieOptions = {
  maxAge: 24 * 60 * 60, // 1 day
  secure: false,
  path: '/',
  httpOnly: true,
  sameSite: 'strict',
};

export async function encryptCookie(obj) {
  return await Iron.seal(obj, process.env.IRON_SECRET, Iron.defaults);
}

export async function decryptCookie(sealed) {
  return await Iron.unseal(sealed, process.env.IRON_SECRET, Iron.defaults);
}

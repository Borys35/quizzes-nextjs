import React, { useState } from 'react';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

import withPublicOnlyRoute from '../hoc/withPublicOnlyRoute';
import { useUser } from '../providers/UserProvider';

function Login() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useUser();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY);

      const did = await magic.auth.loginWithMagicLink({ email });

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: new Headers({
          Authorization: 'Bearer ' + did,
        }),
      });

      const { user } = await res.json();
      setUser(user);
    } catch {
      // set some error or something
    }
  }

  async function handleGoogleClick(e) {
    e.preventDefault();

    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY, {
      extensions: [new OAuthExtension()],
    });

    await magic.oauth.loginWithRedirect({
      provider: 'google',
      redirectURI: 'http://localhost:3000/callback',
    });
  }

  return (
    <div>
      {user ? 'logged in' : 'not logged in'}
      <form onSubmit={handleSubmit}>
        <label>Enter your e-mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <button>Sign in</button>
      </form>
      <button onClick={handleGoogleClick}>Sign in with Google</button>
    </div>
  );
}

export default withPublicOnlyRoute(Login);

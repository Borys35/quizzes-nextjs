import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

import { useUser } from '../providers/UserProvider';

export default function Callback() {
  const router = useRouter();
  const [user, setUser] = useUser();

  useEffect(() => {
    (async () => {
      try {
        const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY, {
          extensions: [new OAuthExtension()],
        });
        const result = await magic.oauth.getRedirectResult();
        const { idToken } = result.magic;

        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: new Headers({
            Authorization: 'Bearer ' + idToken,
          }),
        });
        const { user } = await res.json();
        setUser(user);

        //router.push('/');
      } catch {
        router.push('/login');
      }
    })();
  }, []);

  return <div>redirecting...</div>;
}

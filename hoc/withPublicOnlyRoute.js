import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useUser } from '../providers/UserProvider';

export default function withPublicOnlyRoute(Component) {
  const WrappedComponent = (props) => {
    const router = useRouter();
    const [user] = useUser();

    useEffect(() => {
      if (!user) return;

      router.replace('/');
    }, [user]);

    return !user ? <Component {...props} /> : <></>;
  };

  return WrappedComponent;
}

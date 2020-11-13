import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useUser } from '../providers/UserProvider';

export default function withPrivateRoute(Component) {
  const WrappedComponent = (props) => {
    const router = useRouter();
    const [user] = useUser();

    useEffect(() => {
      if (user) return;

      router.replace('/login');
    }, [user]);

    return user ? <Component {...props} /> : <></>;
  };

  return WrappedComponent;
}

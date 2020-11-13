import React from 'react';
import { Magic } from 'magic-sdk';

import withPrivateRoute from '../hoc/withPrivateRoute';
import { useUser } from '../providers/UserProvider';

function Profile() {
  const [user, setUser] = useUser();

  async function handleLogout(e) {
    e.preventDefault();

    await fetch('/api/logout', { method: 'DELETE' });

    setUser(null);
  }

  return (
    <div>
      Hey, it's your email: {user.email}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default withPrivateRoute(Profile);

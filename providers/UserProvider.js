import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext({});

export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/auth');
      const { user } = await res.json();
      setUser(user);
    })();
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {user !== false && children}
    </UserContext.Provider>
  );
}

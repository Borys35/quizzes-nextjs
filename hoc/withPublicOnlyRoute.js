import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useUser } from "../providers/UserProvider";

export async function getServerSideProps() {
  const r = await fetch("http://localhost:3000/api/auth");
  const { user } = await r.json();
  console.log(user);

  if (!user) {
    //console.log("hi", context, res);
  } else {
    console.log("loool");
  }

  return { props: {} };
}

export default function withPublicOnlyRoute(Component) {
  const WrappedComponent = (props) => {
    const router = useRouter();
    const [user] = useUser();

    useEffect(() => {
      if (!user) return;

      router.replace("/");
    }, [user]);

    return !user ? <Component {...props} /> : <></>;
  };

  return WrappedComponent;
}

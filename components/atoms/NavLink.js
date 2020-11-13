import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import theme from '../../styles/theme';

export default function NavLink({ href, children }) {
  const { pathname } = useRouter();

  return (
    <Link href={href} passHref>
      <a className="nav-link">
        {children}
        <style jsx>{`
          .nav-link {
            color: ${pathname === href
              ? theme.colors.atomPrimary
              : theme.colors.textWhite};
          }
        `}</style>
      </a>
    </Link>
  );
}

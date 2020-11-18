import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

import { useUser } from "../../providers/UserProvider";
import theme from "../../styles/theme";
import NavLink from "../atoms/NavLink";
import Heading from "../atoms/Heading";
import Image from "../atoms/Image";
import Button from "../atoms/Button";

export default function Navbar() {
  const isWideTabletMin = useMediaQuery({
    minWidth: theme.breakpoints.wideTablet,
  });
  const isDesktopMin = useMediaQuery({ minWidth: theme.breakpoints.desktop });
  const [user] = useUser();

  return (
    <nav className="nav">
      <Heading size="md">
        <Link href="/">Quizzes.net</Link>
      </Heading>
      {isWideTabletMin ? (
        <div>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/create">Make a quiz</NavLink>
          {user && <NavLink href="/profile">Profile</NavLink>}
          <Button href="/login" size="sm">
            Sign up
          </Button>
        </div>
      ) : (
        <Image src="/nav.svg" width="48px" />
      )}

      <style jsx>{`
        .nav {
          background-color: ${theme.colors.backgroundDark};
          padding: 16px
            ${isDesktopMin ? theme.paddings.desktop : theme.paddings.phone};
          display: flex;
          justify-content: space-between;
          align-items: center;

          :global(.nav-link) {
            margin-right: 2rem;
            &:last-child {
              margin-right: 0;
            }
          }
        }
      `}</style>
    </nav>
  );
}

"use client";

import Link from "next/link";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="glass-effect fixed left-1/2 z-40 w-screen -translate-x-1/2 transform border-b-1 border-zinc-200 border-opacity-15 bg-dark-purple bg-opacity-75 p-4 font-semibold shadow-md">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between px-4">
        <Logo />
        <div className="flex items-center gap-8">
          <Link className="link" href="/#home">
            Home
          </Link>
          <Link className="link" href="/#about-us">
            About Us
          </Link>
          <Link className="link" href="/#portfolio">
            Portfolio
          </Link>
          <Dropdown
            label={
              <Link className="link" href="/#services">
                Services
              </Link>
            }
          >
            <Link className="link" href="/services#web-development">
              Web Development
            </Link>
            <Link className="link" href="/services#online-stores">
              Online Stores
            </Link>
            <Link className="link" href="/services#social-media">
              Social Media Management
            </Link>
          </Dropdown>
          <Link className="link" href="/faq">
            FAQ
          </Link>

          <Link href="/contact">
            <Button>Let&apos;s Talk</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

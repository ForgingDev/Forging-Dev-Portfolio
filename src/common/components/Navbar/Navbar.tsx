"use client";

import { cn } from "@/common/helpers/tailwind.helper";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Logo from "../Logo";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [openedNavbar, setOpenedNavbar] = useState(false);

  return (
    <nav className="glass-effect fixed left-1/2 top-0 z-40 w-screen -translate-x-1/2 transform border-b-1 border-zinc-200 border-opacity-15 bg-dark-purple bg-opacity-75 py-2 font-semibold shadow-md">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
        <Logo />
        <Hamburger
          openedNavbar={openedNavbar}
          setOpenedNavbar={setOpenedNavbar}
        />
        {openedNavbar && (
          <div
            onClick={() => setOpenedNavbar(false)}
            className="fixed inset-0 min-h-screen w-screen bg-off bg-opacity-30 md:hidden"
          ></div>
        )}
        <div
          className={cn(
            "fixed right-full top-0 flex h-screen w-2/3 flex-col items-center justify-center gap-10 border-l-1 border-zinc-500 bg-off bg-opacity-95 transition-all duration-500 md:static md:h-auto md:w-auto md:translate-y-0 md:flex-row md:gap-8 md:border-0 md:bg-transparent md:text-base",
            openedNavbar ? "right-0" : "-right-full",
          )}
        >
          <Link
            onClick={() => setOpenedNavbar(false)}
            className="link"
            href="/#home"
          >
            Home
          </Link>
          <Link
            onClick={() => setOpenedNavbar(false)}
            className="link"
            href="/#about-us"
          >
            About Us
          </Link>
          <Link
            onClick={() => setOpenedNavbar(false)}
            className="link"
            href="/#portfolio"
          >
            Portfolio
          </Link>
          <Dropdown
            label={
              <Link
                onClick={() => setOpenedNavbar(false)}
                className="link"
                href="/#services"
              >
                Services
              </Link>
            }
          >
            <Link
              onClick={() => setOpenedNavbar(false)}
              className="link"
              href="/services#web-development"
            >
              Web Development
            </Link>
            <Link
              onClick={() => setOpenedNavbar(false)}
              className="link"
              href="/services#online-stores"
            >
              Online Stores
            </Link>
            <Link
              onClick={() => setOpenedNavbar(false)}
              className="link"
              href="/services#app-development"
            >
              Application Development
            </Link>
          </Dropdown>
          <Link
            onClick={() => setOpenedNavbar(false)}
            className="link"
            href="/faq"
          >
            FAQ
          </Link>
          <Link onClick={() => setOpenedNavbar(false)} href="/contact">
            <Button className="px-4 py-2 md:px-2.5 md:py-1">
              Let&apos;s Talk
            </Button>
          </Link>
          <div className="absolute bottom-8 md:hidden">
            <Logo />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

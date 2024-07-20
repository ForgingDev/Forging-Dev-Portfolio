import Link from "next/link";

const FooterUnder = () => {
  return (
    <div className="border-t-1 border-zinc-500 border-opacity-25 p-4 text-xs text-zinc-400">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
        <div>Copyright© 2024 Forging Dev, All rights reserved.</div>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1">
          <Link className="link" href="/terms-and-conditions">
            Term of use
          </Link>
          <Link className="link" href="/privacy-policy">
            Privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterUnder;

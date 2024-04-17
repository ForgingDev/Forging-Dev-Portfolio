import Link from "next/link";

const FooterUnder = () => {
  return (
    <div className="border-t-1 border-zinc-500 border-opacity-25 px-4 py-6 text-xs text-zinc-400">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
        <div>Copyright© 2024 Project Valhalla, All rights reserved.</div>
        <div className="flex items-center gap-4">
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

import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../Logo";

const FooterLogo = () => {
  return (
    <div className="flex w-2/5 flex-col gap-y-4">
      <Logo />
      <p className="font-medium text-zinc-400">
        Transforming Ideas into Digital Excellence. Elevate your online presence
        with our innovative solutions and strategic digital services.
      </p>
      <div className="flex gap-2">
        <Link href="https://www.instagram.com/">
          <FaInstagram className="h-8 w-8 rounded-full bg-white p-1.5 text-zinc-900 transition-all hover:bg-zinc-800 hover:text-white" />
        </Link>
        <Link href="https://www.instagram.com/">
          <FaTwitter className="h-8 w-8 rounded-full bg-white p-1.5 text-zinc-900 transition-all hover:bg-zinc-800 hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default FooterLogo;

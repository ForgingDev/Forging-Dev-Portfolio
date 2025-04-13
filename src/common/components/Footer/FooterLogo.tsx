import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../Logo";

const FooterLogo = () => {
  return (
    <div className="flex flex-col gap-y-4 lg:w-2/5">
      <Logo />
      <p className="text-sm font-medium text-zinc-400 xs:text-base">
        Transforming Ideas into Digital Excellence. Elevate your online presence
        with our innovative solutions and strategic digital services.
      </p>
      <div className="flex gap-2">
        <Link href="https://www.instagram.com/forgingdev37/">
          <FaInstagram className="h-8 w-8 rounded-full bg-white p-1.5 text-zinc-900 transition-all hover:bg-zinc-800 hover:text-white" />
        </Link>
        <Link href="https://wa.me/+40727892022">
          <FaWhatsapp className="h-8 w-8 rounded-full bg-white p-1.5 text-zinc-900 transition-all hover:bg-zinc-800 hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default FooterLogo;

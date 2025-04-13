import Link from "next/link";
import {
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const InfoSide = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="text-xs font-bold uppercase text-secondary">
        Get in touch
      </div>
      <h3 className="text-xl font-semibold sm:text-2xl md:text-4xl">
        Seamless Communication, Global Impact.
      </h3>
      <p className="text-sm text-zinc-400 md:text-base">
        We are here to help you with any questions you may have. Reach out to us
        and we will respond as soon as possible.
      </p>
      <div className="h-px bg-zinc-500 bg-opacity-50" />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="h-10 w-10 rounded-full bg-secondary p-2 sm:h-14 sm:w-14 sm:p-3" />
          <div>
            <div className="mb-0.5 text-sm font-semibold uppercase sm:mb-1.5">
              Let&apos;s Talk
            </div>
            <Link href="tel:+40727892022" className="link text-zinc-400">
              Phone: +40727892022
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaEnvelope className="h-10 w-10 rounded-full bg-secondary p-2 sm:h-14 sm:w-14 sm:p-3" />
          <div>
            <div className="mb-0.5 text-sm font-semibold uppercase sm:mb-1.5">
              Email Support
            </div>
            <Link
              href="mailto:forgingdev37@outlook.com"
              className="link text-zinc-400"
            >
              forgingdev37@outlook.com
            </Link>
          </div>
        </div>
      </div>
      <div className="h-px bg-zinc-500 bg-opacity-50" />
      <div>
        <p className="mb-2 text-lg sm:text-xl md:text-2xl">
          Follow our social media
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
    </div>
  );
};

export default InfoSide;

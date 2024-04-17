import Link from "next/link";
import { FaEnvelope, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const InfoSide = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="text-xs font-bold uppercase text-secondary">
        Get in touch
      </div>
      <h3 className="text-4xl font-semibold">
        Seamless Communication, Global Impact.
      </h3>
      <p className="text-zinc-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <div className="h-px bg-zinc-500 bg-opacity-50" />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="h-14 w-14 rounded-full bg-secondary p-3" />
          <div>
            <div className="mb-1.5 text-sm font-semibold uppercase">
              Let&apos;s Talk
            </div>
            <Link href="tel:+1234567890" className="link text-zinc-400">
              Phone: +1234567890
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaEnvelope className="h-14 w-14 rounded-full bg-secondary p-3" />
          <div>
            <div className="mb-1.5 text-sm font-semibold uppercase">
              Email Support
            </div>
            <Link
              href="mailto:support@projectvalhalla.com"
              className="link text-zinc-400"
            >
              support@projectvalhalla.com
            </Link>
          </div>
        </div>
      </div>
      <div className="h-px bg-zinc-500 bg-opacity-50" />
      <div>
        <p className="mb-2 text-2xl">Follow our social media</p>
        <div className="flex gap-2">
          <Link href="https://www.instagram.com/">
            <FaInstagram className="h-8 w-8 rounded-full bg-white p-1.5 text-zinc-900 transition-all hover:bg-zinc-800 hover:text-white" />
          </Link>
          <Link href="https://www.instagram.com/">
            <FaTwitter className="h-8 w-8 rounded-full bg-white p-1.5 text-zinc-900 transition-all hover:bg-zinc-800 hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoSide;

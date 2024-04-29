import Link from "next/link";
import { FC } from "react";

type Props = {
  title: string;
  links: { title: string; url: string }[];
};
const FooterSection: FC<Props> = ({ links, title }) => {
  return (
    <div className="mx-auto flex w-1/3 flex-col text-center">
      <h3 className="mb-3 font-medium md:text-lg">{title}</h3>
      <ul className="flex flex-col gap-y-2">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className="link text-xs text-zinc-400 md:text-sm"
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;

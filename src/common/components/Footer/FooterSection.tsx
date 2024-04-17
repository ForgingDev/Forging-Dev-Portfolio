import Link from "next/link";
import { FC } from "react";

type Props = {
  title: string;
  links: { title: string; url: string }[];
};
const FooterSection: FC<Props> = ({ links, title }) => {
  return (
    <div className="flex flex-col">
      <h3 className="mb-3 text-lg font-medium">{title}</h3>
      <ul className="flex flex-col gap-y-2">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className="link text-sm text-zinc-400"
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;

import Button from "@/common/components/Button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  client: string;
  date: string;
  description: string;
  duration: string;
  image: string | StaticImageData | StaticImport;
  link: string;
  subtitle: string;
  title: string;
  type: string;
};
const Project: FC<Props> = ({
  client,
  date,
  description,
  duration,
  image,
  link,
  subtitle,
  title,
  type,
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="group relative cursor-pointer overflow-hidden rounded-lg border-2 border-zinc-200 border-opacity-15 shadow-md transition-all hover:border-primary hover:shadow-primary"
    >
      <div className="via-dark-purple to-dark-purple rounded-t-md bg-gradient-to-br from-off p-4">
        <div className="mb-1 text-sm font-bold uppercase text-secondary">
          {subtitle}
        </div>
        <div className="text-2xl font-medium">{title}</div>
      </div>
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="h-[30vh] min-h-[400px] w-full overflow-hidden rounded-b-md object-cover object-center grayscale-[50%] group-hover:grayscale-0 xs:h-[50vh]"
      />
      <div className="absolute left-0 top-[88px] z-0 h-full w-full rounded-lg bg-purple-900 opacity-20 transition-all duration-500 group-hover:opacity-0"></div>
      <div className="absolute -bottom-[9.9rem] border-t-1 border-zinc-200 border-opacity-15 bg-dark-purple bg-opacity-70 p-4 transition-all duration-500 hover:bottom-0">
        <div className="flex flex-wrap items-center justify-between gap-y-4 font-semibold">
          <div className="w-1/2">
            <div className="text-sm text-secondary">Client</div>
            <div>{client}</div>
          </div>
          <div className="w-1/2">
            <div className="text-sm text-secondary">Type</div>
            <div>{type}</div>
          </div>
          <div className="w-1/2">
            <div className="text-sm text-secondary">Date</div>
            <div>{date}</div>
          </div>
          <div className="w-1/2">
            <div className="text-sm text-secondary">Duration</div>
            <div>{duration}</div>
          </div>
        </div>
        <div className="my-4 h-px w-full bg-white opacity-30" />
        <div className="mb-8 text-zinc-300">{description}</div>
        <Button size="sm" className="mb-2">
          Learn More
        </Button>
      </div>
    </Link>
  );
};

export default Project;

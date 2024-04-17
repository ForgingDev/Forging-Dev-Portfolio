import Button from "@/common/components/Button";
import { cn } from "@/common/helpers/tailwind.helper";
import Link from "next/link";
import { FC } from "react";

type Props = {
  title: string;
  description: string;
  image: React.ReactNode;
  link: string;
  soon?: boolean;
};
const ServiceCard: FC<Props> = ({ description, image, title, link, soon }) => {
  return (
    <Link
      href={link}
      className={cn(
        "relative cursor-pointer self-stretch overflow-hidden rounded-md border-1 border-zinc-200 border-opacity-15 p-2 shadow-md transition-all",
        soon
          ? "pointer-events-none select-none"
          : "hover:border-primary hover:shadow-primary",
      )}
    >
      <div
        className={cn(
          "flex h-full flex-col gap-y-6 rounded-md bg-off p-6",
          soon ? "opacity-50" : "opacity-100",
        )}
      >
        <div className="text-4xl text-secondary">{image}</div>
        <div className="text-xl font-medium">{title}</div>
        <div className="mb-4 text-zinc-400">{description}</div>
        <Button className="mt-auto w-fit">Learn More</Button>
      </div>
      {soon && (
        <div className="absolute left-1/2 top-1/2 w-[140%] -translate-x-1/2 -translate-y-1/2 rotate-[42deg] transform bg-gradient-to-r from-primary to-extra py-0.5 text-center text-lg font-semibold uppercase tracking-wider shadow-sm">
          Available Soon
        </div>
      )}
    </Link>
  );
};

export default ServiceCard;

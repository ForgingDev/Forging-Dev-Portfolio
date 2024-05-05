import Img from "@/images/knowledge_bg.png";
import Image from "next/image";
import { FC } from "react";

type Props = {
  title?: string;
  description?: string;
};
const PageHeader: FC<Props> = ({ description, title }) => {
  return (
    <div className="relative left-1/2 mb-[5vh] flex h-[20vh] w-screen -translate-x-1/2 transform flex-col items-center justify-center rounded-full border-b-1 border-zinc-400 border-opacity-50 text-center sm:h-[30vh]">
      <h1 className="z-10 mb-4 text-2xl font-semibold sm:text-4xl">{title}</h1>
      <h2 className="z-10 max-w-sm text-base text-zinc-200 sm:max-w-lg sm:text-xl">
        {description}
      </h2>
      <Image
        src={Img}
        alt="Contact us"
        width={500}
        height={500}
        className="absolute left-1/2 top-1/2 z-0 w-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-50"
      />
    </div>
  );
};

export default PageHeader;

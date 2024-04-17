import Img from "@/images/knowledge_bg.png";
import Image from "next/image";
import { FC } from "react";

type Props = {
  title?: string;
  description?: string;
};
const PageHeader: FC<Props> = ({ description, title }) => {
  return (
    <div className="relative left-1/2 mb-[5vh] flex h-[30vh] w-screen -translate-x-1/2 transform flex-col items-center justify-center rounded-full border-b-1 border-zinc-400 border-opacity-50 text-center">
      <h1 className="z-10 mb-6 text-4xl font-semibold">{title}</h1>
      <h2 className="z-10 max-w-lg text-xl text-zinc-200">{description}</h2>
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

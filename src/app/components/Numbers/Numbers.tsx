import Background from "@/images/knowledge_bg.png";
import Image from "next/image";
import Number from "./Number";

const Numbers = () => {
  return (
    <div className="banner relative left-1/2 -translate-x-1/2 transform bg-gradient-to-r from-primary to-secondary py-4 font-bold xs:py-8">
      <div className="container relative mx-auto flex max-w-screen-xl items-center justify-between px-2 md:justify-evenly md:px-0">
        <Number number="1" title="Project Done" />
        <div className="h-14 w-px bg-white opacity-50" />
        <Number number="3" title="Happy Clients" />
        <div className="h-14 w-px bg-white opacity-50" />
        <Number number="4.8" title="Client Ratings" />
        <div className="h-14 w-px bg-white opacity-50" />
        <Number number="2+" title="Years of experience" />
        <Image
          src={Background}
          width={100}
          height={100}
          alt="Knowledge"
          className="absolute left-1/2 top-full w-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-50"
        />
      </div>
    </div>
  );
};

export default Numbers;

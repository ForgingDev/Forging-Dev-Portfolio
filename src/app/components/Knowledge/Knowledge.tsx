import Background from "@/images/knowledge_bg.png";
import Image from "next/image";
import { FaPalette, FaPlaneDeparture } from "react-icons/fa";
import {
  FaAward,
  FaBitcoin,
  FaLockOpen,
  FaPeopleGroup,
  FaPiggyBank,
  FaRegHourglass,
} from "react-icons/fa6";
import KnowledgeItem from "./KnowledgeItem";

const Knowledge = () => {
  return (
    <div className="glass-effect relative rounded-lg border-1 border-off bg-gradient-to-b from-off px-1 py-7 shadow-md xs:px-6 xs:py-14 md:p-14">
      <Image
        src={Background}
        width={400}
        height={400}
        alt="Knowledge"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
      />
      <h3 className="mx-auto mb-8 max-w-lg text-center text-xl font-bold leading-snug sm:mb-12 sm:text-3xl">
        Foundational Values: Our Guiding Principles and Beliefs.
      </h3>
      <div className="grid grid-cols-2 justify-items-center gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        <KnowledgeItem icon={<FaPalette />} title="Creativy" />
        <KnowledgeItem icon={<FaBitcoin />} title="Innovation" />
        <KnowledgeItem icon={<FaLockOpen />} title="Transparency" />
        <KnowledgeItem icon={<FaAward />} title="Quality" />
        <KnowledgeItem icon={<FaPeopleGroup />} title="Collaboration" />
        <KnowledgeItem icon={<FaPlaneDeparture />} title="Efficiency" />
        <KnowledgeItem icon={<FaPiggyBank />} title="Growth" />
        <KnowledgeItem icon={<FaRegHourglass />} title="Reliability" />
      </div>
    </div>
  );
};

export default Knowledge;

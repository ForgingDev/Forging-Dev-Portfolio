import { FC } from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
};
const KnowledgeItem: FC<Props> = ({ icon, title }) => {
  return (
    <div className="flex cursor-default items-center text-center text-lg font-medium opacity-50 transition-all hover:opacity-100 xs:text-2xl">
      <span className="mr-1 text-xl xs:text-3xl">{icon}</span>
      <span>{title}</span>
    </div>
  );
};

export default KnowledgeItem;

import { cn } from "@/common/helpers/tailwind.helper";
import { FC } from "react";

type Props = {
  subtitle: string;
  title: string;
  description: string;
  color?: string;
};
const OurValueCard: FC<Props> = ({
  description,
  subtitle,
  title,
  color = "bg-primary",
}) => {
  return (
    <div
      className={cn("flex flex-col gap-y-4 rounded-lg p-6 shadow-sm", color)}
    >
      <h4 className="text-sm font-bold uppercase">{subtitle}</h4>
      <h3 className="text-2xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default OurValueCard;

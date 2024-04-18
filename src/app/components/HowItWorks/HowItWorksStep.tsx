import Button from "@/common/components/Button";
import Link from "next/link";
import { FC } from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  button: string;
};
const HowItWorksStep: FC<Props> = ({ button, description, icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 self-stretch text-center xs:gap-y-4">
      <div className="text-3xl text-secondary xs:text-4xl">{icon}</div>
      <div className="text-lg font-medium xs:text-xl">{title}</div>
      <div className="mb-1 text-sm text-zinc-400 xs:mb-4 xs:text-base">
        {description}
      </div>
      <Link href="/contact">
        <Button size="sm" className="mt-auto w-fit">
          {button}
        </Button>
      </Link>
    </div>
  );
};

export default HowItWorksStep;

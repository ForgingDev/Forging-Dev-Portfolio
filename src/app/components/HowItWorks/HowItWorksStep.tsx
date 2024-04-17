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
    <div className="flex flex-col items-center justify-center gap-y-4 self-stretch text-center">
      <div className="text-4xl text-secondary">{icon}</div>
      <div className="text-xl font-medium">{title}</div>
      <div className="mb-4 text-zinc-400">{description}</div>
      <Link href="/contact">
        <Button size="sm" className="mt-auto w-fit">
          {button}
        </Button>
      </Link>
    </div>
  );
};

export default HowItWorksStep;

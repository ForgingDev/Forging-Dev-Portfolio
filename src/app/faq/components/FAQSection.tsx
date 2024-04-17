import { FC } from "react";

type Props = {
  title: string;
  description: string;
};
const FAQSection: FC<Props> = ({ description, title }) => {
  return (
    <div>
      <h3 className="mb-1 text-lg font-semibold text-secondary">{title}</h3>
      <p className="leading-relaxed tracking-wide text-zinc-200">
        {description}
      </p>
    </div>
  );
};

export default FAQSection;

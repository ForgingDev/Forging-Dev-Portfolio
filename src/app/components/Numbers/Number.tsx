import { FC } from "react";

type Props = {
  number: string;
  title: string;
};
const Number: FC<Props> = ({ number, title }) => {
  return (
    <div>
      <div className="mb-1 text-center text-2xl xs:text-3xl md:text-5xl">
        {number}
      </div>
      <div className="text-center text-xs uppercase xs:text-sm">{title}</div>
    </div>
  );
};

export default Number;

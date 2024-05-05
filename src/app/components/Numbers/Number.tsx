import { FC } from "react";

type Props = {
  number: string;
  title: string;
};
const Number: FC<Props> = ({ number, title }) => {
  return (
    <div>
      <div className="mb-1 text-center text-3xl md:text-4xl lg:text-5xl ">
        {number}
      </div>
      <div className="text-center text-xs uppercase md:text-sm">{title}</div>
    </div>
  );
};

export default Number;

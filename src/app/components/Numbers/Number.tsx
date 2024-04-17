import { FC } from "react";

type Props = {
  number: string;
  title: string;
};
const Number: FC<Props> = ({ number, title }) => {
  return (
    <div>
      <div className="mb-1 text-center text-3xl md:text-5xl">{number}</div>
      <div className="text-sm uppercase">{title}</div>
    </div>
  );
};

export default Number;

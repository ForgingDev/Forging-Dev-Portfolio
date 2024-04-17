import { FC, PropsWithChildren } from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  label: React.ReactNode;
} & PropsWithChildren;
const Dropdown: FC<Props> = ({ label, children }) => {
  return (
    <div className="group relative">
      <div className="flex cursor-pointer items-center gap-2 transition-all duration-500 group-hover:text-secondary">
        {label} <FaChevronDown className="text-sm" />
      </div>
      <div className="absolute top-6">
        <div className="dropdown-panel mt-5 flex h-0 w-max flex-col overflow-hidden rounded-lg bg-off opacity-0 shadow-md transition-all group-hover:h-fit group-hover:opacity-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

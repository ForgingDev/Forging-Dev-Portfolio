import { Dispatch, FC, SetStateAction } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

type Props = {
  openedNavbar: boolean;
  setOpenedNavbar: Dispatch<SetStateAction<boolean>>;
};
const Hamburger: FC<Props> = ({ openedNavbar, setOpenedNavbar }) => {
  return (
    <div
      className="z-50 block text-2xl text-white md:hidden"
      onClick={() => setOpenedNavbar((prev) => !prev)}
    >
      {openedNavbar ? <FaX /> : <FaBars />}
    </div>
  );
};

export default Hamburger;

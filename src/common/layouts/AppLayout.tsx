import { FC, PropsWithChildren } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-screen max-w-screen-xl">
        <main className="px-1.5 pt-[69px] sm:px-4">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;

import { Metadata } from "next";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Knowledge from "./components/Knowledge/Knowledge";
import Numbers from "./components/Numbers/Numbers";
import OurValue from "./components/OurValue/OurValue";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

export const metadata: Metadata = {
  title: "Forging Dev",
  description: "Web Development & Online Services by Forging Dev",
};

const Home = () => {
  return (
    <div className="flex flex-col gap-y-14 xs:gap-y-24">
      <Hero />
      <Knowledge />
      <WhoWeAre />
      <OurValue />
      <Numbers />
      <Services />
      <HowItWorks />
      <Projects />
      <div></div>
    </div>
  );
};

export default Home;

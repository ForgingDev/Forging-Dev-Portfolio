import WhoWeAreImage from "./WhoWeAreImage";
import WhoWeAreInfo from "./WhoWeAreInfo";

const WhoWeAre = () => {
  return (
    <div
      id="about-us"
      className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
    >
      <WhoWeAreImage />
      <WhoWeAreInfo />
    </div>
  );
};

export default WhoWeAre;

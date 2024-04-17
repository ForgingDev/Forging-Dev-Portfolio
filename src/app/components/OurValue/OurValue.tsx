import OurValueCard from "./OurValueCard";
import OurValueImage from "./OurValueImage";

const OurValue = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <OurValueImage />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1">
        <OurValueCard
          subtitle="Our vision"
          title="Illuminating the Path to Digital Success."
          description="Our vision is clear: to revolutionize the digital landscape by empowering businesses with innovative solutions."
        />
        <OurValueCard
          subtitle="Our mission"
          title="Unleash Your Potential in the Digital Realm."
          description="Empower success in the digital world by providing cutting-edge solutions that drive growth for your business."
          color="bg-secondary"
        />
      </div>
    </div>
  );
};

export default OurValue;

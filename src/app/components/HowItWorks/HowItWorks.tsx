import {
  FaHelmetSafety,
  FaPhoneVolume,
  FaRegRectangleList,
  FaRocket,
} from "react-icons/fa6";
import HowItWorksStep from "./HowItWorksStep";

const HowItWorks = () => {
  return (
    <div>
      <div className="text-center">
        <h4 className="mb-4 text-sm font-bold uppercase text-secondary">
          How it works
        </h4>
        <h3 className="mx-auto mb-10 max-w-2xl text-4xl font-semibold">
          Unlock Astonishing Results with Just 4 Simple Steps!
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <HowItWorksStep
          title="Consultation"
          description="Schedule a meeting to discuss your goals and vision."
          icon={<FaPhoneVolume />}
          button="Get Started"
        />
        <HowItWorksStep
          title="Planning & Strategy"
          description="We'll develop a customized plan tailored to your needs."
          icon={<FaRegRectangleList />}
          button="Get Quote"
        />
        <HowItWorksStep
          title="Execution & Development"
          description="Our team will bring your vision to life with top-notch development."
          icon={<FaHelmetSafety />}
          button="Learn More"
        />
        <HowItWorksStep
          title="Launch & Optimization"
          description="We'll ensure a successful launch and continue to optimize for results."
          icon={<FaRocket />}
          button="Get Support"
        />
      </div>
    </div>
  );
};

export default HowItWorks;

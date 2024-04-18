import { FaInstagram, FaLaptop, FaStore } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="services">
      <div className="text-center">
        <h4 className="mb-4 text-sm font-bold uppercase text-secondary">
          What we offer
        </h4>
        <h3 className="mx-auto mb-8 max-w-2xl text-2xl font-semibold xs:text-4xl">
          Where Strategy Meets Digital, Your Story Begins with Project Valhalla.
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <ServiceCard
          title="Website Development"
          description="Elevate your brand with our tailored website solutions, designed to reflect your identity and engage your audience effectively."
          image={<FaLaptop />}
          link="/services/#web-development"
        />
        <ServiceCard
          title="Online Store"
          description="Step into online retail with our store development, providing intuitive platforms that showcase your products and deliver exceptional shopping experiences."
          image={<FaStore />}
          link="/services/#online-stores"
        />
        <ServiceCard
          title="Social Media Management"
          description="Improve your brand's digital footprint with our social media services, covering content creation, community engagement, and growth strategies."
          image={<FaInstagram />}
          link="/services/seo"
        />
      </div>
    </div>
  );
};

export default Services;

import DIAMANTEN_KLOZ_IMAGE from "@/images/diamantenklotz.png";
import LIQUID_MONEY_IMAGE from "@/images/liquid_money.png";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="portfolio">
      <div className="text-center">
        <h4 className="mb-4 text-sm font-bold uppercase text-secondary">
          Featured Projects
        </h4>
        <h3 className="mx-auto mb-10 max-w-2xl text-2xl font-semibold xs:text-4xl">
          Unleashing the Power of Innovation and Creativity.
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Project
            client="Liquid Money"
            description="Responsive online store with secure ordering, online payments, and a custom CMS. Includes inventory & orders management, with SEO optimization & analytics."
            image={LIQUID_MONEY_IMAGE}
            subtitle="Online Store"
            title="Liquid Money"
            type="E-Commerce"
            link="https://magazin.liquidmoney.ro/"
          />
          <Project
            client="Diamanten Klotz"
            description="Built a sleek e-commerce site for a German diamond retailer, featuring translations, top-notch SEO, analytics, high security, PDF rendering and more."
            image={DIAMANTEN_KLOZ_IMAGE}
            subtitle="Online Store"
            title="Diamanten Klotz"
            type="E-Commerce"
            link="https://diamantenklotz.de/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import LIQUID_MONEY_IMAGE from "@/images/liquid_money.png";
import Project from "./Project";

const Projects = () => {
  return (
    <div id="portfolio">
      <div className="text-center">
        <h4 className="mb-4 text-sm font-bold uppercase text-secondary">
          Featured Project
        </h4>
        <h3 className="mx-auto mb-10 max-w-2xl text-2xl font-semibold xs:text-4xl">
          Unleashing the Power of Innovation and Creativity.
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Project
            client="Liquid Money"
            date="2022"
            description="Online store developed for a Pawn Shop in Romania. The store has ordering, payment, content management features and more."
            duration="7 months"
            image={LIQUID_MONEY_IMAGE}
            subtitle="Online Store"
            title="Liquid Money Store"
            type="Online Store"
            link="https://magazin.liquidmoney.ro/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

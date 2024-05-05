import Button from "@/common/components/Button";
import Link from "next/link";

const WhoWeAreInfo = () => {
  return (
    <div className="flex flex-col gap-y-4 xs:gap-y-6">
      <div className="text-xs font-bold uppercase text-secondary">
        Who are we
      </div>
      <h3 className="text-xl font-bold leading-normal xs:text-4xl">
        Crafting Digital Destiny: Project Valhalla Unleashes Innovation
      </h3>
      <p className="text-zinc-400">
        At Project Valhalla, we&apos;re your digital architects, dedicated to
        delivering cutting-edge web development and digital solutions tailored
        to your vision. Let us help your brand thrive online.
      </p>
      <Link href="/about-us">
        <Button className="mt-2 w-fit" size="lg">
          Discover More
        </Button>
      </Link>
    </div>
  );
};

export default WhoWeAreInfo;

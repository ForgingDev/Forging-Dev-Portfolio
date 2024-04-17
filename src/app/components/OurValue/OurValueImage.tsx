import Button from "@/common/components/Button";
import Image from "next/image";
import Link from "next/link";

const OurValueImage = () => {
  return (
    <div className="relative flex items-end self-stretch pb-8 md:col-span-2">
      <Image
        src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-50 filter"
        alt="Our Value Image"
        width={500}
        height={500}
      />
      <div className="absolute inset-0 bg-dark-purple opacity-60"></div>
      <div className="z-10 mx-auto flex flex-col gap-y-5 md:w-3/4">
        <h4 className="text-sm font-bold uppercase text-secondary">
          Our value
        </h4>
        <h3 className="text-3xl font-bold">
          Smart Designs, Sharp Results - Discover the value of partnering with
          Us
        </h3>
        <p className="mb-1 text-zinc-400">
          Our products and services are meticulously crafted to empower your
          brand, drive growth, and maximize ROI. From stunning websites to
          efficient SAAS services, we&apos;re dedicated to delivering unmatched
          value
        </p>
        <Link href="/contact">
          <Button className="w-fit" size="lg">
            Unlock Your Potential
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OurValueImage;

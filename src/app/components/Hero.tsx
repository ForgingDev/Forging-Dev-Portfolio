import Button from "@/common/components/Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="home"
      className="banner relative left-1/2 flex h-[50vh] -translate-x-1/2 transform flex-col items-center justify-center sm:min-h-[500px]"
    >
      <Image
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={1920}
        height={1080}
        priority
        alt="Hero"
        className="hero-image absolute -top-[69px] -z-10 h-full w-full transform object-cover object-center opacity-30"
      />
      <h3 className="mb-4 rounded-full border-2 border-secondary px-3 py-1 text-xs font-semibold uppercase xs:text-sm">
        Welcome to Forging Dev
      </h3>
      <h1 className="text-center text-3xl font-extrabold leading-tight xs:text-5xl md:text-6xl">
        Your Path to Digital <br /> Transformation
      </h1>
      <p className="mt-4 max-w-xl px-2 text-center text-zinc-300">
        We provide the best solutions to grow your business and help you succeed
        in the digital world. Let&apos;s get started!
      </p>
      <div className="mt-8 flex gap-6">
        <Link href="/contact">
          <Button size="lg">Get Started</Button>
        </Link>
        <Link href="/about-us">
          <Button size="lg" className="bg-none outline outline-1">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

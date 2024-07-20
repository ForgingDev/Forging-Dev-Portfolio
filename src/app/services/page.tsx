import Button from "@/common/components/Button";
import PageHeader from "@/common/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Services",
  description:
    "Discover a range of services tailored to elevate your digital presence",
};

const Services = () => {
  return (
    <div className="pb-[10vh]">
      <PageHeader
        title="Our Services"
        description="Discover a range of services tailored to elevate your digital presence"
      />
      <div className="flex flex-col gap-y-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div id="web-development">
            <h2 className="text-3xl font-medium">Website Development</h2>
            <p className="my-4 text-zinc-300">
              Our website development service is dedicated to creating tailored
              solutions that elevate your online presence. We specialize in
              building a variety of website types, including stunning
              portfolios, informative business websites, engaging blogs, and
              more. Our experienced team collaborates closely with you to
              understand your unique goals and requirements, ensuring that each
              website we create reflects your brand identity and effectively
              engages your target audience. Whether you&apos;re a creative
              professional, a small business owner, or a large corporation, we
              have the expertise to bring your digital vision to life.
            </p>
            <Link href="/contact">
              <Button className="w-fit">Let&apos;s do it</Button>
            </Link>
          </div>
          <div className="group relative max-h-[450px] self-stretch rounded-lg border-1 border-zinc-200 border-opacity-15 p-4">
            <div className="absolute inset-0 m-4 rounded-lg bg-purple-900 opacity-35 transition-all duration-500 group-hover:opacity-0"></div>
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Who we are"
              className="h-full w-full overflow-hidden rounded-lg object-cover object-center"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="group relative max-h-[450px] self-stretch rounded-lg border-1 border-zinc-200 border-opacity-15 p-4">
            <div className="absolute inset-0 m-4 rounded-lg bg-purple-900 opacity-35 transition-all duration-500 group-hover:opacity-0"></div>
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Who we are"
              className="h-full w-full overflow-hidden rounded-lg object-cover object-center"
              width={500}
              height={500}
            />
          </div>
          <div id="online-stores" className="row-start-1 lg:row-start-auto">
            <h2 className="text-3xl font-medium">Online Stores</h2>
            <p className="my-4 text-zinc-300">
              Step into the world of online retail with confidence with our
              specialized online store development service. We understand that
              every business is unique, which is why we offer tailored solutions
              to meet your specific needs. From intuitive user interfaces to
              seamless checkout processes, we craft online stores that not only
              showcase your products but also provide an exceptional shopping
              experience for your customers. Whether you&apos;re starting from
              scratch or looking to enhance your existing e-commerce platform,
              our team is here to help you succeed in the competitive online
              marketplace.
            </p>
            <Link href="/contact">
              <Button className="w-fit">Start Selling Now</Button>
            </Link>
          </div>
        </div>
        <div
          id="app-development"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-medium">Application Development</h2>
            <p className="my-4 text-zinc-300">
              Transform your innovative ideas into reality with our custom
              application development service. Our experienced team of
              developers specializes in creating unique applications that cater
              to your specific requirements. Whether you&apos;re looking to
              build a mobile app, a web app, or a software solution, we have the
              expertise to bring your vision to life. From initial concept to
              final launch, we work closely with you to ensure that your
              application meets your goals and delivers an exceptional user
              experience. Let us help you turn your ideas into successful
              digital products.
            </p>
            <Link href="/contact">
              <Button className="w-fit">Get Started Today</Button>
            </Link>
          </div>
          <div className="group relative max-h-[450px] self-stretch rounded-lg border-1 border-zinc-200 border-opacity-15 p-4">
            <div className="absolute inset-0 m-4 rounded-lg bg-purple-900 opacity-35 transition-all duration-500 group-hover:opacity-0"></div>
            <Image
              src="https://images.unsplash.com/photo-1585250003309-694ff34512d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Who we are"
              className="h-[370px] w-full overflow-hidden rounded-lg object-cover object-center"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

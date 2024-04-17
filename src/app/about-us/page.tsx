import Button from "@/common/components/Button";
import PageHeader from "@/common/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="pb-[10vh]">
      <PageHeader
        title="About Us"
        description="Learn about our journey, values, and commitment to excellence."
      />
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-medium">Our Mission</h2>
          <p className="my-4 text-zinc-300">
            At Project Valhalla, we prioritize quality, efficiency, and
            transparency in every project we undertake. Specializing in web
            development services and online store development, we ensure that
            each solution is tailored to your unique needs. We don&apos;t just
            build websites; we craft experiences. Our team listens attentively
            to your requirements, customizing every aspect to align with your
            vision. We believe in clear communication and keeping you informed
            at every stage of the process. Unlike others, we don&apos;t
            compromise on quality. We utilize the latest tools and technologies
            to deliver results that exceed expectations. With [Business Name],
            you can trust in our commitment to delivering high-quality,
            efficient, and transparent solutions for your online business.
          </p>
          <Button className="w-fit">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <div className="group relative max-h-[450px] self-stretch rounded-lg border-1 border-zinc-200 border-opacity-15 p-4">
          <div className="absolute inset-0 m-4 rounded-lg bg-purple-900 opacity-35 transition-all duration-500 group-hover:opacity-0"></div>
          <Image
            src="https://images.unsplash.com/photo-1710946264456-0786fd17d34a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Who we are"
            className="h-full w-full overflow-hidden rounded-lg object-cover object-center"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

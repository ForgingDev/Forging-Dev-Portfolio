import Image from "next/image";

const WhoWeAreImage = () => {
  return (
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
  );
};

export default WhoWeAreImage;

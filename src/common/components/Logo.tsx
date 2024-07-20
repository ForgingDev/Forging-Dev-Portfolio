import Image from "next/image";
import Link from "next/link";
import logoImage from "../../images/forging-dev.jpg";

const Logo = () => {
  return (
    <Link className="text-2xl font-bold tracking-wider" href="/">
      <Image
        src={logoImage}
        alt="logo"
        width={500}
        height={500}
        className="h-12 w-12 rounded-full object-cover object-center"
      ></Image>
    </Link>
  );
};

export default Logo;

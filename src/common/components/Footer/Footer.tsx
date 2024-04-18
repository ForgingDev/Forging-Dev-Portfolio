import FooterLogo from "./FooterLogo";
import FooterSection from "./FooterSection";
import FooterUnder from "./FooterUnder";

const Footer = () => {
  return (
    <div className="w-screen border-t-1 border-zinc-500 border-opacity-25">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center gap-y-6 px-4 py-6 xs:flex-nowrap xs:gap-y-0 xs:py-12">
        <FooterLogo />
        <div className="flex flex-1 justify-evenly gap-x-4 xs:gap-x-0">
          <FooterSection
            links={[
              {
                title: "Website Development",
                url: "/services#web-development",
              },
              {
                title: "Online Stores",
                url: "/services#online-stores",
              },
              {
                title: "Social Media Marketing",
                url: "/services#social-media",
              },
            ]}
            title="Services"
          />
          <FooterSection
            links={[
              {
                title: "FAQ",
                url: "/faq",
              },
              {
                title: "Contact Us",
                url: "/contact",
              },
            ]}
            title="Support"
          />
          <FooterSection
            links={[
              {
                title: "About us",
                url: "/about-us",
              },
              {
                title: "Legal Notices",
                url: "/legal",
              },
              {
                title: "Terms & Conditions",
                url: "/terms-and-conditions",
              },
            ]}
            title="Company"
          />
        </div>
      </div>
      <FooterUnder />
    </div>
  );
};

export default Footer;

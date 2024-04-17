import PageHeader from "@/common/components/PageHeader";
import FormSide from "./components/FormSide/FormSide";
import InfoSide from "./components/InfoSide";

const ContactUs = () => {
  return (
    <div className="pb-[10vh]">
      <PageHeader
        title="Contact Us"
        description="Start the conversation to established good relationship and business."
      />
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <InfoSide />
        <FormSide />
      </div>
    </div>
  );
};

export default ContactUs;

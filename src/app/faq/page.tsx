import PageHeader from "@/common/components/PageHeader";
import FAQSection from "./components/FAQSection";

const FAQ = () => {
  return (
    <div className="pb-[10vh]">
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services and offerings."
      />
      <div className="flex flex-col gap-y-10">
        <FAQSection
          description="The timeframe for completion varies depending on the scope and
              complexity of the project. We work closely with each client to
              establish clear timelines and milestones to ensure timely delivery."
          title="How long does it take to complete a typical project?"
        />
        <FAQSection
          description="Yes, we offer maintenance and support services to ensure your
              website or application continues to perform optimally post-launch.
              Our maintenance packages include regular updates, security checks,
              and technical support to address any issues that may arise. We
              believe in building long-term partnerships with our clients and are
              committed to supporting your digital presence beyond the initial
              project delivery."
          title="Do you provide maintenance services after the project is completed?"
        />
        <FAQSection
          description="Absolutely! We understand that businesses evolve, and your website
              should reflect those changes. We provide user-friendly content
              management systems (CMS) that allow you to easily update and modify
              your website's content, images, and more. If you prefer, we
              also offer ongoing support and maintenance packages where our team
              can handle updates and changes for you."
          title="Can I make changes to my website after it's launched?"
        />
        <FAQSection
          description="If you experience any technical issues with your website or
              application, our dedicated support team is here to help. Simply
              reach out to us through our support channels, and we'll
              promptly investigate and resolve the issue. Additionally, our
              maintenance packages include proactive monitoring and regular
              updates to prevent issues before they arise, ensuring your digital
              presence remains smooth and reliable."
          title="What happens if I encounter technical issues with my website or application?"
        />
        <FAQSection
          description="Yes, we offer training sessions to familiarize you with the backend systems of your website or application. Our team will walk you through how to update content, manage user accounts, and perform other essential tasks. Additionally, we provide comprehensive documentation for reference."
          title="Can you provide training for managing the website or application?"
        />
        <FAQSection
          description=" If you require additional features or functionalities for your website in the future, we're here to help. Our team can assess your needs and provide custom development solutions to expand your website's capabilities. Whether it's integrating new tools, adding e-commerce functionality, or implementing custom features, we have the expertise to make it happen. Simply reach out to discuss your requirements, and we'll work with you to find the best solution."
          title="What if I need additional features or functionalities added to my website in the future?"
        />
      </div>
    </div>
  );
};

export default FAQ;

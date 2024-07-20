import PageHeader from "@/common/components/PageHeader";
import { Metadata } from "next";
import FAQSection from "../faq/components/FAQSection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how we collect, use, and protect your personal information.",
};

const PrivacyPolicy = () => {
  return (
    <div className="pb-[10vh]">
      <PageHeader
        title="Privacy Policy"
        description="Learn how we collect, use, and protect your personal information."
      />
      <div className="flex flex-col gap-y-10">
        <FAQSection
          description="
        Personal Information: When you use our website or contact us, we may collect personal information such as your name, email address, phone number, and any other information you provide to us. Usage Data: We may also collect information about how you use our website, such as your IP address, browser type, pages visited, and referring website."
          title="Information We Collect"
        />
        <FAQSection
          title="How We Use Your Information"
          description="To Provide Services: We use the information we collect to provide and improve our services, respond to inquiries, and communicate with you about our offerings. Marketing: With your consent, we may use your contact information to send you promotional materials or newsletters about our services. Analytics: We may use third-party analytics tools to analyze website usage and trends to improve our website and services."
        />
        <FAQSection
          title="Information Sharing"
          description="We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. Service Providers: We may share your information with third-party service providers who assist us in providing our services or operating our website."
        />

        <FAQSection
          title="Data Security"
          description="We take reasonable measures to protect the security of your personal information and prevent unauthorized access, use, or disclosure."
        />

        <FAQSection
          title="Your Rights"
          description="You have the right to access, update, or delete your personal information at any time. You may also opt-out of receiving promotional communications from us. To exercise your rights or request assistance, please contact us using the contact information provided below."
        />

        <FAQSection
          title="Changes to this Privacy Policy"
          description="We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
        />

        <FAQSection
          title="Contact Us"
          description="If you have any questions or concerns about this Privacy Policy, please contact us at Forging Dev."
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;

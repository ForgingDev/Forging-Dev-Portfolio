import PageHeader from "@/common/components/PageHeader";
import FAQSection from "../faq/components/FAQSection";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read our terms and conditions to understand the guidelines for using our website and services.",
};

const TermsAndConditions = () => {
  return (
    <div className="pb-[10vh]">
      <PageHeader
        title="Terms & Conditions"
        description="Read our terms and conditions to understand the guidelines for using our website and services."
      />
      <div className="flex flex-col gap-y-10">
        <FAQSection
          description="TBy accessing and using Forging Dev's website and services, you agree to be bound by these Terms & Conditions, our Privacy Policy, and any other guidelines or policies referenced herein."
          title="Acceptance of Terms"
        />
        <FAQSection
          description="Forging Dev provides innovative digital solutions and strategic guidance to empower success in the online realm. Our services include website development, online store development, application development, and more, as outlined on our website."
          title="Services"
        />
        <FAQSection
          description="Clients are responsible for providing accurate information, materials, and feedback necessary for the completion of projects. Failure to do so may result in delays or additional fees. Clients must also adhere to any guidelines or requirements specified by Forging Dev throughout the duration of the project."
          title="Client Obligations"
        />
        <FAQSection
          description="Payment terms for projects and services provided by Forging Dev are outlined in our proposal or agreement. Payment is typically due in installments based on project milestones, with final payment due upon completion and delivery of the project."
          title="Payment Terms"
        />
        <FAQSection
          description="All intellectual property rights related to projects created by Forging Dev, including but not limited to website designs, code, and content, remain the property of Forging Dev until full payment is received. Upon receipt of full payment, intellectual property rights are transferred to the client as outlined in our agreement."
          title="Intellectual Property"
        />
        <FAQSection
          description="Forging Dev respects the confidentiality of client information and will not disclose any confidential or proprietary information without prior consent. Similarly, clients agree to keep confidential any proprietary information provided by Forging Dev."
          title="Confidentiality"
        />
        <FAQSection
          description="Forging Dev shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our services, including but not limited to loss of revenue, profits, or data."
          title="Limitation of Liability"
        />
        <FAQSection
          description="Forging Dev reserves the right to modify or update these Terms & Conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes."
          title="Changes to Terms"
        />
        <p>
          By using our website and services, you acknowledge that you have read,
          understood, and agree to be bound by these Terms & Conditions. If you
          do not agree to these terms, please refrain from using our website and
          services.
        </p>
        <p>Last Updated: 02 Apr. 2024</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;

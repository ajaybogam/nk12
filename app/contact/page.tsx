import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Twak from "@/components/Tawk/page";

const ContactPage = () => {
  return (
    <>
      <Twak />
      <Breadcrumb
        pageName="Contact Us"
        description="Get in touch with us today to explore how NK Automation Solutions can transform your industrial operations with cutting-edge automation technologies and expert services. We're here to help you achieve efficiency, precision, and success"
      />
      <Contact />
    </>
  );
};

export default ContactPage;

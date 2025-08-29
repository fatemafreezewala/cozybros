
import PagesHeader from "../components/PagesHeader";
import OurServices from "../components/services/our_services";

const Services = () => {
  return (
    <>
      <PagesHeader title="Services" />
      <div className="page-content-services">
        <OurServices />
      </div>
    </>
  );
};

export default Services;

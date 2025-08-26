import PagesHeader from "../components/PagesHeader";
import ServicesCard from '../components/home/OurServices'

const Services = () => {
  return (
    <>
      <PagesHeader title="Services"></PagesHeader>
      <div className="page-content-services">
        <ServicesCard heading={false}></ServicesCard>
      </div>
    </>

  );
};

export default Services;

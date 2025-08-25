import Services_Content from "../components/services/Services_Content";
import Services_Content_TitleBar from "../components/services/Services_Content_TitleBar";
const Services = () => {
  return (
    <div className="page-content-services">
      <Services_Content_TitleBar></Services_Content_TitleBar>
      <Services_Content></Services_Content> 
    </div>
  );
};

export default Services;

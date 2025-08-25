import Services_Info from "../components/services/Services_Info";
import Services_Content_TitleBar from "../components/services/Services_Content_TitleBar";
const Services = () => {
  return (
    <div className="page-content-services">
      <Services_Content_TitleBar></Services_Content_TitleBar>
      <Services_Info></Services_Info>
    </div>
  );
};

export default Services;

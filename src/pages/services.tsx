import React from "react";
import Services1 from "../components/services/services1";
import Services_Content from "../components/services/services_content";
import Services_Content_TitleBar from "../components/services/Services_Content_TitleBar";
const Services = () => {
  return (
    <div className="page-content-services">
      <Services1></Services1>
      <Services_Content_TitleBar></Services_Content_TitleBar>
      <Services_Content></Services_Content>
    </div>
  );
};

export default Services;

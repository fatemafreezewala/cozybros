import React from 'react';

import PagesHeader from "../components/PagesHeader"
import AboutIntro from "../components/about/AboutIntro";
import StaticBoxes from '../components/about/StaticBoxes';
import MarqueeTags from '../components/about/MarqueeTags';
const About: React.FC = () => {
  return (
    <>
      <PagesHeader title="About Us"></PagesHeader>
      <div className="page about-bg">
        <AboutIntro></AboutIntro>
        <StaticBoxes></StaticBoxes>
        <MarqueeTags></MarqueeTags>
      </div>
    </>

  );
};

export default About;

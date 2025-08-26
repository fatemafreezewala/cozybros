import React from 'react';

import About_TitleBar from "../components/about/About_TitleBar";
import AboutIntro from "../components/about/AboutIntro";
import StaticBoxes from '../components/about/StaticBoxes';
import MarqueeTags from '../components/about/MarqueeTags';
import HowItWorks from '../components/about/HowItWorks';
const About: React.FC = () => {
  return (
    <div className="page about-bg">
      <About_TitleBar></About_TitleBar>
      <AboutIntro></AboutIntro>
      <StaticBoxes></StaticBoxes>
      <MarqueeTags></MarqueeTags>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default About;

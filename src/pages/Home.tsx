import React from 'react';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Services from '../components/home/Services';
import Testimonial from '../components/home/Testimonial';
import OurStory from '../components/home/OurStory';
import OurServices from '../components/home/OurServices';
import BookAppointment from '../components/home/BookAppointment';
import ServicesMarquee from '../components/home/ServicesMarquee';

const Home: React.FC = () => {
  return (
    <div className='page-content'>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <ServicesMarquee></ServicesMarquee>
      <OurStory></OurStory>
      <OurServices></OurServices>
      <BookAppointment></BookAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

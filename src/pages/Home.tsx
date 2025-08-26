import React from 'react';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonial from '../components/home/Testimonial';
import OurStory from '../components/home/OurStory';
import OurServices from '../components/home/OurServices';
import BookAppointment from '../components/home/BookAppointment';
import ServicesMarquee from '../components/home/ServicesMarquee';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header></Header>
      <div className='page-content'>
        <WhyChooseUs></WhyChooseUs>
        <ServicesMarquee></ServicesMarquee>
        <OurStory></OurStory>
        <OurServices></OurServices>
        <BookAppointment></BookAppointment>
        <Testimonial></Testimonial>
      </div>
    </>
  );
};

export default Home;

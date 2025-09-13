import React from 'react';
import ContactUs from '../components/contact/ContactUs';
import PagesHeader from '../components/PagesHeader';
const Contact: React.FC = () => {
  return (
    <>
      <PagesHeader title="Contact US"></PagesHeader>
      <div className="page-content-contact">
        <ContactUs></ContactUs>
      </div>
    </>

  );
};

export default Contact;

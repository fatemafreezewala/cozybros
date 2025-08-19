import React from 'react';
import ContactUs from '../components/contact/ContactUs';
import ContactUsTitleBar from '../components/contact/ContactUsTitleBar';
const Contact: React.FC = () => {
  return (
    <div className="page-content-contact">
      <ContactUsTitleBar></ContactUsTitleBar>
      <ContactUs></ContactUs>
    </div>
  );
}; 

export default Contact;

import React from 'react';
import PagesHeader from "../components/PagesHeader"
import OurServices from '../components/home/OurServices';
const Services: React.FC = () => {
    return (
        <>
            <PagesHeader title="Services"></PagesHeader>
            <div className="page about-bg ">
                <OurServices heading={false}></OurServices>
            </div>
        </>

    );
};

export default Services;

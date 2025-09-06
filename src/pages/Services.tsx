import PagesHeader from "../components/PagesHeader"
import OurServices from '../components/home/OurServices';
const Services = () => {
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

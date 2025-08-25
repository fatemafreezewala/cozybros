import React from "react";

const Services_Content = () => {
  const services = [
    {
      number: "01",
      category: "Air Freshener",
      title: "Air Conditioning",
      description:
        "We install, repair, and maintain all types of air conditioning systems to keep your home cool, comfortable, and energy-efficient during the hottest days.",
      image: "/assets/images/Home/AirConditioning.svg",
    },
    {
      number: "02",
      category: "Cleaner",
      title: "Furnaces",
      description:
        "Our furnace installation and service ensure reliable heating with maximum efficiency, so your family stays warm throughout the cold WNY winters.",
      image: "/assets/images/Home/Furnaces.svg",
    },
    {
      number: "03",
      category: "Custodian",
      title: "Boilers",
      description:
        "From new boiler installations to regular maintenance, we provide safe, efficient, and long lasting heating solutions you can count on.",
      image: "/assets/images/Home/Boilers.svg",
    },
    {
      number: "04",
      category: "Disinfectant",
      title: "Mini Split AC",
      description:
        "A great option for homes without ductwork, mini splits offer room by-room comfort and energy savings with modern, quiet technology.",
      image: "/assets/images/Home/MiniSplitAc.svg",
    },
    {
      number: "05",
      category: "Vacuum",
      title: "Plumbing & Re-Piping",
      description:
        "Whether it's fixing leaks, upgrading old pipes, or complete re-piping, our plumbing services are built on quality, durability, and trust.",
      image: "/assets/images/Home/Plumbing.svg",
    },
    {
      number: "06",
      category: "Washroom",
      title: "Free estimate on furnace/ AC installs",
      description:
        "We believe in honesty and transparency, which is why we offer free, no obligation estimates on all furnace and AC installations.",
      image: "/assets/images/Home/FreeEstimate.svg",
    },
  ];

  return (
    <section className="service-one-bg">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-md-12">
            <div className="pbmit-heading-subheading animation-style2 text-center">
              <h4 className="fs-6 fw-semibold">❄️ What We Do</h4>
              <h2
                className="pbmit-title"
                style={{
                  fontWeight: "bold",
                  maxWidth: "900px",
                  margin: "0 auto",
                  fontSize: "2.5rem",
                  lineHeight: "1.2",
                  marginTop:"10px",
                  marginBottom:"-50px",
                }}
              >
                Cozy Bros specializes in customer service and installs a wide
                range of HVAC equipment for WNY and surrounding areas. We offer:
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <article className="pbmit-service-style-1">
                <div className="pbminfotech-post-item">
                  <div className="pbmit-box-content-wrap">
                    <div className="pbmit-service-image-wrapper">
                      <div className="pbmit-featured-img-wrapper">
                        <div className="pbmit-featured-wrapper">
                          <img
                            src={service.image}
                            className="img-fluid"
                            alt={service.title}
                          />
                        </div>
                      </div>
                      <div className="pbmit-service-btn-wrapper">
                        <a
                          className="pbmit-service-btn"
                          href="services"
                          title={service.title}
                        >
                          <span className="pbmit-button-icon">
                            <i className="pbmit-base-icon-angle-right"></i>
                          </span>
                        </a>
                      </div>
                      <a className="pbmit-link" href="service-details.html"></a>
                    </div>
                    <div className="pbmit-content-box">
                      <div className="pbminfotech-box-number">
                        {service.number}
                      </div>
                      <div className="pbmit-serv-cat">
                        <a href="services" rel="tag">
                          {service.category}
                        </a>
                      </div>
                      <h3 className="pbmit-service-title">
                        <a href="services">{service.title}</a>
                      </h3>
                      <div className="pbmit-service-description">
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services_Content;

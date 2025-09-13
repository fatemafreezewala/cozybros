const OurServices = ({ heading = true }: any) => {
  const services = [
    {
      number: "01",
      category: "Air Freshener",
      title: "Air Conditioning",
      description:
        "Stay cool all year round with our expert air conditioning services. We install, repair, and maintain all types of AC systems to keep your home comfortable and energy efficient.",
      image: "/assets/images/Home/AirConditioning.svg",
    },
    {
      number: "02",
      category: "Cleaner",
      title: "Furnaces",
      description:
        "Our furnace installation and service ensure reliable heating with maximum efficiency, so your family stays warm throughout the cold WNY wintersReliable warmth when you need it most. Our furnace installation and maintenance services ensure maximum efficiency, comfort, and long-lasting performance for your home.",
      image: "/assets/images/Home/Furnaces.svg",
    },
    {
      number: "03",
      category: "Custodian",
      title: "Boilers",
      description:
        "Safe, efficient, and dependable heating. From new installations to routine maintenance, our boiler services deliver long-term comfort and peace of mind.",
      image: "/assets/images/Home/Boilers.svg",
    },
    {
      number: "04",
      category: "Disinfectant",
      title: "Mini Split AC",
      description:
        "Perfect for homes without ductwork. Our mini split systems provide room-by-room comfort, quiet operation, and energy savings.",
      image: "/assets/images/Home/MiniSplitAc.svg",
    },
    {
      number: "05",
      category: "Vacuum",
      title: "Plumbing & Re-Piping",
      description:
        "From leak repairs to complete re-piping, we handle all your plumbing needs with quality craftsmanship, durability, and reliable solutions built to last.",
      image: "/assets/images/Home/Plumbing.svg",
    },
    {
      number: "06",
      category: "Washroom",
      title: "Free estimate on furnace/ AC installs",
      description:
        "No hidden costs, no pressure—just honest, upfront pricing. Get a free, no-obligation estimate on your furnace or air conditioning installation today.",
      image: "/assets/images/Home/FreeEstimate.svg",
    },
  ];

  return (
    <section className="service-one-bg">
      <div className="container">
        {heading && (<div className="row align-items-center mb-5 mt-5">
          <div className="col-md-12">
            <div className="pbmit-heading-subheading animation-style2 text-center">
              <h4 className="fs-6 fw-semibold">What We Do</h4>
              <h2
                className="pbmit-title what-we-do-title"
              // style={{
              //   fontWeight: "bold",
              //   maxWidth: "900px",
              //   margin: "0 auto",
              //   fontSize: "2.5rem",
              //   lineHeight: "1.2",
              //   marginTop: "10px",
              //   marginBottom: "-50px",
              // }}
              >
                Cozy Bros specializes in customer service and installs a wide
                range of HVAC equipment for WNY and surrounding areas. We offer:
              </h2>
            </div>
          </div>
        </div>)}
        {!heading && <div style={{ marginTop: '5%' }}></div>}

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
                          href="/service-details"
                          title={service.title}
                        >
                          <span className="pbmit-button-icon">
                            <i className="pbmit-base-icon-angle-right"></i>
                          </span>
                        </a>
                      </div>
                      <a className="pbmit-link" href="/service-details"></a>
                    </div>
                    <div className="pbmit-content-box">
                      <div className="pbminfotech-box-number">
                        {service.number}
                      </div>
                      <div className="pbmit-serv-cat">
                        <a href="/service-details" rel="tag">
                          {service.category}
                        </a>
                      </div>
                      <h3 className="pbmit-service-title">
                        <a href="/service-details">{service.title}</a>
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

export default OurServices;

const OurStory = () => {
  return (
    <section className="section-lg">
      <div className="container-fluid p-0">
        {/* Text Content at Top - Full Width */}
        <div className="row g-0">
          <div className="col-12">
            <div className="row g-0">
              {/* Left Text Content */}
              <div className="col-lg-6 col-sm-12 p-5">
                <div className="story-header mb-4">
                  <h6 className="mb-3" style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1px', color: '#000080', }}>
                    OUR STORY
                  </h6>
                  <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#1e293b', lineHeight: '1.2' }}>
                    From big company experience to personalized local service.
                  </h2>
                </div>
              </div>

              {/* Right Text Content */}
              <div className="col-lg-6 col-sm-12 p-5">
                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7', marginBottom: '2rem' }}>
                  My name is Ahmed and I live with my wonderful family in beautiful Lake View, NY. I've been in the
                  HVAC business for years and absolutely loved getting to know and work with families and
                  customers. That's what I value the most. However, working for a big company had a lot of
                  pressure, quotas, and pushy sales tactics.
                </p>

                <div className="mb-4">
                  <a
                    href="/contact"
                    className="btn btn-outline-success"
                    style={{
                      fontSize: '14px',
                      padding: '10px 20px',
                      borderRadius: '25px',
                      textDecoration: 'none'
                    }}
                  >
                    Contact Us →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images Section Below Text */}
        <div className="row g-0">
          <div className="col-12 p-3">
            <div className="story-images-grid d-flex flex-wrap gap-3">
              {/* Main Large Image - Left Side */}
              <div className="main-image-container flex-grow-1" style={{ minWidth: "250px", flexBasis: "65%" }}>
                <img
                  src="/assets/images/Home/FreeEstimate.svg"
                  alt="HVAC Technician Working"
                  className="img-fluid w-100 h-100"
                  style={{
                    objectFit: "cover",
                    borderRadius: "15px",
                    maxHeight: "500px"
                  }}
                />
              </div>

              {/* Two Smaller Images - Right Side Stacked */}
              <div
                className="right-images-container d-flex flex-column gap-3"
                style={{ minWidth: "200px", flexBasis: "30%" }}
              >
                <div className="right-image-top flex-fill">
                  <img
                    src="/assets/images/Home/Boilers.svg"
                    alt="Heating System"
                    className="img-fluid w-100 h-100"
                    style={{
                      objectFit: "cover",
                      borderRadius: "15px",
                      maxHeight: "245px"
                    }}
                  />
                </div>
                <div className="right-image-bottom flex-fill">
                  <img
                    src="/assets/images/Home/Roller.svg"
                    alt="Thermostat Control"
                    className="img-fluid w-100 h-100"
                    style={{
                      objectFit: "cover",
                      borderRadius: "15px",
                      maxHeight: "245px"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default OurStory
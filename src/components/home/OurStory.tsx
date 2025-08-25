
const OurStory = () => {
  return (
    <section className="section-lg">
      <div className="container-fluid p-0">
        {/* Text Content at Top - Full Width */}
        <div className="row g-0">
          <div className="col-12">
            <div className="row g-0">
              {/* Left Text Content */}
              <div className="col-6 p-5">
                <div className="story-header mb-4">
                  <h6 className="mb-3" style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1px',color:'#000080', }}>
                    ❄️ OUR STORY
                  </h6>
                  <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem', color: '#1e293b', lineHeight: '1.2' }}>
                    From big company experience to personalized local service.
                  </h2>
                </div>
              </div>
              
              {/* Right Text Content */}
              <div className="col-6 p-5">
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
            <div className="story-images-grid d-flex gap-3" style={{ height: '500px' }}>
              {/* Main Large Image - Left Side */}
              <div className="main-image-container" style={{ flex: '0 0 calc(80% - 8px)' }}>
                <img 
                  src="/assets/images/Home/FreeEstimate.svg" 
                  alt="HVAC Technician Working" 
                  className="img-fluid w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                />
              </div>

              {/* Two Smaller Images - Right Side Stacked */}
              <div className="right-images-container d-flex flex-column gap-3" style={{ flex: '0 0 calc(20% - 15px)' }}>
                <div className="right-image-top" style={{ flex: '1' }}>
                  <img 
                    src="/assets/images/Home/Boilers.svg" 
                    alt="Heating System" 
                    className="img-fluid w-100 h-100"
                    style={{ 
                      objectFit: 'cover',
                      borderRadius: '15px'
                    }}
                  />
                </div>
                <div className="right-image-bottom" style={{ flex: '1' }}>
                  <img 
                    src="/assets/images/Home/Roller.svg" 
                    alt="Thermostat Control" 
                    className="img-fluid w-100 h-100"
                    style={{ 
                      objectFit: 'cover',
                      borderRadius: '15px'
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
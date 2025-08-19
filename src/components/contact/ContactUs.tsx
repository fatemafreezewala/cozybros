import React from 'react'

const ContactUs = () => {
  return (
    <div className="page-content">  
      {/* Contact Info Cards Section */}
      <section className="section-xl">
        <div className="container">
          <div className="row">
            {/* Left Side - Contact Info Cards */}
            <div className="col-lg-4">
              <div className="contact-info-cards h-100 d-flex flex-column">
                {/* Mail Us Card */}
                <div className="contact-card mb-3 p-4 bg-white rounded shadow-sm flex-fill">
                  <div className="d-flex justify-content-between align-items-start h-100">
                    <div>
                      <h4 className="fw-bold mb-3" style={{ fontSize: '18px', color: '#1e293b' }}>Mail Us 24/7</h4>
                      <p className="mb-2" style={{ fontSize: '14px', color: '#64748b' }}>
                        cozybrosheating@gmail.com
                      </p>
                      <p className="mb-0" style={{ fontSize: '14px', color: '#64748b' }}>
                        support@cozybrosheating.com
                      </p>
                    </div>
                    <div className="contact-icon-wrapper">
                      <div className="contact-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center" 
                           style={{ width: '50px', height: '50px' }}>
                        <i className="fas fa-envelope" style={{ fontSize: '20px' }}></i>
                      </div>
                      <div className="contact-arrow mt-2 text-center">
                        <div className="arrow-circle bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" 
                             style={{ width: '30px', height: '30px', fontSize: '12px' }}>
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Location Card */}
                <div className="contact-card mb-3 p-4 bg-white rounded shadow-sm flex-fill">
                  <div className="d-flex justify-content-between align-items-start h-100">
                    <div>
                      <h4 className="fw-bold mb-3" style={{ fontSize: '18px', color: '#1e293b' }}>Our Location</h4>
                      <p className="mb-2" style={{ fontSize: '14px', color: '#64748b' }}>
                        85 Preston, Inglewood,
                      </p>
                      <p className="mb-0" style={{ fontSize: '14px', color: '#64748b' }}>
                        Maine 98380, Hoofddorp Noord- 2132
                      </p>
                    </div>
                    <div className="contact-icon-wrapper">
                      <div className="contact-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center" 
                           style={{ width: '50px', height: '50px' }}>
                        <i className="fas fa-map-marker-alt" style={{ fontSize: '20px' }}></i>
                      </div>
                      <div className="contact-arrow mt-2 text-center">
                        <div className="arrow-circle bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" 
                             style={{ width: '30px', height: '30px', fontSize: '12px' }}>
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call Us Card */}
                <div className="contact-card mb-3 p-4 bg-white rounded shadow-sm flex-fill">
                  <div className="d-flex justify-content-between align-items-start h-100">
                    <div>
                      <h4 className="fw-bold mb-3" style={{ fontSize: '18px', color: '#1e293b' }}>Call US 24/7</h4>
                      <p className="mb-2" style={{ fontSize: '14px', color: '#64748b' }}>
                        +1 716-289-7898
                      </p>
                      <p className="mb-0" style={{ fontSize: '14px', color: '#64748b' }}>
                        +1 000-000-0000
                      </p>
                    </div>
                    <div className="contact-icon-wrapper">
                      <div className="contact-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center" 
                           style={{ width: '50px', height: '50px' }}>
                        <i className="fas fa-phone" style={{ fontSize: '20px' }}></i>
                      </div>
                      <div className="contact-arrow mt-2 text-center">
                        <div className="arrow-circle bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" 
                             style={{ width: '30px', height: '30px', fontSize: '12px' }}>
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Days Card */}
                <div className="contact-card p-4 bg-white rounded shadow-sm flex-fill">
                  <div className="d-flex justify-content-between align-items-start h-100">
                    <div>
                      <h4 className="fw-bold mb-3" style={{ fontSize: '18px', color: '#1e293b' }}>Working Days</h4>
                      <p className="mb-2" style={{ fontSize: '14px', color: '#64748b' }}>
                        Mon to Sat - 09:00am To 06:00pm
                      </p>
                      <p className="mb-0" style={{ fontSize: '14px', color: '#64748b' }}>
                        Sunday - Closed
                      </p>
                    </div>
                    <div className="contact-icon-wrapper">
                      <div className="contact-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center" 
                           style={{ width: '50px', height: '50px' }}>
                        <i className="fas fa-clock" style={{ fontSize: '20px' }}></i>
                      </div>
                      <div className="contact-arrow mt-2 text-center">
                        <div className="arrow-circle bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto" 
                             style={{ width: '30px', height: '30px', fontSize: '12px' }}>
                          →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form and Map Section */}
            <div className="col-lg-8">
              <div className="row">
                {/* Contact Form */}
                <div className="col-12">
                  <div className="contact-form-section bg-light p-5 rounded mb-4">
                    <div className="mb-4">
                      <h6 className="text-success mb-2" style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>
                        📧 CONTACT US
                      </h6>
                      <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1e293b' }}>
                        Dedicated to Helping You Every Step of the Way
                      </h2>
                      <p className="text-muted mb-4" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                        With our carefully selected staff, you can trust that your home will always receive top-quality service.
                      </p>
                    </div>

                    <form className="contact-form" method="post">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Your Name" 
                            name="name" 
                            style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                            required 
                          />
                        </div>
                        <div className="col-md-6">
                          <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Your Email Address" 
                            name="email" 
                            style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                            required 
                          />
                        </div>
                        <div className="col-md-6">
                          <input 
                            type="tel" 
                            className="form-control" 
                            placeholder="Your Phone" 
                            name="phone" 
                            style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                            required 
                          />
                        </div>
                        <div className="col-md-6">
                          <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Subject" 
                            name="subject" 
                            style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                            required 
                          />
                        </div>
                        <div className="col-12">
                          <textarea 
                            name="message" 
                            rows={4} 
                            className="form-control" 
                            placeholder="Message" 
                            style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button 
                            type="submit" 
                            className="btn btn-success px-4 py-3"
                            style={{ fontSize: '16px', fontWeight: '600', borderRadius: '8px' }}
                          >
                            Get Cost Estimate →
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Integrated Map */}
                <div className="col-12">
                  <div className="map-section rounded overflow-hidden" style={{ height: '350px' }}>
                    <iframe 
                      src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" 
                      title="London Eye, London, United Kingdom" 
                      aria-label="London Eye, London, United Kingdom"
                      style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
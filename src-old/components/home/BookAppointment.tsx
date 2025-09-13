
const BookAppointment = () => {
  return (
    <section>
      <div className='container'>
        <div className='appointment-two-bg'>
          <div className='row'>
            <div className='col-md-12 col-xl-8'>
              <div className='pbmit-heading-subheading white-text mb-3 animation-style4'>
                <h2 className='pbmit-title'>
                  First Time Customers Get a Free Heating & Cooling Inspection
                </h2>
              </div>
              <a
                className='pbmit-btn pbmit-btn-hover-white'
                href='/contact-us'
              >
                <span className='pbmit-button-content-wrapper'>
                  <span className='pbmit-button-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22.76'
                      height='22.76'
                      viewBox='0 0 22.76 22.76'
                    >
                      <title>black-arrow</title>
                      <path
                        d='M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1'
                        transform='translate(-0.29 -0.29)'
                        fill='none'
                        stroke='#000'
                        strokeWidth='2'
                      ></path>
                      <path
                        d='M22.34,1a14.67,14.67,0,0,0,0,20.75'
                        transform='translate(-0.29 -0.29)'
                        fill='none'
                        stroke='#000'
                        strokeWidth='2'
                      ></path>
                      <path
                        d='M22.34,1,1,22.34'
                        transform='translate(-0.29 -0.29)'
                        fill='none'
                        stroke='#000'
                        strokeWidth='2'
                      ></path>
                    </svg>
                  </span>
                  <span className='pbmit-button-text'>Book Appointment</span>
                </span>
              </a>
            </div>
            <div className='col-md-12 col-xl-4'>
              <div className='ihbox-style-area'>
                <div className='pbmit-ihbox-style-7'>
                  <div className='pbmit-ihbox-box'>
                    <div className='pbmit-icon-wrapper'>
                      <div className='pbmit-ihbox-icon'>
                        <div className='pbmit-ihbox-icon-wrapper pbmit-icon-type-icon'>
                          <i className='pbmit-xclean-icon pbmit-xclean-icon-telephone-call'></i>
                        </div>
                      </div>
                      <h2 className='pbmit-element-title'>
                        <a href='tel:+125-8845-5421'>
                          <span className='pbmit-button-text'>
                            +125-8845-5421
                          </span>
                        </a>
                      </h2>
                    </div>
                    <div className='pbmit-content-wrap'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Services Section */}
      <div className='container mt-5'>
        <div className='row'>
          {/* Left side - Two Images (Much Smaller) */}
          <div className='col-md-5'>
            <div className='service-images-wrapper'>
              {/* Top Image - AC Unit */}

              <img
                src='/assets/images/ac-illustration.svg'
                alt='AC Unit'
                className='img-fluid rounded'
              />
            </div>
          </div>

          {/* Right side - Service Boxes (Much Larger) */}
          <div className='col-md-7'>
            <div className='services-list px-4'>
              {/* Service Box 1 */}
              <div className='service-box d-flex align-items-start  mb-5'>
                <div className='service-icon me-4'>
                  <div
                    className='icon-circle bg-light border rounded d-flex align-items-center justify-content-center'
                    style={{
                      width: '70px',
                      height: '70px',
                      minWidth: '70px',
                      borderColor: '#e0e0e0',
                    }}
                  >
                    <img
                      src='/assets/images/Home/FurnaceorAcIssue.svg'
                      alt='HVAC'
                      style={{ width: '40px', height: '40px' }}
                    />
                  </div>
                </div>
                <div className='service-content'>
                  <h4
                    className='fw-bold mb-3'
                    style={{ color: '#333', fontSize: '24px' }}
                  >
                    Furnace Or AC Issue?
                  </h4>
                  <p
                    className='mb-0'
                    style={{
                      fontSize: '16px',
                      color: '#666',
                      lineHeight: '1.7',
                    }}
                  >
                    Don't let the big box companies fool you, we can honestly
                    work and troubleshoot right away 70% of the time without
                    breaking your system.
                  </p>
                </div>
              </div>

              {/* Service Box 2 */}
              <div className='service-box d-flex align-items-start mb-5'>
                <div className='service-icon me-4'>
                  <div
                    className='icon-circle bg-light border rounded d-flex align-items-center justify-content-center'
                    style={{
                      width: '70px',
                      height: '70px',
                      minWidth: '70px',
                      borderColor: '#e0e0e0',
                    }}
                  >
                    <img
                      src='/assets/images/Home/FurnaceBoilerACInstallations.svg'
                      alt='HVAC'
                      style={{ width: '40px', height: '40px' }}
                    />
                  </div>
                </div>
                <div className='service-content'>
                  <h4
                    className='fw-bold mb-3'
                    style={{ color: '#333', fontSize: '24px' }}
                  >
                    Furnace, Boiler, AC Installations
                  </h4>
                  <p
                    className='mb-0'
                    style={{
                      fontSize: '16px',
                      color: '#666',
                      lineHeight: '1.7',
                    }}
                  >
                    We install top quality energy efficient units from trusted
                    brands. Not only do we offer planning for staying cost
                    effective.
                  </p>
                </div>
              </div>

              {/* Service Box 3 */}
              <div className='service-box d-flex align-items-start mb-5'>
                <div className='service-icon me-4'>
                  <div
                    className='icon-circle bg-light border rounded d-flex align-items-center justify-content-center'
                    style={{
                      width: '70px',
                      height: '70px',
                      minWidth: '70px',
                      borderColor: '#e0e0e0',
                    }}
                  >
                    <img
                      src='/assets/images/Home/Maintenance.svg'
                      alt='HVAC'
                      style={{ width: '40px', height: '40px' }}
                    />
                  </div>
                </div>
                <div className='service-content'>
                  <h4
                    className='fw-bold mb-3'
                    style={{ color: '#333', fontSize: '24px' }}
                  >
                    Maintenance
                  </h4>
                  <p
                    className='mb-0'
                    style={{
                      fontSize: '16px',
                      color: '#666',
                      lineHeight: '1.7',
                    }}
                  >
                    Keep up your system and get the most out of it. We offer
                    affordable air conditioning and furnace maintenance
                    services.
                  </p>
                </div>
              </div>

              {/* Contact Section - Matching First Image */}
              <div className='contact-section mt-5'>
                <div className='contact-buttons'>
                  <a
                    href='tel:716-289-7898'
                    className='btn btn-outline-secondary me-4 mb-3'
                    style={{
                      fontSize: '16px',
                      padding: '15px 30px',
                      borderRadius: '30px',
                      color: '#2A358E',
                      borderColor: '#2A358E',
                    }}
                  >
                    Call or Text 716-289-7898
                  </a>
                  <a
                    href='mailto:cozybrosheating@gmail.com'
                    className='btn btn-outline-success mb-3'
                    style={{
                      fontSize: '16px',
                      padding: '15px 30px',
                      borderRadius: '30px',
                    }}
                  >
                    cozybrosheating@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;

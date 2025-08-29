
const Footer = () => {
  return (
    <footer className='site-footer pbmit-bg-color-blackish'>
      <div className='pbmit-footer-big-area'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-12 col-xl-4'>
              <div className='pbmit-footer-logo'>
                <img src='/assets/images/cozy-bros-white-logo.svg' alt='' />
              </div>
            </div>
            <div className='col-md-12 col-xl-5'>
              <form>
                <div className='pbmit-footer-newsletter'>
                  <h3 className='pbmit-footer-news-title' style={{fontWeight: 'normal', fontSize: '24px', color: '#ffffff', lineHeight: '1.3'}}>
                    Book Your Free Consultation & Estimate for Furnace, AC, or
                    Plumbing Installs{' '}
                  </h3>
                  {/* <div className="pbmit-news-wrap">
										<input type="email" className="form-control" name="EMAIL" placeholder="Enter Your Email Address"/>
										<button className="pbmit-btn pbmit-btn-global">
											<span className="pbmit-button-content-wrapper">
												<span className="pbmit-button-icon">
													<svg xmlns="http://www.w3.org/2000/svg" width="22.76" height="22.76" viewBox="0 0 22.76 22.76">
														<title>black-arrow</title>
														<path d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" stroke-width="2"></path>
														<path d="M22.34,1a14.67,14.67,0,0,0,0,20.75" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" stroke-width="2"></path>
														<path d="M22.34,1,1,22.34" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" stroke-width="2"></path>
													</svg>
												</span>
												<span className="pbmit-button-text">Subscribe Now</span>
											</span>
										</button>
									</div> */}
                </div>
              </form>
            </div>
            <div className='col-md-12 col-xl-3'>
              <div className='pbmit-header-call-us-area' style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <div className='pbmit-header-call-us-icon' style={{width: '60px', height: '60px', backgroundColor: '#00b894', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                  <img src='/assets/images/Home/Layer.svg' alt='Call Us' style={{width: '30px', height: '30px'}} />
                </div>
                <div className='pbmit-header-call-us-text'>
                  <span className='pbmit-header-call-us-label' style={{fontSize: '14px', color: '#ffffff', opacity: '0.8'}}>Call Us Now</span>
                  <div className='pbmit-header-call-us-number' style={{fontSize: '18px', fontWeight: 'bold', color: '#ffffff', marginTop: '2px'}}>
                    +1 716-289-5986
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pbmit-footer-widget-area'>
        <div className='container'>
          <div className='row'>
            <div className='pbmit-footer-widget-col-1 col-md-3'>
              <div className='widget'>
                <div className='textwidget'>
                  {/* <ul className="pbmit-social-links">
										<li className="pbmit-social-li pbmit-social-facebook">
											<a title="Facebook" href="#" target="_blank" rel="noopener">
												<span><i className="pbmit-base-icon-facebook-f"></i></span>
											</a>
										</li>
										<li className="pbmit-social-li pbmit-social-twitter">
											<a title="Twitter" href="#" target="_blank" rel="noopener">
												<span><i className="pbmit-base-icon-twitter-2"></i></span>
											</a>
										</li>
										<li className="pbmit-social-li pbmit-social-instagram">
											<a title="Instagram" href="#" target="_blank" rel="noopener">
												<span><i className="pbmit-base-icon-instagram"></i></span>
											</a>
										</li>
										<li className="pbmit-social-li pbmit-social-youtube">
											<a title="Youtube" href="#" target="_blank" rel="noopener">
												<span><i className="pbmit-base-icon-youtube-play"></i></span>
											</a>
										</li>
									</ul> */}
                  <p>
                    In today's economic climate, affordable pricing is key!
                    <br></br>We got you. Honesty and integrity go a long way in
                    this business and we are dedicated to earning your trust and
                    giving you and your family the best customer experience
                    possible
                  </p>
                </div>
              </div>
            </div>
            <div className='pbmit-footer-widget-col-2 col-md-3'>
              <div className='widget pbmit-two-column-menu'>
                <h2 className='widget-title' style={{color: '#00b894', fontSize: '18px', marginBottom: '20px'}}>Useful Link</h2>
                <div className='textwidget'>
                  <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                    <li style={{marginBottom: '8px'}}>
                      <a href='/' style={{color: '#ffffff', textDecoration: 'none', fontSize: '14px'}}>Home</a>
                    </li>
                    <li style={{marginBottom: '8px'}}>
                      <a href='about-us' style={{color: '#ffffff', textDecoration: 'none', fontSize: '14px'}}>Pricing</a>
                    </li>
                    <li style={{marginBottom: '8px'}}>
                      <a href='contact-us' style={{color: '#ffffff', textDecoration: 'none', fontSize: '14px'}}>About</a>
                    </li>
                    <li style={{marginBottom: '8px'}}>
                      <a href='contact-us' style={{color: '#ffffff', textDecoration: 'none', fontSize: '14px'}}>Blog</a>
                    </li>
                    <li style={{marginBottom: '8px'}}>
                      <a href='contact-us' style={{color: '#ffffff', textDecoration: 'none', fontSize: '14px'}}>Services</a>
                    </li>
                    <li style={{marginBottom: '8px'}}>
                      <a href='contact-us' style={{color: '#ffffff', textDecoration: 'none', fontSize: '14px'}}>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='pbmit-footer-widget-col-3 col-md-3'>
              {/* Empty column for spacing */}
            </div>
            {/* <div className="pbmit-footer-widget-col-3 col-md-3">
							<div className="widget widget_text">
								<h2 className="widget-title">Working Time</h2>
								<div className="pbmit-timelist-wrapper">
									<ul className="pbmit-timelist-list">
										<li>
											<span className="pbmit-timelist-time">Mon - Fri: 9.00am - 5.00pm</span>
										</li>
										<li>
											<span className="pbmit-timelist-time">Saturday: 10.00am - 6.00pm</span>
										</li>
										<li>
											<span className="pbmit-timelist-time">Sunday Closed</span>
										</li>
									</ul>
								</div>
							</div>
						</div> */}
            <div className='pbmit-footer-widget-col-4 col-md-3'>
              <aside className='widget'>
                <h2 className='widget-title' style={{color: '#00b894', fontSize: '18px', marginBottom: '20px'}}>Say Hello</h2>
                <div className='pbmit-contact-widget-lines'>
                  <div className='pbmit-contact-widget-line pbmit-contact-widget-phone' style={{color: '#ffffff', fontSize: '16px', marginBottom: '10px'}}>
                    716-289-5986
                  </div>
                  <div className='pbmit-contact-widget-line pbmit-contact-widget-email' style={{color: '#ffffff', fontSize: '14px'}}>
                    <a
                      href='mailto:cozybrosheatingandcooling@gmail.com'
                      style={{color: '#ffffff', textDecoration: 'none'}}
                    >
                      cozybrosheatingandcooling@gmail.com
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div className='pbmit-footer-text-area'>
        <div className='container'>
          <div className='pbmit-footer-text-inner'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='pbmit-footer-copyright-text-area'>
                  {' '}
                  Copyright ©2025 Cozy Bros Heating and Cooling | All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
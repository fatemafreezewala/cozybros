import React from 'react'

export default function Header() {
  return (
   	<header className="site-header header-style-1">
			<div className="site-header-menu">
				<div className="pbmit-main-header-area pbmit-bg-color-white">
					<div className="container-fluid">
						<div className="pbmit-header-content d-flex justify-content-between align-items-center">
							<div className="pbmit-logo-menuarea d-flex justify-content-between align-items-center">
								<div className="site-branding">
									<h1 className="site-title">
										<a href="index-2.html">
											<img className="logo-img" src="/assets/images/cozybroslogo.svg" alt="Cozy Bros Logo"   style={{ width: "100px", height: "auto" }}/>
										</a>
									</h1>
								</div>
								<div className="site-navigation">
									<nav className="main-menu navbar-expand-xl navbar-light">
										<div className="navbar-header">
											 {/* Toggle Button */}
											<button className="navbar-toggler" type="button">
												<i className="pbmit-base-icon-menu-1"></i>
											</button>
										</div>
										<div className="pbmit-mobile-menu-bg"></div>
										<div className="collapse navbar-collapse clearfix show" id="pbmit-menu">
											<div className="pbmit-menu-wrap">
												<span className="closepanel">
													<svg className="qodef-svg--close qodef-m" xmlns="http://www.w3.org/2000/svg" width="20.163" height="20.163" viewBox="0 0 26.163 26.163">
														<rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect>
														<rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect>
													</svg>
												</span>
												<ul className="navigation clearfix" >
													<li className="dropdown active">
														<a href="index-2.html">Home</a>
														<ul>
															<li className="active"><a href="index-2.html">Homepage 01</a></li>
															<li><a href="homepage-2.html">Homepage 02</a></li>
															<li><a href="homepage-3.html">Homepage 03</a></li>
															<li><a href="homepage-4.html">Homepage 04</a></li>
															<li><a href="homepage-5.html">Homepage 05</a></li>
														</ul>
													</li>
													<li className="dropdown">
														<a href="#">Pages</a>
														<ul>
															<li><a href="about-us.html">About Us</a></li>
															<li><a href="our-history.html">Our History</a></li>
															<li><a href="our-team.html">Our Team</a></li>
															<li><a href="team-single-detail.html">Team Single Details</a></li>
															<li><a href="faq.html">Faq</a></li>
														</ul>
													</li>
													<li className="dropdown">
														<a href="#">Services</a>
														<ul>
															<li><a href="services.html">Services</a></li>
															<li><a href="service-details.html">Service Detail</a></li>
														</ul>
													</li>
													<li className="dropdown">
														<a href="#">Portfolio</a>
														<ul>
															<li className="dropdown">
																<a href="#">Masonry View</a>
																<ul>
																	<li><a href="portfolio-m-grid-col-2.html">Grid Col 2</a></li>
																	<li><a href="portfolio-m-grid-col-3.html">Grid Col 3</a></li>
																	<li><a href="portfolio-m-grid-col-4.html">Grid Col 4</a></li>
																	<li><a href="portfolio-m-grid-wide.html">Grid Wide</a></li>
																</ul>
															</li>
															<li className="dropdown">
																<a href="#">Grid View</a>
																<ul>
																	<li><a href="portfolio-grid-col-2.html">Grid Col 2</a></li>
																	<li><a href="portfolio-grid-col-3.html">Grid Col 3</a></li>
																	<li><a href="portfolio-grid-col-4.html">Grid Col 4</a></li>
																	<li><a href="portfolio-grid-no-gap.html">Grid No Gap</a></li>
																</ul>
															</li>
															<li className="dropdown">
																<a href="#">Sortable View</a>
																<ul>
																	<li><a href="portfolio-sortable-grid-col-2.html">Grid Col 2</a></li>
																	<li><a href="portfolio-sortable-grid-col-3.html">Grid Col 3</a></li>
																	<li><a href="portfolio-sortable-grid-col-4.html">Grid Col 4</a></li>
																</ul>
															</li>
															<li className="dropdown">
																<a href="#">Portfolio Single</a>
																<ul>
																	<li><a href="portfolio-single-style-01.html">Portfolio Single Style 1</a></li>
																	<li><a href="portfolio-single-style-02.html">Portfolio Single Style 2</a></li>
																</ul>
															</li>
														</ul>
													</li>
													<li className="dropdown">
														<a href="#">Blog</a>
														<ul>
															<li className="dropdown">
																<a href="#">Blog Masonry View</a>
																<ul>
																	<li><a href="blog-m-grid-col-2.html">Grid Col 2</a></li>
																	<li><a href="blog-m-grid-col-3.html">Grid Col 3</a></li>
																	<li><a href="blog-m-grid-col-4.html">Grid Col 4</a></li>
																	<li><a href="blog-masonry-wide.html">Masonry Wide</a></li>
																</ul>
															</li>
															<li className="dropdown">
																<a href="#">Blog Grid View</a>
																<ul>
																	<li><a href="blog-grid-col-3.html">Grid Col 3</a></li>
																	<li><a href="blog-grid-col-4.html">Grid Col 4</a></li>
																	<li><a href="blog-sortable-grid-view.html">Sortable Grid View</a></li>
																</ul>
															</li>
															<li><a href="blog-classic.html">Blog Classic</a></li>
															<li><a href="blog-details.html">Blog Single Detail</a></li>
														</ul>
													</li>
													<li><a href="contact-us.html">Contact Us</a></li>
												</ul>
											</div>
										</div>
									</nav>
								</div>
							</div>
							<div className="pbmit-right-box d-flex align-items-center">
								<div className="pbmit-button-box">
									<div className="pbmit-header-button">
										<a href="tel:+1(212)255-511">
											<span className="pbmit-header-button-text-1">+1(212)255-511</span>
										</a>
									</div>
								</div>
								<div className="pbmit-header-search-btn">
									<a href="#" title="Search">
										<i className="pbmit-base-icon-search-1"></i>
									</a>
								</div>
								<div className="pbmit-button-box-second">
									<a className="pbmit-btn" href="contact-us.html">
										<span className="pbmit-button-content-wrapper">
											<span className="pbmit-button-icon">
												<svg xmlns="http://www.w3.org/2000/svg" width="22.76" height="22.76" viewBox="0 0 22.76 22.76">
													<title>black-arrow</title>
													<path d="M22.34,1A14.67,14.67,0,0,1,12,5.3,14.6,14.6,0,0,1,6.08,4.06,14.68,14.68,0,0,1,1.59,1" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" stroke-width="2"></path>
													<path d="M22.34,1a14.67,14.67,0,0,0,0,20.75" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" stroke-width="2"></path>
													<path d="M22.34,1,1,22.34" transform="translate(-0.29 -0.29)" fill="none" stroke="#000" stroke-width="2"></path>
												</svg>
											</span>
											<span className="pbmit-button-text">Get a Quote</span>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</header>
  )
}


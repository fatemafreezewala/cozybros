import { useState } from "react";
import Quote from "./Quote";

export default function PagesHeader({ title }: any) {
  const [show, setShow] = useState(false);
  const [mobileHeader, setMobileHeader] = useState(false)

  return (
    <header className={`site-header header-style-1 ${mobileHeader ? 'active' : ''}`}>
      <div className='site-header-menu'>
        <div className='pbmit-main-header-area pbmit-bg-color-white'>
          <div className='container-fluid'>
            <div className='pbmit-header-content d-flex justify-content-between align-items-center'>
              <div className='pbmit-logo-menuarea d-flex justify-content-between align-items-center'>
                <div className='site-branding'>
                  <h1 className='site-title'>
                    <a href='/'>
                      <img
                        className='logo-img'
                        src='assets/images/cozy-bros-logo.svg'
                        alt='CozyBros'
                      />
                    </a>
                  </h1>
                </div>
                <div className='site-navigation'>
                  <nav className='main-menu navbar-expand-xl navbar-light'>
                    <div className='navbar-header'>
                      <button className='navbar-toggler' onClick={() => {
                        setMobileHeader(true)
                      }} type='button'>
                        <i className='pbmit-base-icon-menu-1'></i>
                      </button>
                    </div>
                    <div className='pbmit-mobile-menu-bg'></div>
                    <div
                      className='collapse navbar-collapse clearfix show'
                      id='pbmit-menu'
                    >
                      <div className='pbmit-menu-wrap'>
                        <span className='closepanel' onClick={() => {
                          setMobileHeader(false)
                        }}>
                          <svg
                            className='qodef-svg--close qodef-m'
                            xmlns='http://www.w3.org/2000/svg'
                            width='20.163'
                            height='20.163'
                            viewBox='0 0 26.163 26.163'
                          >
                            <rect
                              width='36'
                              height='1'
                              transform='translate(0.707) rotate(45)'
                            ></rect>
                            <rect
                              width='36'
                              height='1'
                              transform='translate(0 25.456) rotate(-45)'
                            ></rect>
                          </svg>
                        </span>
                        <ul className='navigation clearfix'>
                          <li className="dropdown">
                            <a onClick={() => {
                              setMobileHeader(false)
                            }} href='/'>Home</a>
                          </li>
                          <li className="dropdown">
                            <a onClick={() => {
                              setMobileHeader(false)
                            }} href='/about-us'>About Us</a>
                          </li>
                          <li className="dropdown">
                            <a onClick={() => {
                              setMobileHeader(false)
                            }} href='/services'>Services</a>
                          </li>
                          <li className="dropdown">
                            <a onClick={() => {
                              setMobileHeader(false)
                            }} href='/contact-us'>Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div className='pbmit-right-box d-flex align-items-center gap-5'>
                <div className='pbmit-button-box'>
                  <div className='pbmit-header-button'>
                    <a href='tel:+1 716-289-5986'>
                      <span className='pbmit-header-button-text-1'>
                        +1 716-289-5986
                      </span>
                    </a>
                  </div>
                </div>

                <div className='pbmit-button-box-second'>
                  <button className='pbmit-btn' onClick={() => {
                    setShow(true)
                  }}>
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
                            stroke-width='2'
                          ></path>
                          <path
                            d='M22.34,1a14.67,14.67,0,0,0,0,20.75'
                            transform='translate(-0.29 -0.29)'
                            fill='none'
                            stroke='#000'
                            stroke-width='2'
                          ></path>
                          <path
                            d='M22.34,1,1,22.34'
                            transform='translate(-0.29 -0.29)'
                            fill='none'
                            stroke='#000'
                            stroke-width='2'
                          ></path>
                        </svg>
                      </span>
                      <span className='pbmit-button-text'>Get a Quote</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pbmit-slider-area pbmit-slider-one'>
        <div className="pbmit-title-bar-wrapper">
          <div className="container">
            <div className="pbmit-title-bar-content">
              <div className="pbmit-title-bar-content-inner">
                <div className="pbmit-tbar">
                  <div className="pbmit-tbar-inner container">
                    <h1 className="pbmit-tbar-title text-white text-center">{title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Quote show={show} setShow={setShow}></Quote>
    </header>
  );
}
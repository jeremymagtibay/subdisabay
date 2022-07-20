import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './howtodrive.css'

const Howtodrive = (props) => {
  return (
    <div className="howtodrive-container">
      <Helmet>
        <title>howtodrive - Subdi-Sabay(Final)</title>
        <meta property="og:title" content="howtodrive - Subdi-Sabay(Final)" />
      </Helmet>
      <div className="navbar-container">
        <div className="howtodrive-max-width max-width">
          <div className="howtodrive-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="howtodrive-image"
            />
            <Link to="/" className="howtodrive-navlink brand-Name">
              <span className="howtodrive-text">subdi-saKay</span>
            </Link>
          </div>
          <div className="howtodrive-links">
            <Link to="/map" className="howtodrive-navlink1 navbar-Link">
              Map Routing
            </Link>
            <button className="button-secondary button">Login</button>
            <Link
              to="/download"
              className="howtodrive-navlink2 button button-primary"
            >
              Download
            </Link>
          </div>
          <div className="howtodrive-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="howtodrive-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <span className="howtodrive-text01">
            <span>Exclusively for Tierra Benita Subdivision</span>
          </span>
        </div>
      </div>
      <div className="howtodrive-hero hero-container section-container">
        <h1 className="howtodrive-title">Offer a ride.</h1>
        <div className="howtodrive-number">
          <span className="howtodrive-text03">1</span>
        </div>
        <h1 className="howtodrive-title1">
          <span>Book a ride</span>
        </h1>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-bkca-400w.png"
          className="howtodrive-pasted-image"
        />
        <div className="howtodrive-container1">
          <span className="howtodrive-text05">
            HOW TO DRIVE
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </div>
      <div className="howtodrive-section section-container">
        <div className="howtodrive-max-width1 max-width">
          <div className="howtodrive-image1"></div>
        </div>
        <div className="howtodrive-number1">
          <span className="howtodrive-text06">2</span>
        </div>
        <h1 className="howtodrive-text07">Waiting for available rides.</h1>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-sl0x-400w.png"
          className="howtodrive-pasted-image1"
        />
      </div>
      <div className="howtodrive-hero1 hero-container section-container">
        <h1 className="howtodrive-title2">Accepting rides.</h1>
        <h1 className="howtodrive-title3">
          <span>Book a ride</span>
        </h1>
        <div className="howtodrive-number2">
          <span className="howtodrive-text09">3</span>
        </div>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-c9y-400w.png"
          className="howtodrive-pasted-image2"
        />
      </div>
      <div className="howtodrive-section1 section-container">
        <div className="howtodrive-max-width2 max-width">
          <div className="howtodrive-image2"></div>
        </div>
        <div className="howtodrive-number3">
          <span className="howtodrive-text10">4</span>
        </div>
        <h1 className="howtodrive-text11">Accepted ride.</h1>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-8k73-400w.png"
          className="howtodrive-pasted-image3"
        />
      </div>
      <div className="howtodrive-hero2 hero-container section-container">
        <h1 className="howtodrive-title4">Pick-up successfully.</h1>
        <h1 className="howtodrive-title5">
          <span>Book a ride</span>
        </h1>
        <div className="howtodrive-number4">
          <span className="howtodrive-text13">5</span>
        </div>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-x2e-400w.png"
          className="howtodrive-pasted-image4"
        />
      </div>
      <footer className="howtodrive-footer">
        <div className="howtodrive-links-container">
          <div className="howtodrive-container2">
            <div className="footer-column">
              <span className="howtodrive-text14">Product</span>
              <span className="howtodrive-text15">Features</span>
            </div>
            <div className="footer-column">
              <span className="howtodrive-text16">App</span>
              <span className="howtodrive-text17">Download iOS app</span>
              <span className="howtodrive-text18">Download Android app</span>
            </div>
            <div className="footer-column">
              <span className="howtodrive-text19">About us</span>
              <span className="howtodrive-text20">Careers</span>
              <Link to="/contact" className="howtodrive-navlink3">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Howtodrive

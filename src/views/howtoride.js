import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './howtoride.css'

const Howtoride = (props) => {
  return (
    <div className="howtoride-container">
      <Helmet>
        <title>howtoride - Subdi-Sabay(Final)</title>
        <meta property="og:title" content="howtoride - Subdi-Sabay(Final)" />
      </Helmet>
      <div className="navbar-container">
        <div className="howtoride-max-width max-width">
          <div className="howtoride-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="howtoride-image"
            />
            <Link to="/" className="howtoride-navlink brand-Name">
              <span className="howtoride-text">subdi-saKay</span>
            </Link>
          </div>
          <div className="howtoride-links">
            <Link to="/map" className="howtoride-navlink1 navbar-Link">
              Map Routing
            </Link>
            <button className="button-secondary button">Login</button>
            <Link
              to="/download"
              className="howtoride-navlink2 button button-primary"
            >
              Download
            </Link>
          </div>
          <div className="howtoride-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="howtoride-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <span className="howtoride-text01">
            <span>Exclusively for Tierra Benita Subdivision</span>
          </span>
        </div>
      </div>
      <div className="howtoride-hero hero-container section-container">
        <h1 className="howtoride-title">
          <span>Book a ride.</span>
        </h1>
        <div className="howtoride-number">
          <span className="howtoride-text04">1</span>
        </div>
        <h1 className="howtoride-title1">
          <span>Book a ride</span>
        </h1>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-66y-400w.png"
          className="howtoride-pasted-image"
        />
        <div className="howtoride-container1">
          <span className="howtoride-text06">
            HOW TO RIDE
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </div>
      <div className="howtoride-section section-container">
        <div className="howtoride-number1">
          <span className="howtoride-text07">2</span>
        </div>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-by9n-400w.png"
          className="howtoride-pasted-image1"
        />
        <h1 className="howtoride-title2"></h1>
        <h1 className="howtoride-text08">
          Choose whether to ride solo or with someone
        </h1>
      </div>
      <div className="howtoride-hero1 hero-container section-container">
        <h1 className="howtoride-title3">
          <span> Select rides.</span>
        </h1>
        <div className="howtoride-number2">
          <span className="howtoride-text10">3</span>
        </div>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-zf9-400w.png"
          className="howtoride-pasted-image2"
        />
        <h1 className="howtoride-title4">
          <span>Book a ride</span>
        </h1>
      </div>
      <div className="howtoride-section1 section-container">
        <div className="howtoride-number3">
          <span className="howtoride-text12">4</span>
        </div>
        <h1 className="howtoride-text13">Driver is on the way.</h1>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-uulc-400w.png"
          className="howtoride-pasted-image3"
        />
      </div>
      <div className="howtoride-hero2 hero-container section-container">
        <h1 className="howtoride-title5">
          <span> Drop-off succesful.</span>
        </h1>
        <div className="howtoride-number4">
          <span className="howtoride-text15">5</span>
        </div>
        <h1 className="howtoride-title6">
          <span>Book a ride</span>
        </h1>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-05c-400w.png"
          className="howtoride-pasted-image4"
        />
      </div>
      <footer className="howtoride-footer">
        <div className="howtoride-links-container">
          <div className="howtoride-container2">
            <div className="footer-column">
              <span className="howtoride-text17">Product</span>
              <span className="howtoride-text18">Features</span>
            </div>
            <div className="footer-column">
              <span className="howtoride-text19">App</span>
              <span className="howtoride-text20">Download iOS app</span>
              <span className="howtoride-text21">Download Android app</span>
            </div>
            <div className="footer-column">
              <span className="howtoride-text22">About us</span>
              <span className="howtoride-text23">Careers</span>
              <Link to="/contact" className="howtoride-navlink3">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Howtoride

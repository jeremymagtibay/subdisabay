import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Subdi-Sabay(Final)</title>
        <meta property="og:title" content="Contact - Subdi-Sabay(Final)" />
      </Helmet>
      <div className="navbar-container">
        <div className="contact-max-width max-width">
          <div className="contact-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="contact-image"
            />
            <Link to="/" className="contact-navlink brand-Name">
              <span className="contact-text">subdi-saKay</span>
            </Link>
          </div>
          <div className="contact-links">
            <Link to="/map" className="contact-navlink1 navbar-Link">
              Map Routing
            </Link>
            <button className="button-secondary button">Login</button>
            <Link
              to="/download"
              className="contact-navlink2 button button-primary"
            >
              Download
            </Link>
          </div>
          <div className="contact-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contact-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <span className="contact-text01">
            <span>Exclusively for Tierra Benita Subdivision</span>
          </span>
        </div>
      </div>
      <div className="contact-hero">
        <div className="contact-container1">
          <div className="contact-container2">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="contact-image1"
            />
            <h1 className="contact-text03">SUBDI-SAKAY</h1>
          </div>
          <span className="contact-text04">
            Want to know more about us!? we are happy to introduce our crew to
            you guys! click contact us to view more.
          </span>
          <span className="contact-text05">
            <span></span>
            <span></span>
          </span>
          <Link to="/contactus" className="contact-navlink3 button">
            <span>
              <span>Contact us</span>
              <span></span>
            </span>
          </Link>
        </div>
        <img
          alt="image"
          src="/playground_assets/287288435_409853610871317_3153685094486887461_n-1500h.jpg"
          className="contact-image2"
        />
        <img
          alt="image"
          src="/playground_assets/union-400h.png"
          className="contact-graphic-top"
        />
        <img
          alt="image"
          src="/playground_assets/group%2018-1500w.png"
          className="contact-image3"
        />
      </div>
      <footer className="contact-footer">
        <div className="contact-links-container">
          <div className="contact-container3">
            <div className="footer-column">
              <span className="contact-text11">Product</span>
              <span className="contact-text12">Features</span>
            </div>
            <div className="footer-column">
              <span className="contact-text13">App</span>
              <span className="contact-text14">Download iOS app</span>
              <span className="contact-text15">Download Android app</span>
            </div>
            <div className="footer-column">
              <span className="contact-text16">About us</span>
              <span className="contact-text17">Careers</span>
              <Link to="/contact" className="contact-navlink4">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact

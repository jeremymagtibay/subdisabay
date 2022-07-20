import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import GraphicTop from '../components/graphic-top'
import './download.css'

const Download = (props) => {
  return (
    <div className="download-container">
      <Helmet>
        <title>download - Subdi-Sabay(Final)</title>
        <meta property="og:title" content="download - Subdi-Sabay(Final)" />
      </Helmet>
      <div className="navbar-container">
        <div className="download-max-width max-width">
          <div className="download-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="download-image"
            />
            <Link to="/" className="download-navlink brand-Name">
              <span className="download-text">subdi-saKay</span>
            </Link>
          </div>
          <div className="download-links">
            <Link to="/map" className="download-navlink1 navbar-Link">
              Map Routing
            </Link>
            <button className="button-secondary button">Login</button>
            <Link
              to="/download"
              className="download-navlink2 button button-primary"
            >
              Download
            </Link>
          </div>
          <div className="download-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="download-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <span className="download-text01">
            <span>Exclusively for Tierra Benita Subdivision</span>
          </span>
        </div>
      </div>
      <div className="download-pasted-image">
        <div className="download-hero hero-container section-container">
          <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
          <span className="download-text03">
            <span className="download-text04">Ready to ride?</span>
          </span>
          <h1 className="download-text05">
            Know riding together helps you save money (and the planet)
          </h1>
          <svg viewBox="0 0 1024 1024" className="download-icon2">
            <path d="M214 470h596l-64-192h-468zM746 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 682q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM808 256l88 256v342q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-44h-512v44q0 18-12 30t-30 12h-44q-18 0-30-12t-12-30v-342l88-256q12-42 62-42h468q50 0 62 42z"></path>
          </svg>
          <img
            alt="image"
            src="/playground_assets/group%202.svg"
            className="download-image1"
          />
          <span className="download-text06 brand-Name">
            <span className="download-text07">subdi-saKay</span>
          </span>
          <GraphicTop rootClassName="graphic-top-root-class-name1"></GraphicTop>
          <GraphicTop rootClassName="graphic-top-root-class-name2"></GraphicTop>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-wh9-200h.png"
            className="download-pasted-image1"
          />
          <AppComponent rootClassName="app-component-root-class-name1"></AppComponent>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-2ld9-200h.png"
            className="download-pasted-image2"
          />
        </div>
      </div>
      <footer className="download-footer">
        <div className="download-links-container">
          <div className="download-container1">
            <div className="footer-column">
              <span className="download-text08">Product</span>
              <span className="download-text09">Features</span>
            </div>
            <div className="footer-column">
              <span className="download-text10">App</span>
              <span className="download-text11">Download iOS app</span>
              <span className="download-text12">Download Android app</span>
            </div>
            <div className="footer-column">
              <span className="download-text13">About us</span>
              <span className="download-text14">Careers</span>
              <Link to="/contact" className="download-navlink3">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Download

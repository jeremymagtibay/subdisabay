import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './getstarted.css'

const Getstarted = (props) => {
  return (
    <div className="getstarted-container">
      <Helmet>
        <title>getstarted - Subdi-Sabay(Final)</title>
        <meta property="og:title" content="getstarted - Subdi-Sabay(Final)" />
      </Helmet>
      <div className="navbar-container">
        <div className="getstarted-max-width max-width">
          <div className="getstarted-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="getstarted-image"
            />
            <Link to="/" className="getstarted-navlink brand-Name">
              <span className="getstarted-text">subdi-saKay</span>
            </Link>
          </div>
          <div className="getstarted-links">
            <Link to="/map" className="getstarted-navlink1 navbar-Link">
              Map Routing
            </Link>
            <button className="button-secondary button">Login</button>
            <Link
              to="/download"
              className="getstarted-navlink2 button button-primary"
            >
              Download
            </Link>
          </div>
          <div className="getstarted-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="getstarted-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <span className="getstarted-text01">
            <span>Exclusively for Tierra Benita Subdivision</span>
          </span>
        </div>
      </div>
      <div className="getstarted-section section-container">
        <div className="getstarted-container01">
          <span className="getstarted-text03 before-Heading">
            <span>Get Started</span>
          </span>
          <div className="getstarted-content">
            <h1 className="getstarted-text05">How it works.</h1>
            <div className="getstarted-step">
              <div className="getstarted-number">
                <span className="getstarted-text06">1</span>
              </div>
              <div className="getstarted-container02">
                <span className="getstarted-title">Message Screen.</span>
                <span className="getstarted-text07">
                  Users can view the previous conversation from the past
                  carpool.
                </span>
              </div>
              <div className="getstarted-container03">
                <span className="getstarted-title1">Download App</span>
                <span className="getstarted-text08">Download our App.</span>
              </div>
            </div>
            <div className="getstarted-step1">
              <div className="getstarted-number1">
                <span className="getstarted-text09">2</span>
              </div>
              <div className="getstarted-container04">
                <span className="getstarted-title2">
                  Create your free account.
                </span>
                <span className="getstarted-text10">
                  Use our app by simply creating an account for Free.
                </span>
              </div>
            </div>
            <div className="getstarted-step2">
              <div className="getstarted-number2">
                <span className="getstarted-text11">3</span>
              </div>
              <div className="getstarted-number3">
                <span className="getstarted-text12">5</span>
              </div>
              <div className="getstarted-number4">
                <span className="getstarted-text13">6</span>
              </div>
              <div className="getstarted-container05">
                <span className="getstarted-title3">Home Screen.</span>
                <span className="getstarted-title4">Notifications.</span>
                <span className="getstarted-title5">Settings.</span>
                <span className="getstarted-text14">
                  <span>
                    Within the Home screen, the users can
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>choose to either Find Pool or Offer Pool</span>
                </span>
                <span className="getstarted-text18">
                  <span>
                    Get notified when booking was accepted
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>and if message by the driver.</span>
                </span>
                <span className="getstarted-text22">
                  <span>
                    User can view, Carpool History, Rating as a Driver, Account
                    Setting and Log out.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-4727-400w.png"
            className="getstarted-pasted-image"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-dgq-400w.png"
            className="getstarted-pasted-image1"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-kz05-400w.png"
            className="getstarted-pasted-image2"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-hl3c-400w.png"
            className="getstarted-pasted-image3"
          />
          <div className="getstarted-number5">
            <span className="getstarted-text24">4</span>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-rcon-400h.png"
            className="getstarted-pasted-image4"
          />
          <div className="getstarted-number6">
            <span className="getstarted-text25">3</span>
          </div>
          <span className="getstarted-title6">Set your route and confirm.</span>
          <span className="getstarted-text26">Set your route and confirm.</span>
        </div>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-hbzn-400w.png"
          className="getstarted-pasted-image5"
        />
      </div>
      <footer className="getstarted-footer">
        <div className="getstarted-links-container">
          <div className="getstarted-container06">
            <div className="footer-column">
              <span className="getstarted-text27">Product</span>
              <span className="getstarted-text28">Features</span>
            </div>
            <div className="footer-column">
              <span className="getstarted-text29">App</span>
              <span className="getstarted-text30">Download iOS app</span>
              <span className="getstarted-text31">Download Android app</span>
            </div>
            <div className="footer-column">
              <span className="getstarted-text32">About us</span>
              <span className="getstarted-text33">Careers</span>
              <Link to="/contact" className="getstarted-navlink3">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Getstarted

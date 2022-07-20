import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Question3 from '../components/question3'
import Question1 from '../components/question1'
import Question2 from '../components/question2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Subdi-Sabay(Final)</title>
        <meta property="og:title" content="Subdi-Sabay(Final)" />
      </Helmet>
      <div className="navbar-container">
        <div className="home-max-width max-width">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="home-image"
            />
            <Link to="/" className="home-navlink brand-Name">
              <span className="home-text">subdi-saKay</span>
            </Link>
          </div>
          <div className="home-links">
            <Link to="/map" className="home-navlink1 navbar-Link">
              Map Routing
            </Link>
            <button className="button-secondary button">Login</button>
            <Link
              to="/download"
              className="home-navlink2 button button-primary"
            >
              Download
            </Link>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <span className="home-text01">
            <span>Exclusively for Tierra Benita Subdivision</span>
          </span>
        </div>
      </div>
      <div className="home-hero hero-container section-container">
        <h1 className="home-title">
          Unlock the next generation of carpooling with
        </h1>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-5jmr-700w.png"
          className="home-pasted-image"
        />
        <img
          alt="image"
          src="/playground_assets/union-400h.png"
          className="home-image1"
        />
        <h1 className="home-title1">
          <span className="home-text03"> Subdi-Sakay.</span>
        </h1>
        <Link to="/getstarted" className="home-navlink3 button button-gradient">
          Get started
        </Link>
        <img
          alt="image"
          src="/playground_assets/group%2018-300w.png"
          className="home-image2"
        />
      </div>
      <div className="home-section section-container">
        <h1 className="home-text04">Wanna go halfsies on gas?</h1>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-bkca-400w.png"
          className="home-pasted-image1"
        />
        <span className="home-text05 before-Heading">
          How to driVe
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <Link
          to="/howtodrive"
          className="home-navlink4 button-secondary button bg-transparent"
        >
          Learn more
        </Link>
        <span className="home-text06">
          {' '}
          Get paid by simply driving with neighbors.
        </span>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-text07 before-Heading">Locations</span>
            <h1 className="home-text08">
              Wanna see your current location?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <span className="home-text09"></span>
            <span className="home-text10">
              With Subdi-sakays own GPS location, you can check out your current
              location or others and view the current flow of traffic.
            </span>
            <div className="home-container01">
              <Link
                to="/location"
                className="home-navlink5 button-secondary button bg-transparent"
              >
                View Locations
              </Link>
            </div>
          </div>
          <div className="home-image3">
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-1vys-500h.png"
              className="home-pasted-image2"
            />
          </div>
        </div>
      </div>
      <div className="home-hero1 hero-container section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image4">
            <img
              alt="image"
              src="/playground_assets/union-400h.png"
              className="home-graphic-top"
            />
          </div>
          <div className="home-content1">
            <span className="home-subtitle before-Heading">How to ride</span>
            <h1 className="home-title2">
              <span>Ride with Us today.</span>
            </h1>
            <span className="home-description">
              With Subdi-Sabay app, you can make the most of your commute while
              saving time and money every day.
            </span>
            <Link
              to="/howtoride"
              className="home-navlink6 button button-gradient"
            >
              Learn more
            </Link>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-43e-1200w.png"
            className="home-pasted-image3"
          />
        </div>
      </div>
      <div className="home-pricing"></div>
      <div className="home-section2 section-container">
        <div className="home-max-width3 max-width">
          <span className="home-text12 before-Heading">objectives</span>
          <h1 className="home-text13">
            <span>No matter where you are, Subdi-Sabay Got you.</span>
          </h1>
          <div className="home-container02">
            <div className="home-container03">
              <div className="home-pricing-card">
                <span className="home-text15">Business</span>
                <div className="home-container04">
                  <span className="home-text16">
                    <span>
                      To encourage the townspeople to
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>have an additional livelihood opportunity.</span>
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-hq88-500h.png"
                  className="home-pasted-image4"
                />
              </div>
              <div className="home-pricing-card1">
                <span className="home-text20">Community</span>
                <div className="home-container05">
                  <span className="home-text21">
                    <span>
                      To increase trust and security among
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>locals towards communicative</span>
                    <br></br>
                    <span> rela</span>
                    <span>
                      tionship between
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      commuters
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>and rider.</span>
                    <br></br>
                    <span></span>
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-zhw9-300h.png"
                  className="home-pasted-image5"
                />
              </div>
            </div>
            <div className="home-pricing-card2">
              <span className="home-text32">Transportation</span>
              <div className="home-container06">
                <span className="home-text33">
                  <span>
                    To add an appropriate and suitable mode of transportation
                    for the locals.
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-0sn-300h.png"
                className="home-pasted-image6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-section3 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-f-a-q">
            <div className="home-questions">
              <span className="home-text39 before-Heading">Forum</span>
              <h1 className="home-text40">
                WELCOME TO SUBDI-SAKAY FREQUENTLY ASKED QUESTIONS.
              </h1>
              <Question3
                text="What is Subdi-Sakay?"
                text1="ubdi-Sakay is an exclusive carpooling service app for Tierra Benita Subdivision (TBHAI) a convenient transportation application to help commuters save money and feel safe, and to make extra money for the drivers."
              ></Question3>
              <Question1
                text="Who are our Subdi-Sakay drivers?"
                text1="Subdi-Sakay drivers are from the Tierra Benita Subdivision itself, who are willing to participate in ridesharing with fellow subdivisions with the same destination as them."
              ></Question1>
              <Question2
                text="How much will I save by using Subdi-Sakay?"
                text1="We still need other way to calculate how much rate we have to compare to other transportation"
              ></Question2>
              <Question2
                text="How many people can I bring on my Subdi-Sakay ride?"
                text1="Users will be shown options of cars available in the vicinity and will be shown details of how many seats are available in the Drivers car."
              ></Question2>
              <Question2
                text="How long will the driver wait for me?"
                text1="The Driver will only wait for a maximum of 5 minutes, you need to notify the driver if you need more time to meet him"
              ></Question2>
            </div>
            <img
              alt="image"
              src="/playground_assets/group%202-1200w.png"
              className="home-image5"
            />
          </div>
          <div className="home-banner">
            <span className="home-text41 before-Heading">get started</span>
            <h1 className="home-text42">Subdi-Sakay, Lets go and Ride!</h1>
            <span className="home-text43"></span>
            <div className="home-btns">
              <button className="home-button1 button button-transparent">
                Register
              </button>
              <Link
                to="/download"
                className="home-navlink7 button button-gradient"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container07">
            <div className="footer-column">
              <span className="home-text44">Product</span>
              <span className="home-text45">Features</span>
            </div>
            <div className="footer-column">
              <span className="home-text46">App</span>
              <span className="home-text47">Download iOS app</span>
              <span className="home-text48">Download Android app</span>
            </div>
            <div className="footer-column">
              <span className="home-text49">About us</span>
              <span className="home-text50">Careers</span>
              <Link to="/contact" className="home-navlink8">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

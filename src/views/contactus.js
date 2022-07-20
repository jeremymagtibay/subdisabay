import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './contactus.css'

const Contactus = (props) => {
  return (
    <div className="contactus-container">
      <Helmet>
        <title>contact us - Subdi-Sabay(Final)</title>
        <meta property="og:title" content="contact us - Subdi-Sabay(Final)" />
      </Helmet>
      <div className="navbar-container">
        <div className="contactus-max-width max-width">
          <div className="contactus-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="contactus-image"
            />
            <Link to="/" className="contactus-navlink brand-Name">
              <span className="contactus-text">subdi-saKay</span>
            </Link>
          </div>
          <div className="contactus-links">
            <Link to="/map" className="contactus-navlink1 navbar-Link">
              Map Routing
            </Link>
            <button className="button-secondary button">Login</button>
            <Link
              to="/download"
              className="contactus-navlink2 button button-primary"
            >
              Download
            </Link>
          </div>
          <div className="contactus-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contactus-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <span className="contactus-text01">
            <span>Exclusively for Tierra Benita Subdivision</span>
          </span>
        </div>
      </div>
      <div className="contactus-features">
        <h1 className="contactus-text03">
          <span>Connect with the SUBDI-SAKAY</span>
        </h1>
        <div className="contactus-separator"></div>
        <div className="contactus-container01">
          <div className="contactus-container02">
            <div className="contactus-feature-card">
              <svg viewBox="0 0 1024 1024" className="contactus-icon02">
                <path d="M504 466q44 12 73 24t61 33 49 53 17 76q0 62-41 101t-109 51v92h-128v-92q-66-14-109-56t-47-108h94q8 90 126 90 62 0 89-23t27-53q0-72-128-104-200-46-200-176 0-58 42-99t106-55v-92h128v94q66 16 101 60t37 102h-94q-4-90-108-90-52 0-83 22t-31 58q0 58 128 92z"></path>
              </svg>
              <h2 className="contactus-text05">Save or Gain money</h2>
              <span className="contactus-text06">
                As carpooling is a cheaper alternative, also gain money by being
                a carpooler.
              </span>
            </div>
            <div className="contactus-feature-card1">
              <svg viewBox="0 0 1024 1024" className="contactus-icon04">
                <path d="M214 554h596l-64-192h-468zM746 768q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM278 768q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM808 342l88 256v340q0 18-12 31t-30 13h-44q-18 0-30-13t-12-31v-42h-512v42q0 18-12 31t-30 13h-44q-18 0-30-13t-12-31v-340l88-256q14-44 62-44h468q48 0 62 44zM298 214q-26 0-45-19t-19-45q0-18 16-47t32-49l16-20q64 74 64 116 0 26-19 45t-45 19zM512 214q-28 0-46-19t-18-45q0-18 16-47t32-49l16-20q64 74 64 116 0 26-18 45t-46 19zM726 214q-26 0-45-19t-19-45q0-18 16-47t32-49l16-20q64 74 64 116 0 26-19 45t-45 19z"></path>
              </svg>
              <h2 className="contactus-text07">Safer Ride</h2>
              <span className="contactus-text08">
                Increase trust and security. Upgrade your commuting experience.
                Avoid the inconveniences of public transportation.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="contactus-feature-card2">
              <svg
                viewBox="0 0 1316.5714285714284 1024"
                className="contactus-icon06"
              >
                <path d="M109.714 658.286c48 0 48-73.143 0-73.143s-48 73.143 0 73.143zM951.429 625.143c-45.143-58.857-89.143-118.857-140.571-172.571l-71.429 80c-62.857 71.429-175.429 69.714-236.571-3.429-43.429-52.571-43.429-128 1.143-180l101.143-117.714c-35.429-18.286-78.286-12-116.571-12-33.714 0-66.286 13.714-90.286 37.714l-90.286 90.286h-88.571v310.857c25.143 0 48-3.429 68 16l169.714 166.857c34.857 33.714 80 63.429 129.714 63.429 25.714 0 53.143-8.571 71.429-26.857 42.857 14.857 92.571-9.143 105.714-53.143 27.429 2.286 52.571-6.286 72.571-25.143 13.143-12 30.286-36 28.571-54.857 5.143 5.143 17.714 5.714 24.571 5.714 68 0 103.429-71.429 61.714-125.143zM1042.286 658.286h54.857v-292.571h-53.143l-89.714-102.857c-24-27.429-60-43.429-96.571-43.429h-95.429c-32 0-62.857 14.286-83.429 38.286l-119.429 138.857c-21.143 25.143-21.143 60.571-0.571 85.714 32.571 38.857 92.571 39.429 126.286 1.714l110.286-124.571c26.286-29.143 74.286-1.714 62.286 35.429 21.714 25.143 45.143 49.714 66.286 74.857 28.571 35.429 56 72.571 84 108.571 17.714 22.857 30.857 50.286 34.286 80zM1206.857 658.286c48 0 48-73.143 0-73.143s-48 73.143 0 73.143zM1316.571 329.143v365.714c0 20-16.571 36.571-36.571 36.571h-248c-20.571 49.714-65.714 82.857-118.286 90.286-24.571 36-62.286 63.429-104.571 72.571-31.429 40-82.286 64-133.143 60.571-94.286 53.143-200.571 6.857-270.857-62.286l-164-161.143h-204.571c-20 0-36.571-16.571-36.571-36.571v-384c0-20 16.571-36.571 36.571-36.571h240.571c66.286-66.286 112-128 211.429-128h66.857c37.143 0 73.143 11.429 103.429 32 30.286-20.571 66.286-32 103.429-32h95.429c108.571 0 153.714 70.857 219.429 146.286h202.857c20 0 36.571 16.571 36.571 36.571z"></path>
              </svg>
              <h2 className="contactus-text09">A cooperative community</h2>
              <span className="contactus-text10">
                Make new friends and assist everyone in getting through the city
                despite the traffic.
              </span>
            </div>
            <div className="contactus-feature-card3">
              <svg viewBox="0 0 1024 1024" className="contactus-icon08">
                <path d="M512 384q36 0 61-25t25-61-25-60-61-24-61 24-25 60 25 61 61 25zM512 598q34-2 59-27t25-59-25-59-59-27h-2q-36 0-61 25t-25 61 25 61 61 25h2zM512 810q34-2 59-26t25-58-25-59-59-27h-2q-36 0-61 25t-25 61 25 60 61 24h2zM854 426q0 60-36 105t-92 61v48h128q0 60-36 104t-92 60v50q0 18-13 30t-31 12h-340q-18 0-31-12t-13-30v-50q-56-16-92-60t-36-104h128v-48q-56-16-92-61t-36-105h128v-48q-56-16-92-60t-36-104h128v-44q0-18 13-30t31-12h340q18 0 31 12t13 30v44h128q0 60-36 104t-92 60v48h128z"></path>
              </svg>
              <h2 className="contactus-text11">
                Less congestion and help the environment
              </h2>
              <span className="contactus-text12">
                Fewer cars in the subdivision, means fewer congestions and
                carbon emissions.
              </span>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-hpo-400h.png"
            className="contactus-pasted-image"
          />
        </div>
      </div>
      <div className="max-width">
        <div className="contactus-logo1">
          <img
            alt="image"
            src="/playground_assets/group%202.svg"
            className="contactus-image1"
          />
          <span className="brand-Name">Documentators</span>
        </div>
        <div className="contactus-burger-menu1 navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="contactus-icon10">
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
      </div>
      <div className="contactus-blog">
        <div className="contactus-container03">
          <div className="contactus-blog-post-card">
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-mcxo-400h.png"
              className="contactus-pasted-image1"
            />
            <div className="contactus-container04">
              <div className="contactus-container05">
                <span className="contactus-text14">
                  <span>project manager</span>
                </span>
                <span className="contactus-text16">
                  Additional work: Technical writer, assistant web designer
                </span>
              </div>
              <h1 className="contactus-text17">Pavia, James Brendan J.</h1>
              <span className="contactus-text18">
                <span>
                  This person oversees maintaining and regulating the
                  advancement and research. Project managers are responsible for
                  planning, organizing, and directing the completion of specific
                  projects for an organization while ensuring these projects are
                  on time, on budget, and within scope.
                </span>
                <br></br>
                <span>
                  Brendan can help you with any questions you have about our Web
                  and Mobile application and the service we provide.
                </span>
              </span>
              <div className="contactus-container06">
                <div className="contactus-profile">
                  <span className="contactus-text21">
                    <span>jbpavia63@gmail.com</span>
                    <br></br>
                    <span>09187973663</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactus-container07">
          <div className="contactus-blog-post-card1">
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-zz6-400h.png"
              className="contactus-pasted-image2"
            />
            <div className="contactus-container08">
              <div className="contactus-container09">
                <span className="contactus-text24">
                  <span>
                    DOCUMENTER/TECHNICAL
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>WRITER</span>
                </span>
              </div>
              <h1 className="contactus-text27">Mohamed, Abdelmelk</h1>
              <span className="contactus-text28">
                <span>
                  The person who is part of writing is and transforms complex
                  and technically difficult written material into clear and
                  concise documentation that will be read by the users.
                </span>
                <br></br>
                <span>
                  If you have any inquiries and questions about our service and
                  objectives, he can gladly answer all of them
                </span>
              </span>
              <div className="contactus-container10">
                <div className="contactus-profile1">
                  <span className="contactus-text31">
                    <span>aboudy201121@gmail.com</span>
                    <br></br>
                    <span>09458570222</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactus-blog-post-card2">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-oqab-400h.png"
            className="contactus-pasted-image3"
          />
          <div className="contactus-container11">
            <div className="contactus-container12">
              <span className="contactus-text34">
                <span>
                  Documenter/Technical
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Writer</span>
              </span>
              <span className="contactus-text37">
                <span>
                  {' '}
                  Additional work: Mobile Programmer, Mobile designer
                </span>
                <br></br>
                <span></span>
              </span>
            </div>
            <h1 className="contactus-text40">Velasco, Jhonson M.</h1>
            <span className="contactus-text41">
              <span></span>
              <span>T</span>
              <span>
                he person in charge of documenting the progress of the project
                and compiling the research will be later presented. A technical
                writer is someone who transforms complex and technically
                difficult written material into clear and concise documentation
                that will be read by the users.
              </span>
              <br></br>
              <span>
                Jhonson was also the part of who programmed the Mobile
                application, along with Adrian. They can help you with any
                inquiries and concerns you may have about the Mobile application
                functions. It would also be appreciated if you report any bugs.
                Additionally, can help you with any questions you may have about
                our Service.
              </span>
            </span>
            <div className="contactus-container13">
              <div className="contactus-profile2">
                <span className="contactus-text46">
                  <span>jhonsonvelaso566@gmail.com</span>
                  <br></br>
                  <span>09352856912</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contactus-container14">
          <div className="contactus-blog-post-card3"></div>
        </div>
      </div>
      <div className="navbar-container">
        <div className="max-width">
          <div className="contactus-logo2">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="contactus-image2"
            />
            <span className="brand-Name">DEvelopers</span>
          </div>
          <div className="contactus-burger-menu2 navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contactus-icon12">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="contactus-blog1">
        <div className="contactus-container15">
          <div className="contactus-blog-post-card4">
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-186v-400h.png"
              className="contactus-pasted-image4"
            />
            <div className="contactus-container16">
              <div className="contactus-container17">
                <span className="contactus-text50">programmer</span>
                <span className="contactus-text51">
                  <span>Additional work: Web designer, System Developer</span>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <h1 className="contactus-text54">Magtibay, Leur Jeremy M.</h1>
              <span className="contactus-text55">
                <span></span>
                <span>
                  The Programmer in charge of creating the Web system. They are
                  responsible of deciding which program and programming language
                  the team shall use in creating the Web system and Mobile
                  application. They are also in charge of creating the system
                  based on the proposal, as designers are profound to commit to
                  different parts of building the mobile application.
                </span>
                <br></br>
                <span>
                  Jeremy was one of the programmers with Adrian that created and
                  designed the Web system. If you have any inquiries or concerns
                  about the Web system functions, Jeremy would gladly help you.
                  It would also be appreciated if you report any bugs.
                </span>
              </span>
              <div className="contactus-container18">
                <div className="contactus-profile3">
                  <span className="contactus-text59">
                    <span>jeremyginta@gmail.com</span>
                    <br></br>
                    <span>09754905495</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactus-container19">
          <div className="contactus-blog-post-card5">
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-yuvd-400h.png"
              className="contactus-pasted-image5"
            />
            <div className="contactus-container20">
              <div className="contactus-container21">
                <span className="contactus-text63">system analyst</span>
                <span className="contactus-text64">
                  Additional work: Mobile Programmer, Mobile designer, System
                  Developer
                </span>
              </div>
              <h1 className="contactus-text65">Senorin, Adrian D.</h1>
              <span className="contactus-text66">
                <span></span>
                <span>
                  The one that visualizes the functionalities and design that
                  the team did follow. This person was also in charge of
                  suggesting the right software and systems to meet the required
                  standards of the system.
                </span>
                <br></br>
                <span>
                  Adrian was also the one who programmed the Mobile application,
                  along with Jhonson. They can help you with any inquiries and
                  concerns you may have about the Mobile application functions.
                  It would also be appreciated if you report any bugs.
                </span>
              </span>
              <div className="contactus-container22">
                <div className="contactus-profile4">
                  <span className="contactus-text70">
                    <span>ryannirones@gmail.com</span>
                    <br></br>
                    <span>09452555738</span>
                    <br></br>
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactus-links-container">
          <div className="contactus-container23">
            <div className="footer-column">
              <span className="contactus-text74">Product</span>
              <span className="contactus-text75">Features</span>
            </div>
            <div className="footer-column">
              <span className="contactus-text76">App</span>
              <span className="contactus-text77">Download iOS app</span>
              <span className="contactus-text78">Download Android app</span>
            </div>
            <div className="footer-column">
              <span className="contactus-text79">About us</span>
              <span className="contactus-text80">Careers</span>
              <Link to="/contact" className="contactus-navlink3">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus

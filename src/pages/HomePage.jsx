import React, {useState} from 'react';
import {useStateContext} from "../contexts/ContextProvider";
const HomePage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const {
    setIsLogged
  } = useStateContext();

  return (
      <>
        <header className="site-header">
          <div className="cont">
            <div className="header-row">
              <div className="logo">
                <a href="#">
                  <img className="inline" src={process.env.PUBLIC_URL + 'assets/images/logo.svg'} alt="Planet phone"/>
                </a>
              </div>

              <nav className={`menu${isMenuOpened ? " is-active" : ""}`}>
                <div className="menu-elements">
                  <span>Menu</span>
                  <span onClick={() => {setIsMenuOpened(false)}} className="menu-close">
              <img className="inline" src={process.env.PUBLIC_URL + 'assets/images/close.svg'} alt="Close"/>
            </span>
                </div>
                <ul>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#" onClick={() => {setIsLogged(true)}}>Login</a></li>
                </ul>
              </nav>

              <div className="hamburger" onClick={() => setIsMenuOpened(true)}>
                <img className="inline" src={process.env.PUBLIC_URL + 'assets/images/hamburger.svg'} alt="Hamburger"/>
              </div>
            </div>
          </div>
        </header>

        <div className="s-banner">
          <div className="cont">
            <div className="banner-wrap">
              <h1 className="banner-title">Appliance repair apple</h1>
              <div className="banner-desc">
                We repair Apple appliances. For 10 years of work, we have gained a lot of experience. Guaranteed speed and
                quality.
              </div>
              <div className="banner-btn def-btn">
                <a href="#">See prices</a>
              </div>
              <div className="banner-image">
                <img className="inline" src={process.env.PUBLIC_URL + 'assets/images/iphone.png'} alt="iPhone"/>
              </div>
            </div>
          </div>
        </div>

        <div className="s-features">
          <div className="cont">
            <div className="features-wrap">

              <div className="features-item">
                <div className="features-icon">
                  <img className="inline" src={process.env.PUBLIC_URL + 'assets/images/features-1.svg'} alt="Quick result"/>
                </div>
                <div className="features-title">
                  Quick result
                </div>
                <div className="features-desc">
                  Our team has been working for more than 10 years and has a lot of experience. When ordering from us, you
                  can be sure.
                </div>
              </div>

              <div className="features-item">
                <div className="features-icon">
                  <img className="inline" src={process.env.PUBLIC_URL + 'assets/images/features-2.svg'} alt="Affordable price"/>
                </div>
                <div className="features-title">
                  Affordable price
                </div>
                <div className="features-desc">
                  Since many customers order from us, we decided to make prices affordable for everyone.
                </div>
              </div>

              <div className="features-item">
                <div className="features-icon">
                  <img className="inline" src={process.env.PUBLIC_URL + 'assets/images/features-3.svg'} alt="Professional team"/>
                </div>
                <div className="features-title">
                  Professional team
                </div>
                <div className="features-desc">
                  Since many customers order from us, we decided to make prices affordable for everyone.
                </div>
              </div>

              <div className="features-item">
                <div className="features-icon">
                  <img className="inline" src={process.env.PUBLIC_URL + 'assets/images/features-4.svg'} alt="Quality assurance"/>
                </div>
                <div className="features-title">
                  Quality assurance
                </div>
                <div className="features-desc">
                  We guarantee a refund if the quality of service does not suit you. Clients are the most important for us
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="s-pricing">
          <div className="cont">
            <h2 className="title-center">Pricing</h2>

            <div className="pricing-wrap">

              <div className="pricing-item">
                <div className="pricing-tariff">Base</div>
                <div className="pricing-price">50 USD</div>
                <ul>
                  <li>See stress-free marketing pages</li>
                  <li>Praising pain was born</li>
                  <li>Recause those who</li>
                </ul>
                <div className="pricing-btn">
                  <a href="#">Choose a tariff</a>
                </div>
              </div>

              <div className="pricing-item">
                <div className="pricing-tariff">Professional</div>
                <div className="pricing-price">150 USD</div>
                <ul>
                  <li>Because those who</li>
                  <li>Simple, stress-free marketing pages</li>
                  <li>Because those who</li>
                  <li>With righteous indignation and</li>
                  <li>With righteous indignation and</li>
                  <li>Cannot foresee the pain and trouble</li>
                </ul>
                <div className="pricing-btn">
                  <a href="#">Choose a tariff</a>
                </div>
              </div>

              <div className="pricing-item">
                <div className="pricing-tariff">Ultimatum</div>
                <div className="pricing-price">280 USD</div>
                <ul>
                  <li>Every pleasure is to be welcomed</li>
                  <li>Will frequently occur that pleasures</li>
                  <li>Will frequently occur that pleasures</li>
                </ul>
                <div className="pricing-btn">
                  <a href="#">Choose a tariff</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="s-form">
          <div className="cont">
            <div className="form-row">

              <div className="form-left">
                <div className="title-left">
                  <h2>Feedback</h2>
                  <div className="title-desc">
                    If you have any questions or would like to order our services from us, please fill out the form on the
                    right. Our managers work around the clock and will call you back during the day.
                  </div>
                </div>
                <div className="form-image">
                  <img className="inline" src={process.env.PUBLIC_URL + 'assets/images/macbook.png'} alt="Macbook"/>
                </div>
              </div>

              <div className="form-right">
                <form>
                  <input type="text" placeholder="Your name*" required />
                  <input type="text" placeholder="Your phone*" required />
                  <input type="text" placeholder="Your email" />
                  <textarea cols="30" rows="7" placeholder="Comment"></textarea>
                  <div className="def-btn">
                    <button>Send</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>

        <footer className="site-footer">
          <div className="cont">
            <div className="text-copyright">Copyright © 2023 by <strong>Planet Phone.</strong> All rights reserved</div>
          </div>
        </footer>
      </>
  )
};

export default HomePage;

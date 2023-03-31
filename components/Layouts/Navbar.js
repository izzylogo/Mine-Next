import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      if(collapsed) {
        button.setAttribute("name", "helloButton");
      },
    });
  };
  closeNav = () => {
    let elementId = document.getElementById("navbarSupportedContent");
    elementId.classList.remove("show");
    elementId.setAttribute("aria-expanded", "false");
    this.toggleNavbar();
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classLeftNavbar = collapsed
      ? "collapse navbar-collapse order-lg-1 order-3 mx-auto"
      : "collapse navbar-collapse show order-lg-1 order-3";
    const classRightNavbar = collapsed
      ? "collapse navbar-collapse order-lg-3 order-4 mx-auto"
      : "collapse navbar-collapse show order-lg-3 order-4 ";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-left collapsed order-sm-0 order-xs-0"
      : "navbar-toggler navbar-toggler-left order-sm-0 order-xs-0";

    return (
      <>
        <div id="navbar" className="navbar-area navbar-style-2">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              {/* Toggle navigation */}
              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar order-sm-0 order-xs-0"></span>
                <span className="icon-bar middle-bar order-sm-0 order-xs-0"></span>
                <span className="icon-bar bottom-bar order-sm-0 order-xs-0"></span>
              </button>
              <div className="nav-item navbar-brand align-middle d-lg-none">
                <Link href="/#">
                  <img
                    src="/images/logo-white-io-resized.png"
                    className="img-responsive"
                    alt="logo"
                  />
                </Link>
              </div>

              <div className="navbar-brand others-options order-sm-1 order-xs-1 float-sm-right float-xs-right d-flex">
                {/* <Link href="/#">
                                    <img src="/images/logo-white-io-resized.png" className="img-responsive" alt="logo" />
                                </Link> */}
                {/* <Link href="https://twitter.com/io_investment">
                                    <a className="btn btn-primary twitter-button d-none d-lg-block" target="_blank">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                </Link> */}
                <Link href="https://discord.gg/W3xfGD4AB8">
                  <a
                    className="btn btn-primary discord-button"
                    target="_blank"
                    id="discordButton"
                  >
                    <i class="fa-brands fa-discord"></i>
                    <span className="d-none d-md-inline ms-2">JOIN US</span>
                  </a>
                </Link>
              </div>

              <div className={classLeftNavbar} id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                  <li
                    className="nav-item d-flex d-sm-flex d-md-flex align-bottom"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                  >
                    <a
                      href="/#story"
                      className="nav-link"
                      activeClassName="active"
                    >
                      WHAT IS IT?
                    </a>
                  </li>

                  <li
                    className="nav-item d-flex d-sm-flex d-md-flex align-middle"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                  >
                    <Link href="/#how-it-works" data-toggle="collapse">
                      <a className="nav-link">HOW IT WORKS?</a>
                    </Link>
                  </li>

                  <li
                    className="nav-item d-flex d-sm-flex d-md-flex align-middle "
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                  >
                    <a href="/#utilities" className="nav-link">
                      UTILITIES
                    </a>
                  </li>
                  {/* </ul>
                            </div> */}

                  <li
                    className="nav-item navbar-brand d-none d-md-block align-middle"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                  >
                    <Link href="/#">
                      <img
                        src="/images/logo-white-io-resized.png"
                        className="img-responsive"
                        alt="logo"
                      />
                    </Link>
                  </li>
                  {/* 
                            <div className={classRightNavbar} id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto"> */}
                  <li
                    className="nav-item d-flex d-sm-flex align-middle"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                  >
                    <Link href="/#its-yours" activeClassName="active">
                      <a className="nav-link">IT`S YOURS! </a>
                    </Link>
                  </li>

                  <li
                    className="nav-item d-flex d-sm-flex align-middle "
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                  >
                    <a href="/#roadmap" className="nav-link">
                      ROADMAP
                    </a>
                  </li>
                  <li
                    className="nav-item d-flex d-sm-flex align-middle "
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                  >
                    <a href="/#team" className="nav-link">
                      TEAM
                    </a>
                  </li>
                  <li
                    className="nav-item d-flex d-sm-flex align-middle"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                  >
                    <a href="/#faq" className="nav-link">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mx-auto d-none d-sm-none d-lg-block order-lg-4 order-4">
                <Link href="/#">
                  <a className="btn btn-primary minting-button">
                    <div class="mx-0 inline-block">
                      <i class="fa-solid fa-sailboat float-left"></i>
                      MINT SOON
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;

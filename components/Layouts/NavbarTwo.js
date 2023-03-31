import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class NavbarTwo extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
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
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area navbar-style-2">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              {/* Toggle navigation */}
              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarMobileContent"
                aria-controls="navbarMobileContent"
                aria-expanded="rt"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="https://discord.gg/W3xfGD4AB8"
                      className="btn btn-primary discord-button"
                      target="_blank"
                      id="discordButton"
                    >
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        JOIN US
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        How it works
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about" activeClassName="active">
                      <a className="nav-link">Claim it!</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about" activeClassName="active">
                      <a className="nav-link">Benefits</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/about" activeClassName="active">
                      <a className="nav-link">Tokenomics</a>
                    </Link>
                  </li>

                  <li>
                    <div>
                      <Link href="/">
                        <a className="navbar-brand">
                          <img
                            src="/images/logo-black-io.png"
                            className="logo-size black-logo"
                            alt="logo"
                          />
                          <img
                            src="/images/logo-white-io.png"
                            className="logo-size white-logo"
                            alt="logo"
                          />
                        </a>
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Our team
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        FAQ
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Disclaimer
                      </a>
                    </Link>
                  </li>
                </ul>

                {/* Spot that can be used to add button like "Connect Wallet" */}
                {/* <div className="others-options">
                                    <Link href="/pricing">
                                        <a className="btn btn-primary">
                                            Mint your NFT
                                        </a>
                                    </Link>
                                </div> */}
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default NavbarTwo;

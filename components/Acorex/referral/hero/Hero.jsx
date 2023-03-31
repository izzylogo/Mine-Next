import React from "react";

import Tab from "./Tab";
import { BsArrowRight } from "react-icons/bs";
// import logo from "/images/logo.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src="/images/logo.png" alt="logo" className="logo" />
      <div className="hero-contain">
        <div className="hero-left">
          <h3>Earn $30 per NFT minted by your Friends</h3>
          <p>
            Invite your friends to join IO's exclusive investment network and
            earn commissionon thier NFT purchases. Earn $30 per NFT minted by
            your friends and a $50 bonus for every 5 NFTs minted
          </p>
          <Link to="invite" spy={true} smooth={true} offset={50} duration={500}>
            <button>
              Learn More
              <BsArrowRight />
            </button>
          </Link>
        </div>
        <div className="hero-right">
          <Tab />
        </div>
      </div>
    </div>
  );
};

export default Hero;

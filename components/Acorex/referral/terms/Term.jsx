import React from "react";
import { terms } from "../../constants";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

const Term = () => {
  return (
    <div className="term">
      <h2>Terms & Conditions</h2>
      <div className="term-contain">
        {/* terms gotten from the array of terms in the index file inside the constants folder */}
        {terms.map((term) => (
          <div className="condition">
            <h4>{term.num} </h4>
            <p> {term.condition}</p>
          </div>
        ))}
      </div>
      <div className="last">
        <h2>Invite Your Friends and Start Earning Now!</h2>
        {/* Link is gotten from react-srcoll package */}
        <Link to="hero" spy={true} smooth={true} offset={6} duration={500}>
          <button>
            Invite Friends
            <BsArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Term;

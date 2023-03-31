import React, { useState } from "react";

import { faq } from "../../constants";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState("");

  return (
    <div className="faq">
      <h2>FAQ</h2>
      <div className="faq-contain">
        {faq.map((faqs) => (
          <div key={faqs.id} className="faqs">
            <div
              className="quest-top"
              onClick={() => {
                setSelectedFaq(faqs.id);
                setToggle((prevToggle) => !prevToggle);
              }}
            >
              <h4>{faqs.question}</h4>
              <IoIosArrowDown className="icon" />
            </div>
            <div className="line" />
            {/* 
                        This part states that if toggle is true displayy the p tag and the p tag
                        states that if the two are identical add a display of block
                    */}
            {/* {
                        toggle ?
                            <p
                        style={{
                            display: faqs.id === selectedFaq  ? 'block' : 'none',
                        }}
                        >
                            {faqs.answer}
                        </p>
                        :
                        null
                    } */}
            {toggle && faqs.id === selectedFaq ? <p>{faqs.answer}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

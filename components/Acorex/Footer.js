import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <>
        <footer className="footer-area">
          <div className="copyright-area">
            <div className="container">
              <p>
                Copyright &copy; 2021-{currentYear} IO Investment Academy. All
                Rights Reserved.
              </p>
              <a href="email:hello@ioinvestmentacademy.com">
                <span>Contact:</span> hello@ioinvestmentacademy.com
              </a>
              <p className="footer-disclaimer">
                Disclaimer: Investing involves risk, including loss of
                principal. Past performance does not guarantee or indicate
                future results. Any historical returns, expected returns, or
                probability projections may not reflect actual future
                performance. While the data we use from third parties is
                believed to be reliable, we cannot ensure the accuracy or
                completeness of data provided by investors or other third
                parties. Neither IO Investment Academy or any of its affiliates
                provide tax advice and do not represent in any manner that the
                outcomes described herein will result in any particular tax
                consequence. Offers to sell, or solicitations of offers to buy,
                any security can only be made through official offering
                documents that contain important information about investment
                objectives, risks, fees and expenses. Prospective investors
                should consult with a tax or legal adviser before making any
                investment decision. For additional important risks,
                disclosures, and information, please visit https://www.anaf.ro/
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;

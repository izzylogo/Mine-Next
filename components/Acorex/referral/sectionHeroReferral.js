import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Web3 from "web3";
import { ref, set, get, update, remove, child } from "firebase/database";
import { findRefobj, createRef } from "../../../utils/firbase_utils";
import {
  checkConnect,
  generateReferralCode,
  calcTotalMoney,
  checkbroswer,
  checkNetwork,
  checkbroswer1,
} from "../../../utils/web3_utils";
import { serverTimestamp } from "firebase/firestore";
import { processPayment } from "../../../utils/refWithdrawal";

const MySwal = withReactContent(Swal);

function SectionHeroReferral() {
  const [reff, setReff] = useState("");
  const [wallet, setWallet] = useState("");
  const [totalVaid, setTotalVaid] = useState("");
  const [totalComm, setTotalComm] = useState("");
  const [totalBonus, setTotalBonus] = useState("");
  const [connected, setConnected] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(async () => {
    let check = await checkbroswer1();
    let checkNet = await checkNetwork();
    if (check && checkNet) {
      if (ethereum.selectedAddress) {
        setConnected(true);

        const results = await findRefobj(
          "referral_code",
          "wallet",
          `${ethereum.selectedAddress}`
        );

        // console.log("got results", results);

        if (results) {
          setWallet(results.wallet);
          setReff(results.ref_code);
          const { totalPending, totalValid } = await calcTotalMoney(
            results.ref_code
          );

          setTotalVaid(totalValid);
          setTotalComm(totalPending);

          setUrl(location.protocol + "//" + location.host);
        } else {
          // console.log("gsydcvsdvyuvyyu");
          let ref_code = await generateReferralCode(ethereum.selectedAddress);
          let obj = {
            ref_code: ref_code,
            wallet: ethereum.selectedAddress,
            time: serverTimestamp(),
          };
          let Creattref = await createRef("referral_code", obj);
          // console.log(Creattref, "hello hdfb hbs");
          setUrl(location.protocol + location.host);
          if (Creattref) {
            setWallet(ethereum.selectedAddress);
            setReff(ref_code);
            const { totalPending, totalValid } = await calcTotalMoney(ref_code);

            setTotalVaid(totalValid);
            setTotalComm(totalPending);
          }
        }

        // let transaction = await web3.eth.getTransaction(
        //   "0x74ce9cf86b1f4ab2a9115ef862819539dfa1634425c2e0823739232129a1d9e8"
        // );
        // console.log(JSON.stringify(transaction));
      }
    }
  }, []);

  let button;
  if (connected) {
    button = (
      <button
        onClick={async (e) => (e.preventDefault(), await processPayment(reff))}
        className="r-btn"
      >
        Withdraw Funds
      </button>
    );
  } else {
    button = (
      <button
        onClick={(e) => (e.preventDefault(), checkConnect())}
        className="r-btn"
      >
        Connect Wallet
      </button>
    );
  }
  return (
    <>
      <section id="acxHeroReferral">
        <div className="hero-content">
          <div id="logo-ioia">
            <img src="/images/acx/logo-white.svg"></img>
          </div>
          <div className="section-content">
            <div className="container">
              {" "}
              <div className="row ">
                <div className="col-lg-6 col-6">
                  <div className="justify-content-center">
                    <div className="header-reeferral-hero">
                      <h2>Invite Friends and Earn Commissions</h2>
                    </div>
                    <div className="text-content-referral-hero">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-6">
                  <div className="referral-form justify-content-center">
                    <h2>Generate Invite Code by conecting your wallet</h2>
                    <form>
                      <div className="input-referral">
                        <label>My Wallet</label>
                        <div className="box">
                          <p className="text">{wallet}</p>
                          <button className="button" type="button">
                            <img
                              src="https://s2.svgbox.net/octicons.svg?ic=copy"
                              alt="Icon"
                            />
                          </button>
                        </div>
                      </div>

                      <div className="input-referral">
                        <label>Referral Code</label>
                        <div className="box">
                          <p className="text">{reff}</p>
                          <button className="button" type="button">
                            <img
                              src="https://s2.svgbox.net/octicons.svg?ic=copy"
                              alt="Icon"
                            />
                          </button>
                        </div>
                      </div>

                      <div className="input-referral">
                        <label>Referral Link</label>
                        <div className="box">
                          <p className="text">
                            <span
                              style={{
                                display: reff === "" ? "none" : "block",
                              }}
                            >
                              {url}/minting?ref={reff}
                            </span>
                          </p>
                          <button className="button" type="button">
                            <img
                              src="https://s2.svgbox.net/octicons.svg?ic=copy"
                              alt="Icon"
                            />
                          </button>
                        </div>
                      </div>

                      <div className="input-referral">
                        <label>Commissions</label>
                        <div className="box">
                          <p className="text">
                            <h3
                              style={{
                                display: totalComm === "" ? "none" : "block",
                                color: "blue",
                              }}
                            >
                              ${totalComm}
                            </h3>
                          </p>
                          <button className="button" type="button">
                            <img
                              src="https://s2.svgbox.net/octicons.svg?ic=copy"
                              alt="Icon"
                            />
                          </button>
                        </div>
                      </div>

                      {button}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionHeroReferral;

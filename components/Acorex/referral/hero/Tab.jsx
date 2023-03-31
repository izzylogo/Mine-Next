import React, { useState } from "react";
import Loader from "../loader/Loader";

import { HiDocumentText } from "react-icons/hi";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Tab = () => {
  const [load, setLoad] = useState(true);
  const [referralLink, SetReferralLink] = useState("");
  const [inputValue, SetInputValue] = useState("");
  const [wallet, SetWallet] = useState("");
  const changeLoad = () => {
    console.log(setLoad);
  };

  return (
    <div className="tab">
      <div className="tab-contain">
        <h4>Earn Commissions by Inviting Friends</h4>
        <div className="form">
          <div className="code">
            <label htmlFor="code">Refferal Code</label>
            <div className="input">
              <input
                id="code"
                name="code"
                type="password"
                value={inputValue}
                onChange={(e) => SetInputValue(e.target.value)}
              />
              <CopyToClipboard text={inputValue}>
                <HiDocumentText className="copy" />
              </CopyToClipboard>
            </div>
          </div>
          <div className="link">
            <label htmlFor="link">Refferal Link</label>
            <div className="input">
              <input
                id="link"
                type="text"
                value={referralLink}
                onChange={(e) => SetReferralLink(e.target.value)}
              />
              <CopyToClipboard text={referralLink}>
                <HiDocumentText className="copy" />
              </CopyToClipboard>
            </div>{" "}
          </div>
          <div className="wallet">
            <label htmlFor="wallet">My Wallet</label>
            <div className="input">
              <input
                id="code"
                name="code"
                type="password"
                value={wallet}
                onChange={(e) => SetWallet(e.target.value)}
              />
              <CopyToClipboard text={wallet}>
                <HiDocumentText className="copy" />
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div className="bu">
          <p>
            My Commission <br /> <span>NFT's Minted by your Friends: 20</span>
          </p>
          <h4>$800</h4>
        </div>
        {/* ou can change this by making the load state true of false in the useState */}
        {load ? (
          <div className="connect">
            <button onClick={changeLoad}>Connet Wallet</button>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Tab;

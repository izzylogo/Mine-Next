import React from "react";

const Tier = () => {
  return (
    <div className="tier">
      <div className="tier-contain">
        <h2>Commission Tier</h2>
        <div className="tier-card-sec">
          <div className="tier-card">
            <div className="card-top">
              <p className="gold">Get</p>
              <h2>$30</h2>
              <p>USDc per NFT</p>
            </div>
            {/* Added a new class name */}
            <p className="card-bottom">
              Earn 30 USDc for each NFT minted by <br /> your referees
            </p>
          </div>
          <div className="tier-card">
            <div className="card-top">
              <p className="gold">Extra </p>
              <h2> $50</h2>
              <p>Bonus USDc</p>
            </div>
            {/* Added a new class name */}
            <p className="card-bottom">
              Earn extra 50 USDc bonus for every 5 NFT's <br /> minted b your
              referees
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tier;

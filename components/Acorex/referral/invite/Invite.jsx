import React from "react";

const Invite = () => {
  return (
    <div className="invite" id="invite">
      <div className="invite-contain">
        <div className="sect sect1">
          <img src="/images/v1.png" alt="picture1" />
          <h3>Invite Friends.</h3>
          <p>
            Share your reference code or link woth your friends and encourage
            them to explore our project.
          </p>
        </div>
        <div className="sect sect2">
          <img src="/images/v2.png" alt="picture2" />
          <h3>Earn Commission</h3>
          <p>
            Earn $30 for every NFT minted by friends. Your connissions will be
            sent directly to your wallet in USDC every 24 hours.
          </p>
        </div>
        <div className="sect sect3">
          <img src="/images/v3.png" alt="picture3" />
          <h3>Qualified Referees</h3>
          <p>
            A qualified referee is a friend who successfully minted an NFT from
            IO's collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invite;

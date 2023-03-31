import React, { useEffect, Component } from "react";

import Faq from "../components/Acorex/referral/faq/Faq";
import Forcast from "../components/Acorex/referral/forcast/Forcast";
import Hero from "../components/Acorex/referral/hero/Hero";
import Invite from "../components/Acorex/referral/invite/Invite";
import Term from "../components/Acorex/referral/terms/Term";
import Tier from "../components/Acorex/referral/tier/Tier";

function ReferralPage() {
  return (
    <>
      <Hero />
      <Invite />
      <Tier />
      <Forcast />
      <Faq />
      <Term />
    </>
  );
}

export default ReferralPage;

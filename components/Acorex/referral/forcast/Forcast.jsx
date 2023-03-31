import React from "react";

import { forecast } from "../../constants";

const Forcast = () => {
  return (
    <div className="forcast">
      <h2>Commission Forecast</h2>
      <div className="forcast-contain">
        {forecast.map((cast) => (
          <div className="forcasts">
            <div key={cast.id} className="forcast-card">
              <div>
                <h1 key={cast.id}>{cast.value}</h1>
              </div>
              <h4 key={cast.id}>{cast.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forcast;

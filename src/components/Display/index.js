import React from "react";
import "./display.css";

import Pumps from "../../img/3.png";

const index = () => {
  return (
    <div className="home-display">
      <h4>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </h4>
      <div className="home-display-img">
      <img src={Pumps} alt="pumps" className="home-img" />
      </div>

      <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
    </div>
  );
};

export default index;

import React from "react";
import "./App.css";

import Logo from "./img/logo.png";
import Shield from "./img/1.png";
import Award from "./img/2.png";
import Pumps from "./img/3.png";

const App = () => {

  return (
    <div className="home">
      <section className="home-header">
        <img src={Logo} alt="logo" className="home-logo" />
      </section>

      <section className="home-hero">
        <div className="home-hero-left">
          <img src={Shield} alt="sheild" className="hero-img" />
        </div>

        <div className="home-hero-right">
          <h2>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h2>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={Award} alt="award" className="hero-img" />
          <p>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </section>

      <section className="home-display">
        <h4>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h4>

        <img src={Pumps} alt="pumps" className="home-img hero-img-pump" />

        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>

      </section>

      <hr />

      <section className="home-footer">
        <h2>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
        <h6>
          CHEMICALS & PROCESS <span style={{ color: "red" }}> | </span> POWER{" "}
          <span style={{ color: "red" }}> | </span> WATER & WASTE WATER{" "}
          <span style={{ color: "red" }}> | </span> OILS & GAS{" "}
          <span style={{ color: "red" }}> | </span> PHARMA{" "}
          <span style={{ color: "red" }}> | </span> SUGARS & DISTILLERIES{" "}
          <span style={{ color: "red" }}> | </span> PAPER & PULP{" "}
          <span style={{ color: "red" }}> | </span> MARINE & DEFENCE{" "}
          <span style={{ color: "red" }}> | </span> METAL & MINING{" "}
          <span style={{ color: "red" }}> | </span>FOOD & BEVERAGE{" "}
          <span style={{ color: "red" }}> | </span> PETROCHEMICAL & REFINERIES{" "}
          <span style={{ color: "red" }}> | </span>SOLAR BUILDING{" "}
          <span style={{ color: "red" }}> | </span>HVAC{" "}
          <span style={{ color: "red" }}> | </span>
          FIRE FIGHTING <span style={{ color: "red" }}> | </span> AGRICULTURE &
          RESIDENTIAL
        </h6>

        <div className="home-footer-banner">
          <div>
              <i className="fas fa-phone home-footer-icon"></i>
              <span> Toll Free <strong>1800 200 1234</strong> </span>
          </div>
          <div>
              <i className="fa fa-facebook home-footer-icon"></i>
              <span>www.facebook.com/cripumps </span>
          </div>
          <div>
              <i className="fas fa-globe home-footer-icon"></i>
              <span>www.crigroups.com </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

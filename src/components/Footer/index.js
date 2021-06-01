import React from 'react';
import './footer.css'

const index = () => {
    return (
         <div className="home-footer">
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
      </div>
    );
};

export default index;
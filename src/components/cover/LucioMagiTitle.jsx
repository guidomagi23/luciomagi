import React from "react";
import "../cover/Cover.css";

const LucioMagiTitle = () => {
  const imageBase = process.env.PUBLIC_URL || "";

  return (
    <div className="lucio-title-wrapper">
      <div className="lucio-title">
        <img
          className="imageLucio"
          src={`${imageBase}/images/lucio.png`}
          alt=""
          aria-hidden="true"
          data-aos="fade-right"
        />
        <img
          className="imageMagi"
          src={`${imageBase}/images/magi.png`}
          alt=""
          aria-hidden="true"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default LucioMagiTitle;

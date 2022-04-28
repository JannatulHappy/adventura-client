import React from "react";
import "./UpHeader.css";

const UpHeader = () => {
  return (
    <div style={{marginBottom:"73px"}} className="up-header ">
      <div className="row  py-3 up-header-item">
        <div className="col-md-8 col-lg-6 col-12 left-item">
          <span>
            <strong>Deals of The Week </strong> Spooktacular Adventures
            <strong> Save up to 50% </strong>
          </span>
          <i className="ms-lg-1 fas fa-chevron-right"></i>
        </div>
        <div className="col-lg-2 col-md-0  col-12"></div>
        <div className="col-md-4 col-12 col-lg-4  right-item">
          <p >
            <strong  className="p-lg-3">Deals End on 10th November 2022</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpHeader;

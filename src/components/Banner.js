import React from 'react';
const Banner = () => {
    return (
        <div style={{marginTop:"110px"}} className="row container mx-auto banner-container">
        <div className="col-lg-6 col-md-12 col-12  banner-left  mb-3">
          <p className="mt-5">
            <span className="sub-title">
              LIFE'S A JOURNEY, TAKE YOUR DREAM
            </span>
          </p>
          <h1 className="title mt-3 mb-4">Spooktacular Adventures</h1>
          <h5 className=" bottom-text mt-4 fw-medium">No tricks, just lots of treats!</h5>
          <div className=" row  ">
            <div className="btn-container ">
              <button className=" avantura-btn">Italy</button>
              <button className=" avantura-btn">Iceland</button>
              <button className=" avantura-btn">Egypt</button>
            </div>
            <div className=" ">
              <button className=" avantura-btn">England</button>
              <button className=" avantura-btn">Turkey</button>
              <button className=" avantura-btn">Greece</button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12"></div>
      </div>
    );
};

export default Banner;
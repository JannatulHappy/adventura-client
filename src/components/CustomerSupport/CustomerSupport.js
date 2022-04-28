import React from "react";
import './CustomerSupport.css'
import supportImg from "../../assets/support-1.png";
const CustomerSupport = () => {
  return (
    <div className="Support-container">
      <div className="support row py-5 ms-5" >
        <div className="col-lg-8 col-md-6 col-12">
          <p className="fw-bold fs-1 mb-4 ">24/7 Customer Support</p>
          <hr className="hr "style={{color:"gray"}} />
          <p  style={{color:"gray"}}>
            Our team of experienced tour specialists have travelled to hundreds
            of countries around the globe and have decades of first-hand travel
            experience to share. Contact us now to have all of your tour-related
            questions answered!
          </p>
          <button className=" avantura-btn mt-5 px-5 py-2 fs-5">Contact Us</button>
        </div>
        <div className="col-lg-4 col-md-6 col-12 d-flex">
          <img
            src="https://cdn.tourradar.com/s3/team/original/90_Jaww8wcm.jpg"
            alt=""
          />
          <img
            src="https://cdn.tourradar.com/s3/team/original/116_X7vUqJpc.jpg"
            alt=""
          />
          <img src={supportImg} alt="" />
          <img
            src="https://cdn.tourradar.com/s3/team/original/119_xutrVM4W.jpg"
            alt=""
          />
          <img
            src="https://cdn.tourradar.com/s3/team/original/129_v6ehPU2s.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;

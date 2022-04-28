import React from "react";
import "./Adventure.css";
const Adventure = () => {
  return (
    <div className="adventure-container my-5">
      <div className="adventure row mb-2 ">
        <div className="col-lg-4 col-md-4 col-12 my-5 ps-5">
          <p className="fs-2 fw-bold">Adventure, Your Way</p>
          <p style={{color:"gray"}}>
            No matter who you’re looking to travel with, you can depend on our
            2,500 trusted operators to make sure everything’s taken care of.
          </p>
        </div>
        <div className="col-lg-8 col-md-8 col-12 my-4">
          <div className="row g-4 pe-4">
            <div className="col-lg-4 col-md-12 col-12  ">
              <div className="adventure-type bg-white px-2">
                <img
                  className="h-25 img-fluid "
                  src="https://cdn.tourradar.com/s3/content-pages/391/464x208/Txt9Qm.jpg"
                  alt=""
                />
                <p className="fs-6  my-2 fw-bold">Group Adventures</p>
                <p>Join a group anf forge lifelong friendships.</p>
                <p className="fs-6 fw-bold text-info">Explore</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12  ">
              <div className="adventure-type bg-white px-2">
                <img
                  className="h-25 img-fluid "
                  src="https://cdn.tourradar.com/s3/content-pages/391/464x208/UH5QvE.jpg"
                  alt=""
                />
                <p className="fs-6  my-2 fw-bold">Private Adventures</p>
                <p>Travel exclusively with your friends and family.</p>
                <p className="fs-6 fw-bold text-info">Explore</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12  ">
              <div className="adventure-type bg-white px-2">
                <img
                  className="h-25 img-fluid "
                  src="https://cdn.tourradar.com/s3/content-pages/391/464x208/SG3H74.jpg"
                  alt=""
                />
                <p className="fs-6  my-2 fw-bold">Self Guided Adventures</p>
                <p>Be your own guide with booked for you in advanced.</p>
                <p className="fs-6 fw-bold text-info">Explore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;

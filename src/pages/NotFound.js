import React from "react";
import notFoundImg from "../assets/notFound.jpg"
const NotFound = () => {
  return (
    <div >
      <img style={{marginTop:"110px",height:"600px",width:"100vw"}} src={notFoundImg} alt="Not Found" />
    </div>
  );
};

export default NotFound;
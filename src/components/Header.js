import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import logoImg from "../assets/logo-1.png"
import { Link } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
  };
  const { user } = useSelector((state) => ({ ...state.auth }));
  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "rgb(8, 8, 8)",
        opacity: 0.85,
        padding: "34px 10px",}}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{ color: "#606080", fontWeight: "600", fontSize: "22px" }}
        >
            <img src={logoImg} alt="" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
          style={{ color: "#606080" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
          
            <MDBNavbarItem>
              <MDBNavbarLink href="/">
                <p className="header-text">Home</p>
              </MDBNavbarLink>
            </MDBNavbarItem>
            {user?.result?._id && (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/addTour">
                    <p className="header-text">Add Tour</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/dashboard">
                    <p className="header-text">Dashboard</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </>
            )}
              {user?.result?._id && (
               <span
               style={{ color: "peru", fontWeight: "900", fontSize: "17px" }}
             >
              {user?.result?.name}
             </span>
              
            )}
            {user?.result?._id ? (
               <button
               onClick={handleLogout}
               className="ms-3  login-btn text-uppercase"
             >
               Logout
             </button>
           ) : (
             <Link className="login-btn text-decoration-none ms-3" to="/login">
               LOGIN
             </Link>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
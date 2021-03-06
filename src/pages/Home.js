// import UpHeader from "../components/UpHeader/UpHeader"
import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../redux/features/tourSlice";
import CardTour from "../components/CardTour";
import Banner from "../components/Banner";
import CustomerSupport from "../components/CustomerSupport/CustomerSupport";
import Adventure from "../components/Adventure/Adventure";
import Spinner from "../components/Spinner";

const Home = () => {
  const { tours, loading } = useSelector((state) => ({ ...state.tour }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <header>
        <div className="overlay">
          <Banner />
        </div>
      </header>
      <div>
        <div
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "1200px",
            alignContent: "center",
          }}
        >
          <MDBRow className="mt-5">
            {tours.length === 0 && (
              <MDBTypography className="text-center mb-0" tag="h2">
                No Tours Found
              </MDBTypography>
            )}
            <p className="title">FEATURED TOURS</p>
            <hr className="hr" />
            <p className="sub-title mt-2">
              Discover the highlights of travelling and find ideas for your
              holidays with these stories.
            </p>
            <MDBCol>
              <MDBContainer>
                <MDBRow className="row-cols-1 row-cols-md-3 g-2">
                  {tours &&
                    tours.map((item, index) => (
                      <CardTour key={index} {...item} />
                    ))}
                </MDBRow>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
      <CustomerSupport></CustomerSupport>
      <Adventure></Adventure>
    </div>
  );
};

export default Home;

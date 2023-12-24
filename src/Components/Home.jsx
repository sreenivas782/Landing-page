import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div style={{ objectFit: "cover", objectPosition: "center" }}>
        <div style={{ width: "100%", zIndex: -1 }}>
          <video
            src="https://s3.amazonaws.com/buildercloud/fffa60a1b1692fc4bc91dd962360ed51/HomePage_short_lr.mp4"
            style={{ width: "100%", height: "100vh" }}
            preload="auto"
            autoPlay
            muted
            loop
            data-reactid="129"
            playsInline=""
            webkit-playsinline=""
            x5-playsinline=""
            data-uw-rm-av="vi"
          ></video>
        </div>
      </div>
      <div className="sub-text">
        <span className="text-1">EXCEPTIONAL HOMES,</span>
        <span className="text-2">LASTING COMMUNITIES</span>
      </div>
      <div className="container-3">
        <div className="box-1">
          <h1>SINGLE FAMILY HOMES</h1>
          <span>Find Your New Home Today</span>
          <ArrowCircleRightRoundedIcon className="icon" />
        </div>
        <div className="box-2">
          <h1>TOWN HOMES</h1>
          <span>Find Your New Home Today</span>
          <ArrowCircleRightRoundedIcon className="icon" />
        </div>
      </div>
      <div className="container-4">
        <div className="head-box">
          <h3 className="container-3-heading">Featured Single Family</h3>
          <div className="submit">
            <p>Submited by Sreenivas Athi </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

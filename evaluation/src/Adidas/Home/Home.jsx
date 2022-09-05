import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import Alkira from "./Alkira";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Popular from "./Popular";
import CardShop from "./CardShop";
import "./Home.css";
import Slider from "./Sliders/Slider";
import Whatshot from "./Sliders/Whatshot";
import { Link } from "react-router-dom";
import Story from "./Story";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <Fragment>
      <Link to="/checkout">
        <button
          style={{
            width: "200px",
            height: "100px",
            fontSize: "50px",
            fontWeight: "800",
          }}
        >
          cart
        </button>
      </Link>
      <div className="home-wrapper">
        <div>
          <ReactPlayer
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
            url="https://brand.assets.adidas.com/image/upload/q_auto,vc_auto/enIN/Images/football-fw22-federations-agnostic-excluding-belgium-hp-mh-d_tcm209-931507.mp4"
          />
        </div>
        <div className="absolute-home-wrapper">
          <div
            className="text-wrapper-home1"
            style={{
              color: "white",
              fontFamily: " Arial, Helvetica, sans-serif",
              fontSize: "30px",
              fontWeight: "800",
              width: "100%",
            }}
          >
            <img
              style={{ height: "80px", width: "200px", color: "white" }}
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/Adidas-Logo-White-Desktop_tcm209-924458.png"
              alt="adidas"
            ></img>
            <div style={{ color: "white" }}>FIFA WORLD CUP</div>
            <div className="text-wrapper-home-small">2022 tm KITS</div>
          </div>
          <div className="div-brutal-video">
            <button className="button-brutal-video">
              {" "}
              <div className="div-underbutton">
                <p>SHOP NOW</p>
                <HiOutlineArrowNarrowRight style={{ fontSize: "30px",marginTop:"10px" }} />
              </div>{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="home-wrapper">
        <div className="video-wrapper">
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,fl_lossy,q_1/if_w_gt_1920,w_1920/enIN/Images/NMDRanveerD_tcm209-932361.jpg"
            alt="adidas"
          />
        </div>
        <div className="absolute-home-wrapper">
          <div className="text-wrapper-home">
            <img
              style={{ height: "80px", width: "320px", color: "white" }}
              src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/NMDRev_tcm209-932359.png"
              alt="adidas"
            ></img>
            <div
              style={{ color: "white", fontSize: "16px", fontWeight: "600" }}
            >
              The NMD_V3 reimagines the past whilst looking to the future. It’s
              time to create new paths.
            </div>
          </div>
          <div className="div-brutal-video">
            <button className="button-brutal-video">
              {" "}
              <div className="div-underbutton">
                <p>SHOP NOW</p>
                <HiOutlineArrowNarrowRight style={{ fontSize: "30px",marginTop:"10px" }} />
              </div>{" "}
            </button>
          </div>
        </div>
      </div>
      {/* <Alkira /> */}
      <Popular />
      <CardShop />
      <Slider />
      <Whatshot />
      <Story />
    </Fragment>
  );
}

export default Home;

{
  /* <div class="player___27pmf" style="width: 100%; height: 100%;">
  <video
    src="https://brand.assets.adidas.com/image/upload/q_auto,vc_auto/enIN/Images/football-fw22-federations-agnostic-excluding-belgium-hp-mh-d_tcm209-931507.mp4"
    preload="auto"
    autoplay=""
    loop=""
    playsinline=""
    webkit-playsinline=""
    x5-playsinline=""
    style="width: 100%; height: 100%;"
  ></video>
</div>; */
}

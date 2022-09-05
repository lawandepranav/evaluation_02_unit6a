import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { productData } from "../../Redux/Action";
const Slider = () => {
  const [slider, setSlider] = useState([]);
  const dispatch = useDispatch();
  const getData = () => {
    axios
      .get("https://backend-gamma-vert.vercel.app/pro", {})
      .then((res) => setSlider(res.data))
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const handleAdd = (id) => {
    axios
      .get(`https://backend-gamma-vert.vercel.app/proid/${id}`, {})
      .then((res) => dispatch(productData(res.data)))

      .catch((e) => {
        console.log(e);
      });
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="title-wrapper">
          <p>NEW ARRIVALS</p>
          <Link to="/products">
            <button className="viewall-button"> VEIW ALL</button>
          </Link>
        </div>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          shouldResetAutoplay={false}
          responsive={responsive}
          ssr={true}
          keyBoardControl={true}
          customTransition="all 1s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {slider.map((item, key) => {
            return (
              <div className="card-main-wrapper">
                <Link to={"/product"}>
                  <div className="card-img-price-div">
                    <img src={item.pro_img[0]} alt="Forum Low Shoes" />
                    <div className="card-price-div">
                      {" "}
                      <button>₹{item.price}</button>
                    </div>
                  </div>
                  <div className="card-other-details">
                    <p>{item.pro_name}</p>
                    <p>{item.categeory}</p>
                    <p>NEW</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;

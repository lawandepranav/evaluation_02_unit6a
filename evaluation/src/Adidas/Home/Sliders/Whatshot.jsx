import React, { useState, useEffect } from "react";
import styles from "./Whatshot.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
const Whatshot = () => {
  const [whatshot, setWhatshot] = useState([]);

  const getData = () => {
    axios
      .get("https://backend-gamma-vert.vercel.app/pro", {})
      .then((res) => setWhatshot(res.data))
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div
      className={`${styles.component_wrapper_2BSG0} ${styles.gl_vspace_bpall_medium} ${styles.gl_vspace_bpl_large}`}
    >
      <section className={`${styles.wrapper_1yElT} ${styles.black_2H1C2}`}>
        <div
          className={`${styles.container} ${styles.wrapper_container_2IQMb}`}
        >
          <div
            className={`${styles.heading_wrapper_2qEou} ${styles.col_s_12} ${styles.no_gutters}`}
          >
            <div>
              <h4
                className={`${styles.title} ${styles.gl_heading} ${styles.adihaus_cn_bold_italic} ${styles.gl_heading_m} ${styles.only_title_RahRS}`}
              >
                WHAT'S HOT
              </h4>
            </div>
            <div
              className={`${styles.wrapper_cta_D5HXo} ${styles.black_2H1C2}`}
            ></div>
          </div>
          <div className={`${styles.col_s_12} ${styles.no_gutters}`}>
            <div className={styles.gl_carousel}>
              <div className={styles.gl_carousel_content}>
                <div
                  className={`${styles.gl_carousel_slider} ${styles.carousel_container_3v8y5}`}
                >
                  <Carousel
                    swipeable={false}
                    draggable={false}
                    shouldResetAutoplay={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server_side.
                    keyBoardControl={true}
                    customTransition="all 1s"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    // dotListClass="custom-dot-list-style"
                    // itemClass="carousel-item-padding-40-px"
                  >
                    {whatshot.map((item, key) => {
                      return (
                        <div
                          key={item.id}
                          className={`${styles.gl_carousel_item_wrapper} ${styles.carousel_item_2XBDX}`}
                          // style="flex: 0 0 auto; min-height: 1px;"
                        >
                          <div
                            className={`${styles.teaser_card_3HbwJ} ${styles.teaser} ${styles.teaser_card_3tmyE} ${styles.less_spacing}`}
                          >
                            <a href="#" className={styles.link_wrapper_1mXsE}>
                              <div className={styles.card_content_3hXc3}>
                                <div
                                  className={`${styles.teaser_media_22wQp} ${styles.portrait_tpxuu}`}
                                >
                                  <div className={styles.wallpaperWrapper_q6gq}>
                                    <div className={styles.container_246kH}>
                                      <img
                                        className={`${styles.high_res_picture_2gAGk} ${styles.loaded_3plIB} ${styles.img_K_DBh}`}
                                        src={item.pro_img[0]}
                                        alt="image_high"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.teaser_content_2qVy}>
                                  <span
                                    className={`${styles.title_3i4il} ${styles.gl_body}`}
                                  >
                                    <strong className={styles.withhtml}>
                                      {item.title}
                                    </strong>
                                  </span>
                                  <p
                                    className={`${styles.summary_3soIS} ${styles.gl_body}`}
                                  >
                                    {item.pro_det}
                                  </p>
                                  <div  
                                    className={`${styles.card_cta_1DLMT} ${styles.teaser_card_cta_hjH2t}`}
                                  >
                                    <button
                                      type="button"
                                      className={`${styles.gl_cta} ${styles.gl_cta_tertiary}`}
                                      title="ENTER RAFFLE"
                                    >
                                      <span className={styles.gl_cta_content}>
                                        {item.categoery}
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whatshot;

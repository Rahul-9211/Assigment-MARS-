import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wave } from 'react-animated-text';
const SliderSlick = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    // className: "center",
    centerMode: true,
    // centerPadding: "60px",
    centerPadding:"40px"
  };
  return (
    <>
      <section className="slider">
        <div>
          <Slider {...settings}>
            <div>
              <div className="main_container">
                <p><Wave text="Believe you can and you're halfway there." />
                <strong>Theodore Roosevelt</strong></p>
              </div>
            </div>
            <div>
              <div className="main_container">
                <p><Wave text="As soon as healing takes place, go out and heal somebody else." />
                <strong>Maya Angelou</strong></p>
                
              </div>
            </div>
            <div>
              <div className="main_container">
                <p><Wave text="Believe you can and you're halfway there." />
                <strong>Theodore Roosevelt</strong></p>
              </div>
            </div>
            <div>
              <div className="main_container">
                <p><Wave text="Although the world is full of suffering, it is also full of the
                overcoming of it." />
                <strong>Helen Keller</strong></p>
              </div>
            </div>
            <div>
              <div className="main_container">
                <p><Wave text="If you can win over your mind you can win over the whole world.." />
                <strong>Sri Sri Ravi Shankar</strong></p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default SliderSlick;

import React from "react";
import DragCards from "./DragCards";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Grid = () => {
  return (
    <>
      <h1
        className="gridHead"
        data-aos="fade-down-left"
        data-aos-delay="50"
        data_aos_duration="2200"
      >
        Services <strong>Provided</strong>
      </h1>
      <section className="grid">
        <div className="heading">
          <DragCards />
        </div>
      </section>
    </>
  );
};

export default Grid;

import React from "react";
import about from "../images/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <>
      <section className="about">
        <div
          className="image"
          data-aos="flip-left"
          data-aos-delay="50"
          data-aos-duration="2000"
        >
          <img src={about} alt="" />
        </div>
        <div className="content">
          <h3
            data-aos="fade-down-left"
            data-aos-delay="50"
            data_aos_duration="2200"
          >
            About <strong>Us</strong>
          </h3>
          <p
            data-aos="fade-up-left"
            data-aos-delay="50"
            data_aos_duration="2200"
          >
            MARS has been incorporated with the intention of supporting the
            addiction rehab recovery industry by bringing together the most
            needed services required to run the addiction rehab centers - under
            one roof. We offer a mélange of services including but not limited
            to:
          </p>
          <ul>
            <li>Telehealth – Counselling Services</li>
            <li>Revenue Cycle Management</li>
            <li>Provider & Payer Credentialing</li>
            <li>Laboratory Testing</li>
            <li>Holistic Healing & Yoga Programs</li>
          </ul>
          <button
            className="btn"
            data-aos="fade-up-left"
            data-aos-delay="50"
            data_aos_duration="2200"
          >
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};
export default About;

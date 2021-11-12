import React from "react";
import { TextField } from "@material-ui/core";
import {
  IoIosPin,
  IoIosCalendar,
  IoIosPhonePortrait,
  IoMdMail,
} from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="info">
          <div className="box">
            <h1
              data-aos="fade-down-left"
              data-aos-delay="50"
              data_aos_duration="2200"
            >
              Contact <strong>Info</strong>
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="50"
              data_aos_duration="2200"
            >
              <IoIosPin /> 3028 Greenmount Ave, Unit #1030, Baltimore, MD, 21218
            </p>
            <a
              href=""
              data-aos="fade-right"
              data-aos-delay="50"
              data_aos_duration="2200"
            >
              <IoIosPhonePortrait />
              Call Now : 001 01085379709
            </a>
            <br />
            <a
              href=""
              data-aos="fade-right"
              data-aos-delay="50"
              data_aos_duration="2200"
            >
              <IoMdMail />
              Email: admin@website.com
            </a>
            <p
              data-aos="fade-right"
              data-aos-delay="50"
              data_aos_duration="2200"
            >
              <IoIosCalendar />
              Mon-Sat: 9am to 6pm
            </p>
          </div>
        </div>
        <div className="form">
          <h1
            data-aos="fade-down-right"
            data-aos-delay="50"
            data_aos_duration="2200"
          >
            Reach Out <strong>to Us</strong>
          </h1>
          <form action="">
            <div
              className="name_phone"
              data-aos="fade-right"
              data-aos-delay="50"
              data_aos_duration="2200"
            >
              <TextField id="standard-basic" label="Name" variant="standard" />
              <TextField id="standard-basic" label="Phone" variant="standard" />
            </div>
            <div
              className="email"
              data-aos="fade-right"
              data-aos-delay="50"
              data_aos_duration="2200"
            >
              <TextField fullWidth label="Email" id="fullWidth" />
            </div>
            <div
              className="message"
              data-aos="fade-right"
              data-aos-delay="50"
              data_aos_duration="2200"
            >
              <TextField
                fullWidth
                id="standard-basic"
                label="Message"
                placeholder="Placeholder"
                multiline
              />
            </div>
            <div
              className="btn2"
              data-aos="fade-down-right"
              data-aos-delay="50"
              data_aos_duration="2200"
            >
              <button>SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

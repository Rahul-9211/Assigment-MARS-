
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Menu = () => {
  return (
    <div className="container">
      <ul className="list ">
        <li  
      data-aos="fade-down-right"
      data-aos-delay="100"
      data_aos_duration="2200" ><a href="#">HOME</a></li>
        <li
      data-aos="fade-down-left"
      data-aos-delay="100"
      data_aos_duration="2200"><a href="#">ABOUT</a> </li>
        <li
      data-aos="fade-down-right"
      data-aos-delay="100"
      data_aos_duration="2200"><a href="#">SERVICES</a></li>
        <li
      data-aos="fade-up-left"
      data-aos-delay="100"
      data_aos_duration="2200"><a href="#">CONTACT</a></li>
      </ul>
    </div>
  );
};
export default Menu;

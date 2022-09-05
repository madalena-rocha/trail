import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import LikeButton from "../LikeButton";

import { data } from "../../service/data";
import { FaChevronLeft, FaChevronRight, FaCommentAlt, FaRegEdit } from "react-icons/fa";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronRight style={{ color: "#4b204b", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronLeft style={{ color: "#4b204b", fontSize: "30px" }} />
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="container-carousel">      
      <a id="icone-carousel" href="algum lugar" alt="ícone"><FaRegEdit /></a>
      <div className="carousel">
        <Slider
          autoplay
          autoplaySpeed={3000}
          dots
          initialSlide={2}
          infinite
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          customPaging={(i) => {
            return (
              <div className="slick-img">
                <img
                  src={data[i]}
                  alt=""
                  style={{
                    width: "12rem",
                    height: "7rem",
                    paddingBottom: "0.2rem",
                    borderRadius: "2px",
                    verticalAlign: "true",
                  }}
                />
              </div>
            );
          }}
          dotsClass="slick-dots custom-indicator"
        >
          {data.map((item) => (
            <div>
              <img
                src={item}
                alt=""
                style={{ width: "100%", height: "43rem", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
        <div className="btn-like">
          <LikeButton />
        </div>
        <div className="btn-msg">
          <a href="#comment">
            <FaCommentAlt />
          </a>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dignissim enim sit
        amet venenatis urna. Id ornare arcu odio ut sem. Interdum velit euismod
        in pellentesque massa placerat duis. Amet purus gravida quis blandit.
        Faucibus turpis in eu mi bibendum. Maecenas sed enim ut sem viverra
        aliquet. Fermentum dui faucibus in ornare quam. Euismod lacinia at quis
        risus sed vulputate odio.
      </p>
    </div>
  );
};

export default Carousel;

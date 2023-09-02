import "./style.css";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const Card = (props) => {
  return (
    <div
      className="row__card"
      style={{
        backgroundImage: `url(${props.user.image})`,
      }}
    >
      <div className="card__nick">
        <img
          className="card__nick___photo"
          src={props.user.profile_photo}
          alt=""
        />
        <div className="card__nick___info">
          <span className="info__name">{props.user.username}</span>
          <br />
          <span className="info__date">{props.user.date}</span>
        </div>
      </div>

      <div className="card__intro">
        <h4 className="card__intro___location">{props.user.location}</h4>
        <p className="card__intro___text">{props.user.text}</p>

        <div className="intro__view">
          <button className="intro__view___btn">Ver mais</button>

          <div className="intro__icons">
            <AiOutlineEye />
            <BiCommentDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import Gradient from "../Gradient";
import "./style.css";
import cover from "../../assets/images/cover.png";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import youtube from "../../assets/images/youtube.svg";
import ProfileAbout from "../ProfileAbout";
import { useState } from "react";

export default function BackgroundProfile() {
  const [following, setFollowing] = useState(false);

  return (
    <section className="main__profile">
      <div
        className="profile__background___img"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <div className="img__social___icons">
          <a className="social___icons" href="#">
            <img src={instagram} alt="Ícone do Instagram." />
          </a>
          <a className="social___icons" href="#">
            <img src={facebook} alt="Ícone do Facebook." />
          </a>
          <a className="social___icons" href="#">
            <img src={youtube} alt="Ícone do Youtube." />
          </a>
        </div>

        <Gradient />
      </div>
      <ProfileAbout following={following} onClick={setFollowing} />
    </section>
  );
}

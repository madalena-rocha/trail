import "./style.css";
import { BiDownArrow } from "react-icons/bi";

const Posts = ({ children }) => {
  return (
    <section className="main__posts">
      <div className="posts__filter">
        <button className="filter__dropdown">
          Filtro
          <BiDownArrow />
        </button>
      </div>

      <div className="posts__row">{children}</div>

      <div className="posts__load"></div>
    </section>
  );
};

export default Posts;

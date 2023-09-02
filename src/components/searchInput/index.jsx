import "./style.css";
import * as React from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = (props) => {
  return (
    <form action="" className="header__search" onSubmit={props.handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Pesquisar"
        onChange={(e) => props.setInput(e.target.value)}
        value={props.input}
      />
      <button type="submit" className="search__btn">
        <BiSearch />
      </button>
    </form>
  );
};
export default SearchInput;

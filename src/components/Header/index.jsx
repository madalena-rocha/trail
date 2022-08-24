import './style.css';
import {BiSearch} from 'react-icons/bi'

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src="" alt=""/>

      <form action="" className="header__search">
        <input type="text" name="search" id="search" placeholder="Pesquisar"/>
        <button type="submit" className="search__btn">
          <BiSearch/>
        </button> 
      </form>
      <button className="header__access___btn">Cadastro / Login</button>
    </header>
  );
}

export default Header;
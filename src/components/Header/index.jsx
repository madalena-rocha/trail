import './style.css';
import search from '../../assets/images/search.svg';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src="" alt=""/>

      <form action="" className="header__search">
        <input type="text" name="search" id="search" placeholder="Pesquisar"/>
        <button type="submit" className="search__button">
          <img className="link__icon" src={search} alt=""/>
        </button> 
      </form>
      <button className="header__btn___lc">Cadastro / Login</button>
    </header>
  );
}

export default Header;
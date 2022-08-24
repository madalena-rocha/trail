import './style.css';
import {BiSearch} from 'react-icons/bi'
import logo from '../../assets/images/logo-trail.svg'

const Header = () => {
  return (
    <header className="header">
      
        <img className='header__logo___img' src={logo} alt="Logo do site" />

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
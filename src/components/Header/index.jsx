import './style.css';
import * as React from 'react'
import {BiSearch} from 'react-icons/bi'
import logo from '../../assets/images/logo-trail.svg'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState('');

  const handleClick = () => {
    navigate('/sign-in');
  }

  const hundleChange = (e) => {
    setFilter(e.target.value);
  }

  return (
    <header className="header">
      
      <img className='header__logo___img' src={logo} alt="Logo do site" />

      <form action="" className="header__search">
        <input type="text" name="filter" value={filter} onChange={hundleChange}
        id="search" placeholder="Pesquisar"/>
        <button type="submit" className="search__btn">
          <BiSearch/>
        </button> 
      </form>
      
      <button className="header__access___btn" onClick={() => handleClick()}>Cadastro / Login</button>
    </header>
  );
}

export default Header;
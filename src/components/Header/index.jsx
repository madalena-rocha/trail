import './style.css';
import * as React from 'react'
import {BiSearch} from 'react-icons/bi'
import logo from '../../assets/images/logo-trail.svg'
import perfil from '../../assets/images/perfil.png'
import setting from '../../assets/images/setting-perfil.png'
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

  const HeaderAccess = () => {
    const token = localStorage.getItem('token')
    return token ? (<div className="header__acess___profile">
      <img className="header__profile" src={perfil} alt="" />
      <img className="header__setting" src={setting} alt="" />
    </div>) : <button className="header__access___btn" onClick={() => handleClick()}>Cadastro / Login</button>
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
      <HeaderAccess />
    </header>
  );
}

export default Header;
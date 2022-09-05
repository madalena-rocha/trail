import './style.css';
import * as React from 'react'
import arrow from '../../assets/images/arrow-dropdown.svg'
import logo from '../../assets/images/logo-trail.svg'
import {useNavigate} from 'react-router-dom';

const Header = ({children}) => {
  const navigate = useNavigate();
  const [visible,setVisible] = React.useState(false)

  const handleClick = () => {
    navigate('/sign-in');
  }

  const handleHome = () => {
    navigate('/')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const HeaderAccess = () => {
    const token = localStorage.getItem('token')
    return token ? (<div  className="header__acess___profile">
      <div className="header__profile" ></div>
      <img onClick={() => setVisible(!visible)} className="header__setting" src={arrow} alt="Seta dropdown menu"/>
      {visible ? (<div className="header__menu">
        <p>Editar Perfil</p>
        <p onClick={handleLogout}>Sair</p>
      </div>) : ''}
    </div>) : <button className="header__access___btn" onClick={() => handleClick()}>Cadastro / Login</button>
  }

  return (
    <header className="header">
      
      <img onClick={handleHome} className='header__logo___img' src={logo} alt="Logo do site" />

      {children}

      <HeaderAccess />
    </header>
  );
}

export default Header;
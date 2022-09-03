import React from 'react';
import './styles.css';
import SearchBar from '../SearchBar';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { FcMenu } from 'react-icons/fc';


function Navbar() {
  return (
    <div className="container-navbar">
      <div className="logo"><FaMapMarkerAlt /></div>
      <div className="logo-r"><FcMenu />
      </div> 
      <SearchBar />
      {/* <nav className='list-nav'>
        <ul>
          <li>|||</li>
        </ul>
      </nav> */}
    </div>
  );
}

export default Navbar;
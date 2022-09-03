import './styles.css';
import React from 'react';

import { FaMapMarkerAlt } from 'react-icons/fa';
import Perfil from '../../assets/img/user-icon.png';

import DataAtual from '../DataAtual';

export default function Header() {
  return (
        <div className='container-header'>
            <div>
                <img className="post-img" src={Perfil} alt="" />
                <h2 className="post-h2">By Dev Strangers | </h2>
                <span> <DataAtual /></span>
            </div>
            <div className='destino'>
                <h2 className='destino-h2'><FaMapMarkerAlt /> Destino</h2>
            </div>
        </div>
    );
}

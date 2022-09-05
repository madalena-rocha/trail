import './styles.css';
import React from 'react';

import { FaMapMarkerAlt } from 'react-icons/fa';
import Perfil from '../../assets/images/user-icon.png';

import DataAtual from '../../pages/Postagem/components/DataAtual';

export default function PerfilPost() {
  return (
        <div className='container-perfil-post'>
            <div className='content-perfil-post'>
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

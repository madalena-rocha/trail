import React from "react";
import Header from '../../components/Header';
import PerfilPost from '../../components/PerfilPost';
import HeaderLine from '../../components/HeaderLine';
import Carousel from '../../components/Carousel';
import Comments from '../../components/Comments';


import './styles.css';

function Postagem() {
  return (
    <div className="container-postagem">
      {/* <Navbar /> */}
      <Header />
      <PerfilPost />
      <HeaderLine />
      <Carousel />
      <Comments />
    </div>
  );
}

export default Postagem;

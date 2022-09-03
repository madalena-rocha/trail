import React from "react";
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import HeaderLine from '../../components/HeaderLine';
import Carousel from '../../components/Carousel';
import Comments from '../../components/Comments';

import './styles.css';

function Home() {
  return (
    <div className="container-home">
      <Navbar />
      <Header />
      <HeaderLine />
      <Carousel />
      <Comments />
    </div>
  );
}

export default Home;

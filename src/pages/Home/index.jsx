import * as React from 'react';
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Division from "../../components/Division";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Highlights from "../../components/Highlights";
import Main from "../../components/Main";
import Posts from "../../components/Posts";
import Phrase from "../../components/Phrase";

const Home = () => {

  return (
    
    <Container>
      <Header/>
        <Main>
          <Banner/>
          <Phrase/>
          <Highlights/>
          <Division title='Publicações'/>
          <Posts/>
        </Main>
        <Footer/>
    </Container>
  );
}

export default Home;
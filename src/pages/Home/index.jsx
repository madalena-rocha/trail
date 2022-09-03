// import Banner from "../../components/Banner";
import Container from "../../components/Container";
// import Division from "../../components/Division";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import Highlights from "../../components/Highlights";
import Main from "../../components/Main";
// import Posts from "../../components/Posts";
import Postagem from "../Postagem";

const Home = () => {
  return (
    <div>
      <Container>
         <Header/>
          <Main>
            <Postagem />

            {/* <Banner/>
            <Highlights/>
            <Division title='Publicações'/>
            <Posts/> */}
          </Main>
        <Footer/> 

        
      </Container>
    </div>
  );
}

export default Home;
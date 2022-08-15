import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Highlights from "../../components/Highlights";
import Main from "../../components/Main";
import Posts from "../../components/Posts";

const Home = () => {
  return (
    <div>
      <Container>
        <Header/>
        <Main>
          <Banner/>
          <Highlights/>
          <Posts/>
        </Main>
        <Footer/>
      </Container>
    </div>
  );
}

export default Home;
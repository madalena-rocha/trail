import * as React from "react";
import axios from "axios";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Division from "../../components/Division";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Posts from "../../components/Posts";
import Phrase from "../../components/Phrase";
import ModalPost from "../../components/ModalPost";
import Card from "../../components/Card";
import SearchInput from "../../components/SearchInput";
import CookieConsent from "react-cookie-consent";

const Home = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [user, setUser] = React.useState([]);
  const [initialRepos, setInitialRepos] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInitialRepos(
      users.filter(({ location }) =>
        location.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  React.useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("https://trail-api.onrender.com/posts");
      setUsers(response.data);
      setInitialRepos(response.data);
    };

    getUsers();
  }, []);

  const handleShowModal = (u) => {
    setShowModal(true);
    setUser(u);
  };

  return (
    <Container>
      <Header>
        <SearchInput
          handleSubmit={handleSubmit}
          input={input}
          setInput={setInput}
        />
      </Header>
      <Main>
        <Banner />
        <Phrase />
        <Division title="Publicações" />
        <Posts>
          {initialRepos.map((u) => (
            <div key={u.id} onClick={() => handleShowModal(u)}>
              <Card user={u} />
            </div>
          ))}
        </Posts>
      </Main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Aceitar cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          background: "#181818",
          color: "#FFFFFF",
          fontSize: "2rem",
        }}
        expires={150}
      >
        Este site usa cookies para melhorar a experiência do usuário.
      </CookieConsent>
      {showModal && <ModalPost user={user} setShowModal={setShowModal} />}
    </Container>
  );
};

export default Home;

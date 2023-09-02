import BackgroundProfile from "../../components/BackgroundProfile";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Division from "../../components/Division";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Container from "../../components/Container";
import SearchInput from "../../components/SearchInput";
import Card from "../../components/Card";
import * as React from "react";
import axios from "axios";
import ModalPost from "../../components/ModalPost";

export default function Profile() {
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
      const response = await axios.get(
        "https://trail-api.onrender.com/posts?username=@devjunior"
      );
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
        <BackgroundProfile />
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
      {showModal && <ModalPost user={user} setShowModal={setShowModal} />}
    </Container>
  );
}

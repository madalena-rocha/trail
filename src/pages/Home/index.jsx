import * as React from 'react';
import axios from 'axios';
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Division from "../../components/Division";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Highlights from "../../components/Highlights";
import Main from "../../components/Main";
import Posts from "../../components/Posts";
import Phrase from "../../components/Phrase";
import ModalPost from '../../components/ModalPost';
import Card from '../../components/Card';

const Home = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [user, setUser] = React.useState([])
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get('https://api-trail.herokuapp.com/posts');
      setUsers(response.data);
      console.log(response)
    }
    getUsers();
  }, [])

  const handleShowModal = (u) => {
    setShowModal(true)
    setUser(u)
  }

  return (
    
    <Container>
      <Header/>
        <Main>
          <Banner/>
          <Phrase/>
          
          <Division title='Publicações'/>
          <Posts>
            {
              users.map(u => (
                <div onClick={() => handleShowModal (u)}>
                  <Card user={u}/>
                </div>
              ))
            }
          </Posts>
        </Main>
        <Footer/>
        {showModal && <ModalPost user={user} setShowModal={setShowModal}/>}
    </Container>
  );
}

export default Home;
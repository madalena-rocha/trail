import BackgroundProfile from '../../components/BackgroundProfile'
import Header from '../../components/Header'
import Posts from '../../components/Posts'
import Division from '../../components/Division'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import Container from '../../components/Container'


export default function Profile () {

  return (
   
    <Container>
      <Header/>
        <Main>   
          <BackgroundProfile/>
          <Division title='Publicações' />
          <Posts/>
        </Main>
      <Footer/>
    </Container>   
       
  ) 
}
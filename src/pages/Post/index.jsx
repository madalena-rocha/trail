import Header from '../../components/Header'
import Division from '../../components/Division'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import Container from '../../components/Container'
import PostInfo from '../../components/PostInfo'
import PostPublication from '../../components/PostPublication'


export default function Post () {

  return (
   
    <Container>
      <Header/>
        <Main>
          <PostInfo/>
          <Division title='Publicação' />
          <PostPublication/>
        </Main>
      <Footer/>
    </Container>   
       
  ) 
}
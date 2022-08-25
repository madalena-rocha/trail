
import './styles.css' 
import Profile from '../../components/Profile'
import BackgroundProfile from '../../components/BackgroundProfile'
import Header from '../../components/Header'
import Posts from '../../components/Posts'
import Division from '../../components/Division'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import Container from '../../components/Container'
import { useState } from 'react'


export default function Perfil () {

    const [following, setFollowing] = useState(false);

    return (

        <div className="Perfil">
            <Container>
                <Header/>
                    <Main>   
                        <BackgroundProfile/> 
                        <Profile following={following} onClick={setFollowing}/>
                        <Division title='Publicações' /> 
                        <Posts/>
                    </Main>
                <Footer/>
            </Container>   
        </div>
    ) 
}
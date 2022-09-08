import Gradient from '../Gradient'
import './style.css'
import capa from '../../assets/images/capa.png'
import insta from '../../assets/images/instagram.svg'
import face from '../../assets/images/facebook.svg'
import youtube from '../../assets/images/youtube.svg'
import ProfileAbout from '../ProfileAbout'
import {useState} from 'react'

export default function BackgroundProfile () {

  const [following, setFollowing] = useState(false);

  return (
    <section className="main__profile" >
      
      <div className='profile__background___img' 
        style={{ 
          backgroundImage: `url(${capa})`  
        }}>
          
        <div className='img__social___icons'>
          <a className='social___icons' href="">
            <img src={insta} alt="Icone do instagram." />
          </a>
          <a className='social___icons' href="">
            <img src={face} alt="Icone do instagram." />
          </a>
          <a className='social___icons' href="">
            <img src={youtube} alt="Icone do instagram." />
          </a>
        </div>
          
        <Gradient/>
      </div>
      <ProfileAbout following={following} onClick={setFollowing} />
    </section>
      
    )
}
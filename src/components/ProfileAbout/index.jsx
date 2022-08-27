import './style.css'
import photo from '../../assets/images/photo-perfil.jpg'

export default function ProfileAbout(props) {
  return (
    <div className="box__profile">

      <div className='profile__about'>

        <div className='profile__about___photo' style={{ 
        backgroundImage: `url(${photo})`  
        }}>
        </div>

        <div className='profile__about___account'>
          <h2 className='account__name'>Dev júnior</h2>
          <span className='account__reference'>@devjunior</span>
          {props.following === true ? 
          <button className='btn__unfollow' onClick={() => props.onClick(false)}>Unfollow</button> 
          :<button className='btn__follow' onClick={() => props.onClick(true)}>Follow</button>}
        </div>

      </div>

      <div className='profile__description'>
        <h3 className='description__origin'>Bahia, Brasil</h3>
        <p className='description__text'>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua...</p>
      </div>

    </div>
  )
}
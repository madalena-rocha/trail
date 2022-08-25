
import adicionarLocal from '../../assets/images/adicionar-local.png'
import circle from '../../assets/images/circle.svg'
import './style.css'
import photo from '../../assets/images/photo-perfil.jpg'


export default function Profile(props) {
    return (
       <section className="profile">
            <div className="information"> 
                <img className="imgProfile" src={photo} alt="" />

                <div className="profile_bio">
                    <p className="name">Dev júnior</p>
                    <p className="user">@devjunior</p>
                    {props.following == true ? <button className="btn-2" onClick={() => props.onClick(false)}>Unfollow</button> : <button className="btn" onClick={() => props.onClick(true)}>Follow +</button>}
                </div>   
            </div>
            <div className="bio">
              <p className="title">Bahia, Brasil</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>  
            </div>

            <div>
                <div className="places">
                    <p>Lugares visitados</p>
                </div>
                
                <div className="places__photos">
                    <img className="add" src={adicionarLocal}/>
                    <img className="img" src={circle}/>
                    <img className="img" src={circle} />
                    <img className="img" src={circle} />
                    <img className="img" src={circle} />
                </div>
            </div>
       </section>
    )
}
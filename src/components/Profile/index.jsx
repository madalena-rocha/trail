import foto from '../../assets/images/imgProfile.png'
import adicionarLocal from '../../assets/images/adicionar-local.png'
import fotoLocal from '../../assets/images/foto-local.png'
import './style.css'

export default function Profile() {
    return (
       <section className="profile">
            <div className="information"> 
                <img className="imgProfile" src={foto} alt="" />

                <div className="profile_bio">
                    <p className="name">Dev júnior</p>
                    <p className="user">@devjunior</p>
                    <button className="btn">Follow +</button>    
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
                    <img className="img" src={fotoLocal}/>
                    <img className="img" src={fotoLocal} />
                    <img className="img" src={fotoLocal} />
                    <img className="img" src={fotoLocal} />
                </div>
            </div>
       </section>

       
    )
}
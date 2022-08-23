import foto from '../../assets/images/imgProfile.png'
import adicionarLocal from '../../assets/images/adicionar-local.png'
import fotoLocal from '../../assets/images/foto-local.png'
import './style.css'

export default function Profile() {
    return (
       <section className="profile">
            <div className="informações"> 
                <img className="imgProfile" src={foto} alt="" />

                <div className="profile_bio">
                    <p className="nome">Dev júnior</p>
                    <p className="usuário">@devjunior</p>
                    <button className="btn">Follow +</button>    
                </div>
                
            </div>
            <div className="bio">
              <p className="título">Bahia, Brasil</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>  
            </div>

            <div className="destaques">
                <div className="lugares">
                    <p>Lugares visitados</p>
                </div>
                
                <div className="locais_fotos">
                    <img className="adicionar" src={adicionarLocal}/>
                    <img className="img" src={fotoLocal}/>
                    <img className="img" src={fotoLocal} />
                    <img className="img" src={fotoLocal} />
                    <img className="img" src={fotoLocal} />
                </div>
            </div>
       </section>

       
    )
}
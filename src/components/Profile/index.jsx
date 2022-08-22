import photo from '../../assets/images/imgProfile.png'
import addLocation from '../../assets/images/add-location.png'
import photoLocation from '../../assets/images/photo-location.png'
import './style.css'

export default function Profile() {
    return (
       <section className="profile">
            <div className="information"> 
                <img className="img__profile" src={photo} alt="" />

                <div className="profile__bio">
                    <p className="name">Dev júnior</p>
                    <p className="user">@devjunior</p>
                    <button className="btn">Follow +</button>    
                </div>
                
            </div>
            <div className="bio">
              <p className="title">Bahia, Brasil</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>  
            </div>

            <div className="highlights">
                <div className="places">
                    <p>Lugares visitados</p>
                </div>
                
                <div className="places__photos">
                    <img className="add" src={addLocation} />
                    <img className="img" src={photoLocation} />
                    <img className="img" src={photoLocation} />
                    <img className="img" src={photoLocation} />
                    <img className="img" src={photoLocation} />
                </div>
            </div>
       </section> 
    )
}
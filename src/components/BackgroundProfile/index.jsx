import Gradient from '../Gradient'
import './style.css'
import capa from '../../assets/images/capa.png'

export default function BackgroundProfile () {
    return (
        <section className="background__profile">
            <div className='profile__img'>
                <img src={capa} alt="" />
            </div>
        </section>
    )
}
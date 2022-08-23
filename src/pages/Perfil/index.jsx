
import './styles.css' 
import Profile from '../../components/Profile'
import BackgroundProfile from '../../components/BackgroundProfile'


export default function Perfil () {
    return (

        <div className="container">
            <BackgroundProfile/>
            <Profile/>
        </div>
    ) 
}
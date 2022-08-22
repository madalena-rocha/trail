
import './styles.css' 
import Profile from '../../components/Profile'
import FrontCover from '../../components/FrontCover'

export default function Perfil () { /* nome da função em português, trocar para inglês, mas não pode ser Profile, pois já está sendo utilizado */
    return (

        <div className="container">
            <FrontCover/>
            <Profile/>
        </div>
    ) 
}
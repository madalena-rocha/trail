import './style.css';
import { BsArrowLeftCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const ContainerAccess = ({children}) => {

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');}

  return (
    <div className="container__access">
      <button onClick={handleHome} className='access__btn___return'>
        <BsArrowLeftCircle/>
      </button>
      {children}
    </div>
  )
}

export default ContainerAccess;
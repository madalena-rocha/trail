import './style.css';
import {IoMdCloseCircleOutline} from 'react-icons/io'

const ModalPost = (props) => {
  return (
    <div className='modal__post'>
          <div className='modal__post___body'>

            <div className='modal__post___item' style={{ 
              backgroundImage: `url(${props.user.image})`  
              }}>
            </div>

            <div className='modal__post___contents'>
            <div className='modal__post___profile'>
              <img className='modal__post___photo' src={props.user.perfil_photo} alt="" />
              <div className='modal__post___info'>
                <span>{props.user.username}</span>
                <br />
                <span>{props.user.date}</span>
              </div>
            </div>

              <p className='modal__post___text'>{props.user.text}</p>

              <div className='modal__post___comments'></div>
              <button className='modal__post___btn' onClick={() => props.setShowModal(false)}>
                <IoMdCloseCircleOutline/>
              </button>
            </div>

          </div>
        </div>
  )
}

export default ModalPost;
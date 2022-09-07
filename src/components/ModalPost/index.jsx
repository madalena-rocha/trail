import './style.css';
import Comments from '../comments/Comments';
import {IoMdCloseCircleOutline} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';


const ModalPost = (props) => {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate('/profile');}
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
                  <span onClick={handleProfile} >{props.user.username}</span>
                  <br />
                  <span>{props.user.date}</span>
                </div>
              </div>

              <p className='modal__post___text'>{props.user.text}</p>
              
              <div className='modas__post___like'>
                <AiOutlineHeart/>
              </div>

              <h3 className="comments-title">Comentários</h3>

              <div className='modal__post___comments'>
                  <Comments
                  commentsUrl="http://localhost:3004/comments"
                  currentUserId="1"
                />
              </div>
              <button className='modal__post___close' onClick={() => props.setShowModal(false)}>
                <IoMdCloseCircleOutline/>
              </button>
            </div>

          </div>
        </div>
  )
}

export default ModalPost;
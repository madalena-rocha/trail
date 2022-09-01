import './style.css'
import {IoMdCloseCircleOutline} from 'react-icons/io'

const ModalBanner = (props) => {

  console.log(props)

  return (
    <div className='modal__banner'>
      <div className='modal__banner___body'>
        <div className='modal__banner___img'>
          <img src={props.content.image} alt={props.content.alt} />
        </div>
        <div className='modal__banner___contents'>
          <h4 className='modal__banner___title'>{props.content.location}</h4>
          <div className='modal__banner___line'></div>
          <p className='modal__banner___text'>{props.content.text}</p>
        </div>
        <button className='modal__banner___btn' 
          onClick={() => props.setShowModal(false)}>
          <IoMdCloseCircleOutline/>
        </button>
      </div>
    </div>
  )
}

export default ModalBanner;
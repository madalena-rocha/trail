import './style.css'
import photo from '../../assets/images/photo-perfil.jpg'
import {BiDownArrow, BiCommentDetail} from 'react-icons/bi'
import {AiOutlineEye} from 'react-icons/ai'

const Posts = () => {
  return (
    <section className='main__posts'>

      <div className='posts__filter'>
        <button className='filter__dropdown'>Filtro
          <BiDownArrow/>
        </button>
      </div>

      <div className='posts__row'>

        <div className='row__card'>
          <div className='card__nick'>
            <img className='card__nick___photo' src={photo} alt="" />
            <div className='card__nick___info'>
              <span className='info__name'>@devjunior</span>
              <br />
              <span className='info__date'>12/08/2022</span>
            </div>
          </div>
          
          <div className='card__intro'>
            <h4 className='card__intro___location'>Machu Picchu - Peru</h4>
            <p className='card__intro___text'>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua...</p>
            
            <div className='intro__view'>
              <button href='#' className='intro__view___btn'>Ver mais</button>
              
              <div className='intro__icons'>
                <AiOutlineEye/>
                <BiCommentDetail/>
              </div>
            </div>
          
          </div>       
        </div>

      </div>

      <div className='posts__load'>
        <button className='posts__load___btn'>Carregar mais...</button>
      </div>
  
    </section>
  );
}

export default Posts;
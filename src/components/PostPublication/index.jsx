import './style.css'
import publicationItem from '../../assets/images/capa.png'
import carouselItem from '../../assets/images/_peru.svg'
import {BiCommentDetail} from 'react-icons/bi'
import {FaRegHeart} from 'react-icons/fa'

const PostPublication = () => {
  return (
    <div className="post__publication">

      <div className='publication__box'>
        <div className="publication__box___item" 
          style={{ 
            backgroundImage: `url(${publicationItem})`  
          }}>
        </div>

        <div className='publication__box___icons'>
          <BiCommentDetail/>
          <FaRegHeart/>
        </div>

        <p className='publication__box___text'>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Dignissim enim sit amet venenatis urna. Id ornare 
          arcu odio ut sem. Interdum velit euismod in pellentesque massa placerat 
          duis. Amet purus gravida quis blandit. Faucibus turpis in eu mi bibendum. 
          Maecenas sed enim ut sem viverra aliquet. Fermentum dui faucibus in ornare 
          quam. Euismod lacinia at quis risus sed vulputate odio.
        </p>
      </div>

      <ul className='publication__carousel'>
          <li className='carousel__iten' 
            style={{backgroundImage: `url(${carouselItem})`}}>
          </li>
          <li className='carousel__iten' 
            style={{backgroundImage: `url(${carouselItem})`}}>
          </li>
          <li className='carousel__iten' 
            style={{backgroundImage: `url(${carouselItem})`}}>
          </li>
          <li className='carousel__iten' 
            style={{backgroundImage: `url(${carouselItem})`}}>
          </li>
          <li className='carousel__iten' 
            style={{backgroundImage: `url(${carouselItem})`}}>
          </li>
      </ul>
    </div>
  )
}

export default PostPublication;
import './style.css'
import {GrLocation} from 'react-icons/gr'

const PostInfo = () => {
  return (

    <div className='post__info'>
      <div className='post__info___photo'></div>
      <div className='post__info___profile'>
        <span className=''>@Devjunior</span>
        <span className=''> | 28 jul 2022</span>
      </div>
      <p className='post__info___location'><GrLocation/>Destino</p>
    </div>

  )
}

export default PostInfo;
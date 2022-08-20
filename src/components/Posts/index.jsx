import './style.css'
import icon from '../../assets/images/Icon-filter.svg'
import like from '../../assets/images/Heart.svg'
import comment from '../../assets/images/Comment.svg'

const Posts = () => {
  return (
    <section className='main__posts'>

      <div className='posts__filter'>
        <button className='filter__dropdown'>Filtro
          <img className='filter__icon' src={icon} alt=''></img>
        </button>
      </div>

      <div className='posts__row'>

        <div className='row__box'>
          <div className='box__perfil'>
            <div className='perfil__photo'></div>
            <div className='perfil__info'>
              <span className='info__name'>@devjunior</span>
              <br />
              <span className='info__date'>12/08/2022</span>
            </div>
          </div>

          <div className='box__text'>
            <span className='text__localization'>Bahia, Brasil</span>
            <p className='text__contents'>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua...</p>

            <div className='text__icons'>
              <img className='icons__comments' src={comment} alt="Ícone de comentários." />
              <img className='icons__like' src={like} alt="Ícone de like." />
            </div>
          </div>  
        </div>

      </div>

      <div className='posts__load'>
        <button className='load__btn'>Carregar mais...</button>
      </div>
  
    </section>
  );
}

export default Posts;
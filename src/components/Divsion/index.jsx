import './style.css'

const Divsion = ({title}) => {
  return (
      <div className='posts__divsion'>
        <h4 className='divsion__title'>{title}</h4>
        <span className='divsion__line'></span>
      </div>
  );
}

export default Divsion;
import './style.css'

const Division = ({title}) => {
  return (
      <div className='posts__division'>
        <h4 className='division__title'>{title}</h4>
        <span className='division__line'></span>
      </div>
  );
}

export default Division;
import './style.css'
import sidney from '../../assets/images/_sydney.svg';
import bolivia from '../../assets/images/_bolivia.svg';
import peru from '../../assets/images/_peru.svg';
import berlim from '../../assets/images/_berlim.svg';
import rio from '../../assets/images/_rio.svg';
import Gradient from '../../components/Gradient';

const Banner = () => {
  return (
    <section className='main__banner'>
      
      <Gradient/>

      <div className='banner__card'>
        <img className='banner__card___img' src={sidney} alt="Foto do banner Sydney - Austrália" />
        <h2 className='card__country'>Sydney - Austrália</h2>
      </div>

      <div className='banner__card'>
        <img className='banner__card___img' src={bolivia} alt="Foto do banner Sajama - Bolívia" />
        <h2 className='card__country'>Sajama - Bolívia</h2>
      </div>

      <div className='banner__card'>
        <img className='banner__card___img' src={peru} alt="Foto do banner Machu Picchu - Peru" />
        <h2 className='card__country'>Machu Picchu - Peru</h2>
      </div>

      <div className='banner__card'>
        <img className='banner__card___img' src={berlim} alt="Foto do banner Berlim - Alemanha" />
        <h2 className='card__country'>Berlim - Alemanha</h2>
      </div>

      <div className='banner__card'>
        <img className='banner__card___img' src={rio} alt="Rio de Janeiro - Brasil" />
        <h2 className='card__country'>Rio de Janeiro - Brasil</h2>
  </div>

    </section>
  );
}

export default Banner;
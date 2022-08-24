import './style.css'
import sidney from '../../assets/images/sydney.svg';
import bolivia from '../../assets/images/bolivia.svg';
import peru from '../../assets/images/peru.svg';
import berlim from '../../assets/images/berlim.svg';
import rio from '../../assets/images/rio.svg';
import Gradient from '../../components/Gradient';

const Banner = () => {
  return (
    <section className='main__banner'>
      
      <Gradient/>

      <div className='banner__card'>
        <img className='banner__card___img' src={sidney} alt="" />
        <h2 className='card__country'>Sidney</h2>
      </div>

      <div className='banner__card'>
        <img className='banner__card___img' src={bolivia} alt="" />
        <h2 className='card__country'>Bolivia</h2>
      </div>

      <div className='banner__card'>
        <img className='banner__card___img' src={peru} alt="" />
        <h2 className='card__country'>Peru</h2>
      </div>

      <div className='banner__card'>
        <img className='banner__card___img' src={berlim} alt="" />
        <h2 className='card__country'>Berlim</h2>
      </div>

      <div className='banner__card'>
        <img className='banner__card___img' src={rio} alt="Rio" />
        <h2 className='card__country'>Rio</h2>
  </div>

    </section>
  );
}

export default Banner;
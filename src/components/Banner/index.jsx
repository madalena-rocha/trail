import './style.css'
import sidney from '../../assets/images/Sydney.svg';
import bolivia from '../../assets/images/Bolivia.svg';
import peru from '../../assets/images/Peru.svg';
import berlim from '../../assets/images/Berlim.svg';
import rio from '../../assets/images/Rio.svg';
import Gradient from '../../components/Gradient';

const Banner = () => {
  return (
    <section className='main__banner'>
      
      <Gradient/>

      <div className='banner__box'>
        <img src={sidney} alt="" />
        <span></span>
      </div>

      <div className='banner__box'>
        <img src={bolivia} alt="" />
        <span></span>
      </div>

      <div className='banner__box'>
        <img src={peru} alt="" />
        <span></span>
      </div>

      <div className='banner__box'>
        <img src={berlim} alt="" />
        <span></span>
      </div>

      <div className='banner__box'>
        <img src={rio} alt="" />
        <span></span>
      </div>
    </section>
  );
}

export default Banner;
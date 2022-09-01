import './style.css';
import * as React from 'react';
import Gradient from '../../components/Gradient';
import axios from 'axios';
import ModalBanner from '../ModalBanner';

const Banner = () => {
  const [content, setContent] = React.useState([]);
  const [contents, setContents] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false)

  React.useEffect(() => {
    const getContents = async () => {
      const response = await axios.get('http://localhost:3001/modal_banner');
      setContents(response.data);
    }
    getContents();
  }, [])

  const handleShowModal = (item) => {
    setShowModal(true)
    setContent(item)
  }

  return (
    
    <section className='main__banner'>

      {
        contents.map(item => (
          <div className='banner__card' onClick={() => handleShowModal(item)} key={item.id}>
            <img className='banner__card___img' src={item.image} alt={item.imgAlt} />
            <h2 className='card__country'>{item.location}</h2>
          </div>
        ))
      }

      <Gradient/>
      {showModal && <ModalBanner content={content} setShowModal={setShowModal}/>}
    </section>
  );
}

export default Banner;
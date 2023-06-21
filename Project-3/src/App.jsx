import './App.css'
import movies from './Data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function App() {
  const renderSlides = movies.map((movie) => (
    <div key={movie.id} className='card-div'>
      <img src={movie.image} alt={movie.title} />
      <p className="legend">{movie.title}</p>
    </div>
  ));

  return (
    <div className='cards'>
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} className="carousel-container">
        {renderSlides}
      </Carousel>
    </div>
  )
}

export default App

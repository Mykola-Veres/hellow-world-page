// import axios from 'axios';
import { useEffect, useState } from 'react';
import './Slider.css';

const defaultSlides = [
  'https://images.pexels.com/photos/5926238/pexels-photo-5926238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/8638315/pexels-photo-8638315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/8638314/pexels-photo-8638314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

function Slider() {
  const [slides] = useState(defaultSlides);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setTimeout(lastSlide, 2000);
    return () => {
      clearTimeout(id);
    };
  });

  // useEffect(() => {
  //   axios('https://8nv4v2.sse.codesandbox.io/slides').then(data => {
  //     setSlides(data.data);
  //   });
  // }, []);

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
      return;
    }
    setCurrentSlide(currentSlide - 1);
  }

  function lastSlide() {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide(currentSlide + 1);
  }

  return (
    <div className="sliderContainer">
      <img src={slides[currentSlide]} alt="slide" />
      <button onClick={prevSlide}>{'<'}</button>
      <button onClick={lastSlide}>{'>'}</button>
      <button>{'++'}</button>
    </div>
  );
}

export default Slider;

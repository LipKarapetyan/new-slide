import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../image/2.jpg"
import img2 from "../image/1.jpg"
import img3 from "../image/3.jpg"
function App() {
  const [count, setCount] = useState(0)

  return (
      <Carousel className='slide1'>
                <div className='slider'>
                    <img src={img1} height="400px" width="100px" />
                    
                </div>
                <div>
                    <img src={img2} height="400px" width="100px" />
                   
                </div>
                <div>
                    <img src={img3} height="400px" width="100px"/>
                   
                </div>
            </Carousel>
  )
}

export default App

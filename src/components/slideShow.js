import React from "react";
import image from '../assets/grey.png';
import live from '../assets/live.png';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import { Slide } from 'react-slideshow-image';

class SlideShowComp extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
      }
    }

    render() {
        return(
            <div className="slideshow-container">

            <div className="mySlides fade">
              <img className="photoSlide" src={pic1} />
              <img src={live} className="liveImg"/>
            </div>
            
            <div className="mySlides fade">
              <img className="photoSlide" src={pic2} />
              <img src={live} className="liveImg"/>
            </div>
            
            <div className="mySlides fade">
              <img className="photoSlide" src={pic3} />
              <img src={live} className="liveImg"/>
            </div>
            
            <div className="mySlides fade">
              <img className="photoSlide" src={pic4} />
              <img src={live} className="liveImg"/>
            </div>
            </div>
        );
      }
}
    
export default SlideShowComp;
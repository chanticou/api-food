import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bento1 from "../../assets/images/bento1.jpg";
import bento2 from "../../assets/images/bento2.jpg";
import bento3 from "../../assets/images/bento3.png";
import bento4 from "../../assets/images/bento4.jpg";
import "./Carrousel.css";

export const Carrousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img className="carrousel_image" src={bento1} />
        </div>
        <div>
          <img className="carrousel_image" src={bento2} />
        </div>
        <div>
          <img className="carrousel_image" src={bento3} />
        </div>
        <div>
          <img className="carrousel_image" src={bento4} />
        </div>
      </Carousel>
    </div>
  );
};

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import player1 from "../assets/animations/dataAnalysis.json"
import player2 from "../assets/animations/database.json";
import player3 from "../assets/animations/powerbi.json";
import player4 from "../assets/animations/tools.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>
                I am experienced in using various tools and techniques for data
                analysis, including SQL, Excel, Python and PowerBI. My portfolio
                demonstrates my ability to work with datasets, clean and
                transform data, and perform statistical analysis to extract
                meaningful insights.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'>
                <div className='item'>
                  <Player
                    autoplay
                    loop
                    src={player1}
                    style={{ height: "260px", width: "260px" }}></Player>
                  <h5>Data analysis</h5>
                </div>
                <div className='item'>
                  <Player
                    autoplay
                    loop
                    src={player2}
                    style={{ height: "260px", width: "260px" }}></Player>
                  <h5>SQL/NoSQL</h5>
                </div>
                <div className='item'>
                  <Player
                    autoplay
                    loop
                    src={player3}
                    style={{ height: "260px", width: "260px" }}></Player>
                  <h5>PowerBI</h5>
                </div>
                <div className='item'>
                  <Player
                    autoplay
                    loop
                    src={player4}
                    style={{ height: "260px", width: "260px" }}></Player>
                  <h5>Excel/Python</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  );
};

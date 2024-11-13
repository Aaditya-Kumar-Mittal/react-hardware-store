import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import the CSS file for the slick-carousel library
import "slick-carousel/slick/slick-theme.css"; // Import the theme for slick-carousel
import { Container } from "react-bootstrap"; // Import the Container component from react-bootstrap
import SlideCard from "./SliderCard/SlideCard"; // Import the SlideCard component
import { SliderData } from "../utils/products"; // Import slider data

// SliderHome component that renders a carousel of SlideCard
const SliderHome = () => {
  // Slider settings configuration
  const settings = {
    nav: false, // Disable navigation controls
    infinite: true, // Enable infinite scrolling
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
  };

  return (
    <section className="homeSlide">
      <Container>
        {/* Slider with the configured settings */}
        <Slider {...settings}>
          {/* Mapping through slider data to render individual SlideCard components */}
          {SliderData.map((value, index) => {
            return (
              <SlideCard
                key={index} // Unique key for each slide
                title={value.title} // Title of the slide
                cover={value.cover} // Cover image for the slide
                desc={value.desc} // Description for the slide
              />
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default SliderHome;

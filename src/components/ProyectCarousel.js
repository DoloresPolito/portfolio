import React, { useState } from "react";
import "../App.css";

const ProyectCarousel = function (images) {
  const [currentIndex, setCurrentIndex] = useState(0);

  let slideStyles = {
    // width: "540px",
    // height: "280px",
    // border: "2px",
    // marginBottom: "10px",
    backgroundColor: "lightgrey",
    borderRadius: "5px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${images.images[currentIndex]})`,
    // transition: "all 1.0s",
  };

  const dotsContainerStyles = {
    display: "flex",
    marginLeft:"230px"
  
  };

  const dotsStyles = {
    margin: "0 2px",
    cursor: "pointer",
    fontSize: "30px",
    color: "grey",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="carousel-container">
      <div className="slider-container">
        <div style={slideStyles} className="slides"></div>

     <div style={dotsContainerStyles}>
             <div onClick={goToPrevious}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="30"
              fill="grey"
              class="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>{" "}
          </div>

          {/* {images.images.map((slide, slideIndex) => (
            <div
              style={dotsStyles}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <i class="bi bi-dot"></i>
            </div>
          ))} */}

          <div onClick={goToNext}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="30"
              fill="grey"
              class="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectCarousel;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState } from "react";
import { useEffect } from "react";

const CarouselComponent = ({
  children,
  getCurrentSlide = () => {},
  toggleAutoPlay = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const updateCurrentSlide = index => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    getCurrentSlide(currentSlide);
  }, [currentSlide]);

  return (
    <Carousel
      autoPlay={toggleAutoPlay}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      emulateTouch
      infiniteLoop
      selectedItem={currentSlide}
      onChange={updateCurrentSlide}
      renderIndicator={(onClickHandler, isSelected) =>
        isSelected ? (
          <FiberManualRecordIcon
            onClick={onClickHandler}
            className="cursor-pointer"
            sx={{ width: "15px", height: "15px", color: "#1181B2" }}
          />
        ) : (
          <FiberManualRecordIcon
            onClick={onClickHandler}
            className="cursor-pointer"
            sx={{
              width: "10px",
              height: "10px",
              color: "#D7EEF7",
              borderColor: "#1181B2",
            }}
          />
        )
      }
    >
      {children}
    </Carousel>
  );
};

export default CarouselComponent;

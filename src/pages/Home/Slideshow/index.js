import React from "react";
import Slider from "react-slick";
import { images, sliderSettings } from "./utils";
import { Wrapper } from "./index.styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const SlideShow = () => {
    return (
        <Wrapper>
            <Slider {...sliderSettings}>
                {images.map((x, i) => (
                    <div className="img-container" key={i}>
                        <img alt={x} src={`/images/slideshow/${x}`} />
                    </div>
                ))}
            </Slider>
        </Wrapper>
    );
};

export default React.memo(SlideShow);

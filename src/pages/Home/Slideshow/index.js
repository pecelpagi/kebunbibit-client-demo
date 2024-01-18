import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "../../../stitches.config";
import { images, createCenterPadding, createSlidesToShow } from "./utils";

import "./styles.css";

const Wrapper = styled('div', {
    '@md': {
        marginTop: '25px',
    },
    '& .slick-slide': {
        padding: '0px',
        '@md': {
            padding: '0 10px',
        }
    },
    '& .slick-slide.slick-active img': {
        boxShadow: 'none',
        '@md': {
            boxShadow: '0 1px 4px 0 rgba(0,0,0,0.15)',
        }
    },
    '& .slick-slide .img-container img': {
        borderRadius: '0px',
        '@md': {
            borderRadius: '10px',
        }
    }
});

const SlideShow = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: createCenterPadding(),
        slidesToShow: createSlidesToShow(),
        speed: 1000,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Wrapper>
            <Slider {...settings}>
                {images.map((x, i) => (
                    <div className="img-container" key={i}>
                        <img src={x} />
                    </div>
                ))}
            </Slider>
        </Wrapper>
    );
};

export default React.memo(SlideShow);

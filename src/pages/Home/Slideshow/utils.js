import { MATCH_MEDIA_TYPE, matchMediaChecker } from "../../../utils";

export const images = ['banner-2.jpg', 'banner-1.jpg', 'banner-3.jpg', 'banner-2.jpg', 'banner-1.jpg', 'banner-3.jpg'];

const createSlidesToShow = () => {
    if (matchMediaChecker(MATCH_MEDIA_TYPE.LG)) return 3;
    if (matchMediaChecker(MATCH_MEDIA_TYPE.MD)) return 2;
    if (matchMediaChecker(MATCH_MEDIA_TYPE.SM)) return 1;

    return 1;
}

const createCenterPadding = () => {
    if (matchMediaChecker(MATCH_MEDIA_TYPE.MD)) return "60px";

    return "0px";
}

export const sliderSettings = {
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

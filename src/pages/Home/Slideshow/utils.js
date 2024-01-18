import { MATCH_MEDIA_TYPE, matchMediaChecker } from "../../../utils";

import Img1 from "./images/banner-1.jpg";
import Img2 from "./images/banner-2.jpg";
import Img3 from "./images/banner-3.jpg";

export const images = [Img2, Img1, Img3, Img2, Img1, Img3];

export const createSlidesToShow = () => {
    if (matchMediaChecker(MATCH_MEDIA_TYPE.LG)) return 3;
    if (matchMediaChecker(MATCH_MEDIA_TYPE.MD)) return 2;
    if (matchMediaChecker(MATCH_MEDIA_TYPE.SM)) return 1;

    return 1;
}

export const createCenterPadding = () => {
    if (matchMediaChecker(MATCH_MEDIA_TYPE.MD)) return "60px";

    return "0px";
}
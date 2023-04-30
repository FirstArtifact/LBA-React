import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import SlideBImgXL from '../../assets/images/pexels-rfstudio-3817676-4k.jpg';
import SlideBImgLg from '../../assets/images/pexels-rfstudio-3817676-1080p.jpg';
import SlideBImgMd from '../../assets/images/pexels-rfstudio-3817676-720p.jpg';
import SlideBImgSm from '../../assets/images/pexels-rfstudio-3817676-mobile.jpg';
import React from "react";

const SlideB = () => {

    const theme = useTheme();
    const xlScreenSize = useMediaQuery(theme.breakpoints.only('xl'));
    const lgScreenSize = useMediaQuery(theme.breakpoints.only('lg'));
    const mdScreenSize = useMediaQuery(theme.breakpoints.only('md'));
    const getImgB = () => {
        if (xlScreenSize) {
            return SlideBImgXL;
        }

        if (lgScreenSize) {
            return SlideBImgLg;
        }
        if (mdScreenSize) {
            return SlideBImgMd;
        }
        return SlideBImgSm;
    }

    return (
        <>
            

                <img src={getImgB()} />
        </>
    );
}
export default SlideB;
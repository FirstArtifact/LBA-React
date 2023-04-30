import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import SlideAImgXL from '../../assets/images/pexels-motional-studio-1081685-1440p.jpg';
import SlideAImgLg from '../../assets/images/pexels-motional-studio-1081685-1080p.jpg';
import SlideAImgMd from '../../assets/images/pexels-motional-studio-1081685-720p.jpg';
import SlideAImgSm from '../../assets/images/pexels-motional-studio-1081685-mobile.jpg';
import React from "react";

const SlideA = () => {

    const theme = useTheme();
    const xlScreenSize = useMediaQuery(theme.breakpoints.only('xl'));
    const lgScreenSize = useMediaQuery(theme.breakpoints.only('lg'));
    const mdScreenSize = useMediaQuery(theme.breakpoints.only('md'));
    const getImgA = () => {
        if (xlScreenSize) {
            return SlideAImgXL;
        }

        if (lgScreenSize) {
            return SlideAImgLg;
        }
        if (mdScreenSize) {
            return SlideAImgMd;
        }
        return SlideAImgSm;
    }

    return (
        <>
            <Box sx={{ position: 'relative', width: '100%' }}>
                <Box sx={{
                    position: 'absolute',
                    top: {
                        md: '33%',
                        xs: '33%'
                    },
                    right: '0',
                    left: '0',
                    margin: 'auto',

                }}>
                    <Box sx={{
                        color: 'white',
                        fontSize: {
                            md: '64px',
                            xs: '32px'
                        }
                    }}>
                        Love Black Art
                    </Box>
                    <Box sx={{
                        color: 'white',
                        fontSize: { 
                            md: '32px',
                            xs: '16px'
                        },
                        padding: '12px 0 42px 0'
                    }}>
                        Lorem ipsum dolor sit amet
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#2C79ED',
                                textTransform: 'none',
                                padding: '16px 20px',
                                fontSize: {
                                    md: '24px',
                                    xs: '18px',
                                },
                                fontFamily: 'Open Sans',
                                fontWeight: 'normal',
                                borderRadius: '10px'
                            }}
                        >
                            Join Now
                        </Button>
                    </Box>
                </Box>
                <img src={getImgA()} />
            </Box>
        </>
    );
}
export default SlideA;
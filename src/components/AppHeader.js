import React from 'react';
import Box from '@mui/material/Box'
import { AppBar, Divider, Toolbar, IconButton } from '@mui/material';
import { Facebook, Search, Twitter, YouTube } from '@mui/icons-material';
import HeaderIcon from '../assets/images/Artifact badge no background.png';



const AppHeader = () =>
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='fixed' sx={{ backgroundColor: 'rgba(75, 75, 75, .7)', backdropFilter: 'blur(5px)', opacity: '.8' }}>
            <Toolbar sx={{ width: '100%', justifyContent: 'center', height: '80px', }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '65%',
                    height: '80px',
                    alignItems: 'center',
                    color: '#E7E7E7',
                    fontSize: '16px',
                    opacity: '1'
                }}>
                    <Box
                        sx={{
                            display: 'flex',
                            height: '80%'
                        }}>
                        <img src={HeaderIcon} alt='header-icon' />
                    </Box>
                    <Box sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                        <Box pr='32px'>
                            Home
                        </Box>
                        <Box pr='32px'>
                            About
                        </Box>
                        <Box pr='32px'>
                            Contact
                        </Box>
                        <Box pr='32px'>
                            Blogs
                        </Box>
                        <Box>
                            <IconButton aria-label='search'>
                                <Search sx={{ color: '#E7E7E7', fontSize: '20px' }} />
                            </IconButton>
                        </Box>
                        <Box>
                            <Divider orientation="vertical" flexItem sx={{ borderColor: '#A7A7A7', height: '80px' }} />
                        </Box>
                        <IconButton aria-label='twitter'>
                            <Twitter sx={{ color: '#E7E7E7', fontSize: '20px' }} />
                        </IconButton>
                        <IconButton aria-label='facebook'>
                            <Facebook sx={{ color: '#E7E7E7', fontSize: '20px' }} />
                        </IconButton>
                        <IconButton aria-label='youtube'>
                            <YouTube sx={{ color: '#E7E7E7', fontSize: '20px' }} />
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
    ;

export default AppHeader;
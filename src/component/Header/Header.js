import React, { Component } from 'react'
import '../Header/Header.css';
import { Box, Tabs, Tab, Grid } from "@mui/material";
import logo from '../Assest/Car Wash.png';
import cart from '../Assest/Cart.png';
import bcimg from '../Assest/bc_img.jpg';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import scroll from '../Assest/Group 33943.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export class Header extends Component {
  render() {
    return (
      <Box container>
        <Box component={"img"} src={bcimg} sx={{
          position: 'absolute',
          height: '100vh',
          width: '100%',
          zIndex: '-1',
          opacity: '0.25'
        }} />

        <navbar className="nav-bar" position="static">

          <Toolbar sx={{ color: 'white' }}>
            {/* <Typography variant='h4' fontFamily={'HolidayFree'} color={'black'}>Car Wash</Typography> */}
            <Box className="logo" component={'img'}
              src={logo}
            />

            {/* Navigation Links */}
            <div style={{ flexGrow: 1, textAlign: 'center', color: 'black' }} className='butt'>
              <a className='butt' href='#' >Home</a>
              <a className='butt' href='#'  >Contact</a>
              <a className='butt' href='#' >About Us</a>
              <a className='butt' href='#'  >Pricing</a>
              <a className='butt' href='#'  >Car Rental</a>
            </div>
            {/* Admin and Cart Icons */}
            <div style={{ justifyContent: 'right' }} className='admin-cart'>
              <IconButton style={{ color: 'black' }} aria-label="Admin" >
                <a className='sign-in' href='#'  >SIGN IN</a>
                <PersonOutlineIcon style={{ marginRight: 30 }} />
              </IconButton>
              <IconButton style={{ marginRight: 50, color: '#FF4900' }} aria-label="Shopping Cart">
                <ShoppingCartIcon />
              </IconButton>
            </div>
          </Toolbar>

        </navbar>
        <div>
        <Grid container spacing={2}>
          {/* First Section */}
          <Grid item xs={12} ml={10} md={3} mt={10}>
            {/* Content for the first section */}
            <Box>
              <div className='contain'>
                <Typography className="content" variant='h3' fontFamily={'times new roman'} fontWeight={'bold'}>The shine that lasts</Typography>
                <Typography className="content" variant='h3' fontFamily={'times new roman'} fontWeight={'bold'} color={'#FF4900'}>FOREVER.</Typography>
                <Typography sx={{ textAlign: 'left' }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Typography>
                <Button
                  type="submit"
                  label="Default"
                  variant="contained"
                  fullwidth

                  Height="900px"
                  Top="3414.5px"
                  sx={{ minWidth: 230, ml: 'auto', mt: 1, mb: 2, backgroundColor: "#FF4900" }}
                >
                  BOOK NOW
                </Button>
              </div>
            </Box>
          </Grid>

          {/* Second Section */}
          <Box sx={{
            xs: '12'
          }}>
            <Grid md={6} mt={4} textAlign={'right'}>
              <Box component={"img"} src={cart} sx={{
                position: 'absolute',
                // marginLeft: '30%',
                // textAlign:'right',
                marginLeft: '35%',
                width: '300px',
                height: '500px'


              }} />
              <div>

              </div>
            </Grid>
          </Box>
        </Grid>
        </div>
        <div className='footer'>
          <Box component={"img"} src={scroll} sx={{
            marginTop: '7%',
            width: '320px',
            height: '68px',
            
            
          }} />
        </div>

      </Box>
    )
  }
}
export default Header

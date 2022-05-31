import React,{useState} from 'react'
import './Header.css'
import {   Container, Nav } from 'react-bootstrap';
import Chip from '@mui/material/Chip';
import MessageIcon from '@mui/icons-material/Message';
import { IconButton } from '@material-ui/core';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Card, MenuItem, ClickAwayListener,Button } from '@mui/material';
export const Navbar = () => {
      const[over,setOver]=useState(false)

      

       var togglefunction=()=>{
            document.getElementsByClassName('navbar-links')[0].classList.toggle('active')
       }
     


      var styling={
            fontSize:'20px',
            paddingRight:'30px',
            color:'#644F9C'
          }
  return (
    <div>
          <nav className='navbar'>
                <div className='brand-title' style={{paddingLeft:'80px',color:'#FF6F00'}}>Our Shop</div>

                <a  className='toggle-button' onClick={togglefunction}>
                      <span className='bar'></span>
                      <span className='bar'></span>
                      <span className='bar'></span>

                </a>
                <div className='navbar-links'>
                      <ul>
                            <li><a href=''><Nav.Link style={styling}  active href="#">Home</Nav.Link></a></li>
                            <li><a href=''><Nav.Link style={{paddingRight:'20px',fontSize:'20px'}} active href="#">Category</Nav.Link></a></li>
                            <li><a href=''><Nav.Link style={{paddingRight:'10px',fontSize:'20px'}}  active href="#">Order Review</Nav.Link></a></li>
                            <li><a href=''><Nav.Link style={{paddingRight:'10px',fontSize:'20px'}}  active href="#">Shop</Nav.Link></a></li>
                            <li><a href=''><Nav.Link style={styling} active href="#">Blog</Nav.Link></a></li>
                            <li><a href=''><Nav.Link style={styling} active href="#"><strong><span><IconButton><img src='https://availtrade.com/public/images/Image 6.png'/></IconButton></span><br/>Orders</strong></Nav.Link></a></li>
                           <li><a> <strong><span><IconButton><MessageIcon/></IconButton></span><br/>message</strong></a></li>
                           <li><a><strong><span><IconButton  onMouseOver={()=>setOver(true)} 
                                        ><img src="https://availtrade.com/public/images/Image 4.png" style={{height:'25px'}}/></IconButton></span > <br/>signin & join</strong></a></li>


              

                      </ul>
                </div>


          </nav>

          
          {
            over &&
            <ClickAwayListener onClickAway={() => setOver(false)}>
                 <Card style={{
                      position: 'fixed',
                      width: '300px',
                      height: '300px',
                      top: '50px',
                      marginLeft: '1350px'
                 }} >
                      <p style={{ marginTop: '10px', marginLeft: '60px' }}>Get Started Now</p>
                      <strong><hr /></strong>
                           <Button variant="contained" color="secondary" style={{ width: '200px', marginTop: '20px', marginLeft: '40px' }} ><span><PersonIcon /></span><span>Profile</span></Button>
                      <Button variant="contained" color="info" style={{ width: '200px', marginTop: '20px', marginLeft: '40px' }} >LogIn</Button>
                      <Button variant="contained" color="primary" style={{ width: '200px', marginTop: '20px', marginLeft: '40px' }} ><span><LogoutIcon /></span><span>Logout</span></Button>
                      <br />


                 </Card>
            </ClickAwayListener>


       }
    </div>
  )
}
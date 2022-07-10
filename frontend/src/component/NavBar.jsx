import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link as LinkRouter} from "react-router-dom"
import '../style/navBar.css'
import '../App.css'
import { useSelector } from "react-redux";
import userActions from '../redux/action/userAction';
import { useDispatch } from "react-redux";

import Swal from 'sweetalert2'


const pages = [{
  name: 'Home',
  to:'/index',
},
{
name:'Cities',
to:'/Cities',
},
];
const settings = 
[{
  name: 'Sign Up',
  to:'/SingInPage',
},
{
name:'Log In',
to:'/LogPage',
},
];

const Header = () => {
  const dispatch = useDispatch()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [contador, setContador] = React.useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setContador(contador+1)
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setContador(contador+1)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setContador(contador+1)
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setContador(contador+1)
  };

  const userState = useSelector(store=>store.userReducer.user)
  const userMessage = useSelector(store=>store.userReducer.message)

  function signOutClick() {
    dispatch(userActions.signOutUser())
  }

    React.useEffect(()=>{
    if(contador===0){
        if(userMessage?.success === true){
          Swal.fire({
            title: `${userMessage.message}`,
            text:  'Have a nice day!!',
            imageUrl: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VsY29tZSUyMHNpZ258ZW58MHx8MHx8&w=1000&q=80',
            imageWidth: 550,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        }
      }
    },[userState])

 

  

  return (
    <AppBar position="fixed" className='navbar-color'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <div className='logo'/>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            
                
              {pages.map((page,index) => (
                <LinkRouter key={index}  to={page.to} onClick={handleCloseNavMenu}>
                <MenuItem >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
                </LinkRouter>)
              ) 
              
              
              }
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <div className='logo' />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <LinkRouter
                key={index}
                to={page.to}
                onClick={handleCloseNavMenu}
               
              >
                <Button  sx={{ my: 2, color: 'white', display: 'block' }}>
                {page.name}
                </Button>
              </LinkRouter>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {userState?(
                <Avatar alt="user-login" src={userState.photoUser}/>):
                (<Avatar alt="logo-login" src="https://flyclipart.com/thumb2/login-account-icon-account-login-logn-with-png-935680.png" />)}
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >{userState ? (<LinkRouter
              key='log out'
              to='/'
              onClick={signOutClick}
              >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Log Out</Typography>  
              </MenuItem>
              </LinkRouter>):
              (settings.map((setting) => (
                <LinkRouter
                key={setting.name}
                to={setting.to}
                onClick={handleCloseNavMenu}
                refresh="true"
                >
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.name}</Typography>  
                </MenuItem>
                </LinkRouter>
              )))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;


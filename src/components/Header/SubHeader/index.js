import * as React from 'react';
import style from './style.module.css';
import Tittle from '../../Tittle/index';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';	
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';	
import Button from '@mui/material/Button';
import MoreIcon from '@mui/icons-material/MoreVert';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const pages = ['Home', 'Contact', 'About me', 'Sign Up'];	

export default function SubHeader() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    handleMobileMenuClose();
  };
  const renderMenu = (
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
      {pages.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography textAlign="center" color='black'>{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="black">
          <Badge badgeContent={4} color="error">
          <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="black"
        >
          <Badge badgeContent={17} color="error">
          <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static" sx={{backgroundColor: "white" , height: 94,justifyContent: 'flex-end' ,padding:'0px 100px 0px 50px',paddingBottom:'23px'}}>
        <Toolbar sx={{ alignItems:'flex-end' }}>
        <Box sx={{  display: { xs: 'flex', md: 'none' } ,alignItems:'flex-end' , color:'black'}}>
            <IconButton
              size="large"
              aria-label="open drawer"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{alignItems:'flex-end' }}
            >
              <MenuIcon />
            </IconButton>
          
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
          <Tittle text="Exclusive" className={style.title} />	
          </Typography>

          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , gap:'26px',justifyContent: 'flex-end',position:'relative',left:'50px'}}>	
            {pages.map((page) => (	
              <Button	
                key={page}	
                sx={{ my: 2, color: 'black', display: 'block' ,padding:'0px', margin:'0px' , fontFamily: 'Poppins',fontSize:'16px',lineHeight:'24px',weight:'400px'}}	
              >	
                {page}	
              </Button>	
            ))}	
          </Box>	      
         
        
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex'}}>
          <Search sx={{ display:'flex', justifyContent: 'flex-end',backgroundColor: 'rgb(199 190 190 / 15%)'}}>
          <SearchIconWrapper sx={{ color: 'black'}}>	
              <SearchIcon sx={{ color: 'black'}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ color: 'black' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton size="large" aria-label="show 4 new mails" color="black">
              <Badge badgeContent={4} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="black"
            >
              <Badge badgeContent={17} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } ,color:'black',vertical:'bottom'}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
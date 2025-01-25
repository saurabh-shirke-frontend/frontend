import './NavBar.css'
import Logo from '../Component/Images/logo.png'
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import i18n from '../i18n';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null)
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuLabels = [
    {name:'LANG1',value:'en'},
    {name:'LANG2',value:'ma'},
    {name:'LANG3',value:'hi'},
    {name:'LANG4',value:'fr'},
    {name:'LANG5',value:'ar'}
  ]

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll Down
      setShowNavBar(false);
      console.log("1")
    } else if(window.scrollY < lastScrollY || window.scrollY > 0) {
      // Scroll Up
      setShowNavBar(true);
      console.log("2")
    }
    // eslint-disable-next-line 
    setLastScrollY(window.scrollY); // Update last scroll position
  };

  // Add and remove the scroll event listener
  useEffect(() => {
    // console.log("window.scrollY",window.scrollY,"lastScrollY",lastScrollY)
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line 
  }, [lastScrollY]); // Dependency on lastScrollY to compare the scroll positions

  const handleClick = (event) => {
    console.log("The event ", event.currentTarget)
    setAnchorEl(event.currentTarget);

  }

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleNavClick = (path) => {
    navigate(path);  // Navigate to the specified path
  }

  return (
    <div className={`navbar ${showNavBar ? 'visible' : 'hidden'}`}>
      <img src={Logo} height={'100%'} alt='logo' style={{cursor:'pointer'}} onClick={()=>handleNavClick('/')} />
      <h1 style={{fontWeight:1200, cursor:'pointer'}} onClick={()=>handleNavClick('/')} >{t('logo')}</h1>
      <div className='navbar-right'>
        {[t('nav1'), t('nav2'), t('nav3'), t('nav4')].map((item, index) => (
          <div className='nav-item with-border'
          key={index}>
          <h3 className='logo-style' style={{ 
           fontSize: '1rem' }}
           onClick={() => handleNavClick(index === 1 ? '/product' : index === 3 ? '/login' :'#')}
           key={index}>
          {item}
        </h3>
        </div>
        ))}
        <IconButton onClick={handleClick} style={{ marginLeft: '2rem', color: 'wheat' }}>
          <LanguageIcon style={{ fontSize: '1.5rem' }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {
            menuLabels.map((label)=>(
              <MenuItem onClick={() => handleLanguage(label.value)}>{t(label.name)}</MenuItem>
            ))
          }
        </Menu>
      </div>
    </div>
  )
}
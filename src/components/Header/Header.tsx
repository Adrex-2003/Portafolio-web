import React, { useState } from 'react';
import { Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledAppBar, StyledToolbar, NavLinks, MobileMenuButton, MobileMenu } from './Header.styles';
import type { HeaderProps } from './Header.types';
import fotoPerfil from '../../assets/images/logo.png';

const Header: React.FC<HeaderProps> = ({ links }) => {
  const defaultLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const navLinks = links || defaultLinks;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    handleCloseMenu();
  };

  return (
    <StyledAppBar position="sticky">
      <StyledToolbar>
        <img
          src={fotoPerfil}
          alt="Foto de perfil"
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
        />

        <NavLinks>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              color="primary"
              onClick={() => handleScroll(link.href)}
            >
              {link.label}
            </Button>
          ))}
        </NavLinks>

        <MobileMenuButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenMenu}
        >
          <MenuIcon />
        </MobileMenuButton>

        <MobileMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {navLinks.map((link) => (
            <MenuItem key={link.href} onClick={() => handleScroll(link.href)}>
              {link.label}
            </MenuItem>
          ))}
        </MobileMenu>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;

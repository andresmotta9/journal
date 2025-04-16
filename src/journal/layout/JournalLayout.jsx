import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';
import { useState } from 'react';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  return (
    <Box
      sx={{ display: 'flex' }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      <SideBar
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        mobileOpen={mobileOpen}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

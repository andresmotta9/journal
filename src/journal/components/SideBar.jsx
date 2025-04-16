import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { SideBarItem } from './';

export const SideBar = ({
  drawerWidth,
  handleDrawerTransitionEnd,
  handleDrawerClose,
  mobileOpen,
}) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  const drawer = (
    <>
      <Toolbar>
        <Typography variant="h6" component="div">
          {displayName}
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {notes.map((note) => (
          <SideBarItem key={note.id} {...note} />
        ))}
      </List>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { xs: 0, sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        slotProps={{
          root: {
            keepMounted: true,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

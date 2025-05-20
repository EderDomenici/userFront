import { Box, Toolbar } from '@mui/material';
import CustomAppBar from './AppBar';
import DynamicSidebar from './DynamicSidebar';
import { useState } from 'react';

const DRAWER_WIDTH = 50;
const COLLAPSED_WIDTH = 72;

export default function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const drawerWidth = drawerOpen ? DRAWER_WIDTH : COLLAPSED_WIDTH;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CustomAppBar onMenuToggle={handleDrawerToggle} drawerWidth={drawerWidth} />

      <DynamicSidebar mobileOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle} />

      <Box
        component="main"
        sx={(theme) => ({
          flexGrow: 1,
          px: 3,
          py: 1, // 
          ml: { sm: `${drawerWidth}px` }, 
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
          }),
          bgcolor: 'background.default',
          color: 'text.primary',
          mt: 8, 
        })}
      >
        <Toolbar sx={{ minHeight: '48px !important' }} /> 
        {children}
      </Box>
    </Box>
  );
}
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  styled
} from '@mui/material';
import {
  Dashboard,
  Build,
  People,
  School,
  Analytics,
  LiveTv,
  ChevronLeft,
  Menu
} from '@mui/icons-material';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: theme.drawerWidth,
    borderRight: 'none',
    borderRadius: '0 16px 16px 0',
    boxShadow: theme.shadows[4],
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const MenuItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '12px',
  margin: '4px 8px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    transform: 'translateX(5px)',
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.contrastText,
    }
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      color: theme.palette.primary.contrastText,
    }
  }
}));

export default function DynamicSidebar({ mobileOpen, handleDrawerToggle }) {
  return (
    <>
      <StyledDrawer
        variant="permanent"
        open={mobileOpen}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: mobileOpen ? 240 : 72,
            overflowX: 'hidden',
          },
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
          {mobileOpen ? (
            <ChevronLeft onClick={handleDrawerToggle} sx={{ cursor: 'pointer' }} />
          ) : (
            <Menu onClick={handleDrawerToggle} sx={{ cursor: 'pointer' }} />
          )}
        </Toolbar>

        <List>
          {[
            { text: 'App', icon: <Dashboard /> },
            { text: 'Oficinas', icon: <Build /> },
            { text: 'SubUsuário', icon: <People /> },
            { text: 'Analytics', icon: <Analytics /> },
            { text: 'Professor', icon: <School /> },
            { text: 'Transmissão', icon: <LiveTv /> }
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <MenuItemButton>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  {item.icon}
                </ListItemIcon>
                {mobileOpen && <ListItemText primary={item.text} />}
              </MenuItemButton>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </>
  );
}
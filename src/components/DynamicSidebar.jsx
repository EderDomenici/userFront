import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  styled,
  css
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
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    position: 'relative',
    height: '100vh',
    borderRight: 'none',
    borderRadius: '0 16px 16px 0',
    boxShadow: theme.shadows[4],
    transition: theme.transitions.create(
      ['width', 'background-color', 'color', 'box-shadow'], 
      {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }
    ),
    overflowX: 'hidden',
    bgcolor: 'background.paper',
    color: 'text.primary',
  },
}));

const MenuItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '12px',
  margin: '4px 8px',
  transition: theme.transitions.create(
    ['background-color', 'transform', 'color'], 
    {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }
  ),
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    transform: 'translateX(5px)',
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.contrastText,
      transition: theme.transitions.create('color', {
        duration: theme.transitions.duration.standard,
      }),
    }
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      color: theme.palette.primary.contrastText,
    }
  }
}));

const menuItems = [
  { text: 'App', icon: <Dashboard />, path: '/app' },
  { text: 'Alunos', icon: <People />, path: '/alunos' },
  { text: 'Oficinas', icon: <Build />, path: '/oficinas' },
  { text: 'SubUsuário', icon: <People />, path: '/subusuarios' },
  { text: 'Analytics', icon: <Analytics />, path: '/analytics' },
  { text: 'Professor', icon: <School />, path: '/professores' },
  { text: 'Transmissão', icon: <LiveTv />, path: '/transmissao' }
];

export default function DynamicSidebar({ mobileOpen, handleDrawerToggle }) {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledDrawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true
      }}
      sx={{
        display: { xs: 'block', sm: 'block' },
        '& .MuiDrawer-paper': {
          width: mobileOpen ? drawerWidth : 72,
          transition: theme.transitions.create(
            ['width', 'background-color'], 
            {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.standard,
            }
          ),
        },
      }}
    >
      <Toolbar 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          py: 3,
          transition: theme.transitions.create('background-color'),
        }}
      >
        {mobileOpen ? (
          <ChevronLeft 
            onClick={handleDrawerToggle} 
            sx={{ 
              cursor: 'pointer',
              transition: theme.transitions.create('transform'),
              '&:hover': {
                transform: 'scale(1.2)'
              }
            }} 
          />
        ) : (
          <Menu 
            onClick={handleDrawerToggle} 
            sx={{ 
              cursor: 'pointer',
              transition: theme.transitions.create('transform'),
              '&:hover': {
                transform: 'scale(1.2)'
              }
            }} 
          />
        )}
      </Toolbar>

      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem 
            key={text} 
            disablePadding
            sx={{
              transition: theme.transitions.create('opacity'),
            }}
          >
            <MenuItemButton
              selected={location.pathname.startsWith(path)}
              onClick={() => navigate(path)}
            >
              <ListItemIcon 
                sx={{ 
                  minWidth: '40px',
                  transition: theme.transitions.create('color'),
                  color: 'text.secondary',
                }}
              >
                {icon}
              </ListItemIcon>
              {mobileOpen && (
                <ListItemText 
                  primary={text} 
                  primaryTypographyProps={{
                    transition: theme.transitions.create('opacity'),
                  }}
                />
              )}
            </MenuItemButton>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
}
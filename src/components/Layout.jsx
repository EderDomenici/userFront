import { 
  Box,
  CssBaseline,
  Toolbar,
  styled,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import DynamicSidebar from './DynamicSidebar';

// Container principal com bordas arredondadas
const RoundedBox = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
}));

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      
    </Box>
  );
}
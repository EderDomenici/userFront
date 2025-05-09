import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/public/Login';
import TestLayout from './pages/protected/TestLayout';
import ThemeToggleButton from './components/ThemeToggleButton'; // Nosso botão de toggle
import { Box, Typography } from '@mui/material';
import { useThemeMode } from './context/ThemeContext';

function App() {
  const { mode } = useThemeMode(); // Apenas pra exibir o modo atual, opcional

  return (
    <Router>
      <Box sx={{ p: 2 }}>
        {/* Exemplo de status e botão de toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Typography variant="body1">
            Tema atual: <strong>{mode}</strong>
          </Typography>
          <ThemeToggleButton />
        </Box>

        <Routes>
          <Route path="/login" element={<Login />} />  
          <Route path="/TestLayout" element={<TestLayout />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
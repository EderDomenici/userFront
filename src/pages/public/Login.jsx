// src/pages/public/Login.jsx

import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import useLogin from '../../hooks/useLogin';
import { useAuth } from '../../context/AuthContext';
import ThemeToggleButton from '../../components/ThemeToggleButton'; // Importa botão global
import { useThemeMode } from '../../context/ThemeContext'; // Opcional: só se quiser exibir o modo

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useLogin();
  const { login: authLogin } = useAuth();  
  const navigate = useNavigate(); // Agora pode redirecionar

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleCloseSnackbar = (_, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setSnackbar({
        open: true,
        message: 'Login ou Senha Ausente(s)',
        severity: 'error',
      });
      return;
    }

    const { data, error } = await login(email, password);

    if (error) {
      setSnackbar({
        open: true,
        message: error,
        severity: 'error',
      });
      return;
    }

    authLogin(data.token);
    navigate('/TestLayout'); // Redireciona após login

    setSnackbar({
      open: true,
      message: 'Login realizado com sucesso!',
      severity: 'success',
    });
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
        p: 2,
        position: 'relative',
      }}
    >
      {/* Botão de tema global no topo direito */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      >
        <ThemeToggleButton />
      </Box>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: '12px',
          bgcolor: 'background.paper',
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          align="center"
        >
          Painel do Professor
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<LoginIcon />}
              sx={{ mt: 3 }}
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </Box>
        </Box>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

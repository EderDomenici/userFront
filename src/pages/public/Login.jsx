import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
} from '@mui/material';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import useLogin from '../../hooks/useLogin';
import { useAuth } from '../../context/AuthContext';


export default function LoginPage({ toggleTheme, mode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useLogin();
  const { login: authLogin } = useAuth();  // função para salvar token no contexto
  //const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', // 'success' | 'error'
  });


  function handleCloseSnackbar(_, reason) {
    if (reason === 'clickaway') return;
    setSnackbar({ ...snackbar, open: false });
  }
  

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
    console.log(data);
    authLogin(data.token);  // Supondo que o token veio como res.data.token
    //navigate('/dashboard'); // Redireciona para dashboard

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
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      >
        <Tooltip title={`Alternar para modo ${mode === 'light' ? 'escuro' : 'claro'}`}>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Tooltip>
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

        <Box component='form' onSubmit={handleSubmit} noValidate>
          <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />

            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e)=>setPassword(e.target.value)}
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
            >
              Entrar
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

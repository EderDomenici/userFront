import { useTheme, Typography, Box } from '@mui/material';
import Layout from '../../components/Layout';

export default function TestLayout() {
  const theme = useTheme(); // Adicione esta linha para acessar o tema

  return (
    <Layout>
      <Box
        sx={{
          p: 3,
          bgcolor: 'background.paper', // Usa a cor do tema
          minHeight: '100vh'
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 3,
            color: 'text.primary' // Garante que use a cor de texto do tema
          }}
        >
          Conteúdo do Dashboard (Modo: {theme.palette.mode})
        </Typography>
        
        {/* Componente de teste para visualizar as cores */}
        <Box
          sx={{
            p: 2,
            bgcolor: 'background.default',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1
          }}
        >
          <Typography color="text.secondary">
            Esta caixa usa cores do tema atual:
            <br />
            Fundo: {theme.palette.background.default}
            <br />
            Texto primário: {theme.palette.text.primary}
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
}
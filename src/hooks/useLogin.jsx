import { useState } from 'react';
import axios from 'axios';

export default function useLogin() {
  const [loading, setLoading] = useState(false);

  async function login(email, password) {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/user/login', {
        email: email,
        senha_hash: password,
      });
      setLoading(false);
      return { data: response.data, error: null };
    } catch (error) {
      setLoading(false);
      return { data: null, error: error.response?.data?.message || 'Erro de conexão' };
    }
  }

  return { login, loading };
}
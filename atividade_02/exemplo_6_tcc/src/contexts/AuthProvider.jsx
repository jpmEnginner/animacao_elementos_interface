import { createContext, useContext, useState } from 'react';
import api from '../utils/axios-client';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('AUTH_USER') || 'null')
  );
  const [token, _setToken] = useState(
    localStorage.getItem('ACCESS_TOKEN') || ''
  );

  const setToken = (tok) => {
    _setToken(tok);
    if (tok) localStorage.setItem('ACCESS_TOKEN', tok);
    else     localStorage.removeItem('ACCESS_TOKEN');
  };

  const login = async (email, senha) => {
    const { data } = await api.post('/login', { email, senha });
    setToken(data.token);
    setUser(data.usuario);
    localStorage.setItem('AUTH_USER', JSON.stringify(data.usuario));
    return data.usuario;
  };

  const logout = async () => {
    await api.post('/logout').catch(() => {});
    setToken('');
    setUser(null);
    localStorage.removeItem('AUTH_USER');
  };

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
 // hooks/useUsers.js
import { useState, useEffect } from 'react';
import { mockUsuarios } from '../data/mockData';

export function useUsers() {
  const [usuariosData, setUsuariosData] = useState([]);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const [pageState, setPageState] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Carregar usuários
  const loadUsuarios = async () => {
    setPageState('loading');
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!mockUsuarios || mockUsuarios.length === 0) {
        setPageState('empty');
        return;
      }
      
      setUsuariosData(mockUsuarios);
      setUsuariosFiltrados(mockUsuarios);
      setPageState('table');
    } catch (error) {
      setErrorMessage(error.message || 'Erro ao carregar usuários');
      setPageState('error');
    }
  };

  // Filtrar usuários
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setUsuariosFiltrados(usuariosData);
    } else {
      const filtered = usuariosData.filter(usuario =>
        usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setUsuariosFiltrados(filtered);
    }
  }, [searchTerm, usuariosData]);

  // Carregar dados iniciais
  useEffect(() => {
    loadUsuarios();
  }, []);

  // Excluir usuário
  const excluirUsuario = async (usuarioId, nomeUsuario) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const updatedUsuarios = usuariosData.filter(user => user.id !== usuarioId);
      setUsuariosData(updatedUsuarios);
      alert(`Usuário "${nomeUsuario}" excluído com sucesso!`);
    } catch (error) {
      alert('Erro ao excluir usuário: ' + error.message);
    }
  };

  // Editar usuário
  const editarUsuario = async (editingUser) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const updatedUsuarios = usuariosData.map(user =>
        user.id === editingUser.id ? editingUser : user
      );
      setUsuariosData(updatedUsuarios);
      alert('Usuário editado com sucesso!');
    } catch (error) {
      alert('Erro ao editar usuário: ' + error.message);
      throw error;
    }
  };

  return {
    usuariosData,
    usuariosFiltrados,
    pageState,
    errorMessage,
    searchTerm,
    setSearchTerm,
    loadUsuarios,
    excluirUsuario,
    editarUsuario
  };
}
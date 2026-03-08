import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './UserList.styles';
import EditUserModal from '../EditUserModal/EditUserModal';
import api from '../../utils/axios-client';

export default function UserList({ onBack }) {
  const [users, setUsers]       = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [search, setSearch]     = useState('');
  const [selected, setSelected] = useState(null);
  const [saving, setSaving]     = useState(false);

  const mapData = (item) => ({
    id:     item.id,
    nome:   item.nome ?? '—',
    email:  item.email ?? '—',
    role:   convertRoleToFront(item.tipo_usuario),
    status: convertStatusToFront(item.status_conta),
  });


  const convertRoleToFront = (tipo) => {
    switch ((tipo || '').toUpperCase()) {
      case 'ADMINISTRADOR': return 'admin';
      case 'MOTORISTA':     return 'driver';
      case 'PASSAGEIRO':    return 'passenger';
      default:              return 'passenger';
    }
  };

  const convertStatusToFront = (status) => {
    switch ((status || '').toUpperCase()) {
      case 'ATIVO':    return 'active';
      case 'SUSPENSO':
      case 'PENDENTE': return 'inactive';
      default:         return 'active';
    }
  };

  const convertRoleToBack = (role) => {
    switch (role) {
      case 'admin':     return 'ADMINISTRADOR';
      case 'driver':    return 'MOTORISTA';
      case 'passenger': return 'PASSAGEIRO';
      default:          return 'PASSAGEIRO';
    }
  };

  const convertStatusToBack = (status) => {
    switch (status) {
      case 'active':   return 'ATIVO';
      case 'inactive': return 'SUSPENSO';
      default:         return 'ATIVO';
    }
  };

  function roleLabel(role) {
    return role === 'admin'     ? 'Administrador'
         : role === 'driver'    ? 'Motorista'
         : 'Passageiro';
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      const res = await api.get('/usuarios');
      const data = Array.isArray(res.data.data) ? res.data.data : res.data;
      setUsers(data.map(mapData));
      setError(null);
    } catch (err) {
      setError('Falha ao carregar usuários');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  const handleSave = async (formData) => {
    try {
      setSaving(true);

  
      const payload = {
        nome:         formData.name,
        email:        formData.email,
        tipo_usuario: convertRoleToBack(formData.role),
        status_conta: convertStatusToBack(formData.status),
      };

      // Faz o PATCH
      const res = await api.patch(`/usuarios/${formData.id}/partial`, payload);
      const updated = res.data.data ?? res.data;

      setUsers(prev => prev.map(u => 
        u.id === formData.id ? mapData(updated) : u
      ));

      setSelected(null);
      alert('Usuário atualizado com sucesso!');

    } catch (err) {
      console.error('Erro ao salvar:', err);
      alert(err.response?.data?.message || 'Erro ao atualizar usuário');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm('Tem certeza que deseja excluir este usuário?')) return;

    try {
      await api.delete(`/usuarios/${userId}`);
      setUsers(prev => prev.filter(u => u.id !== userId));
      alert('Usuário excluído com sucesso!');
    } catch (err) {
      console.error('Erro ao excluir:', err);
      alert(err.response?.data?.message || 'Erro ao excluir usuário');
    }
  };

 
  const filtered = users.filter(u =>
    u.nome.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <S.Main>
        <S.Container>
          <p>Carregando usuários...</p>
        </S.Container>
      </S.Main>
    );
  }

  if (error) {
    return (
      <S.Main>
        <S.Container>
          <p style={{ color: 'red' }}>{error}</p>
          <button onClick={fetchUsers}>Tentar novamente</button>
        </S.Container>
      </S.Main>
    );
  }

  return (
    <>
      <S.Main>
        <S.Container>

          <S.HeaderLine>
            <S.TitleSection>
              <S.Title>Gerenciamento de Usuários</S.Title>
              <S.Subtitle>
                Gerencie contas de usuários, incluindo visualização, edição e exclusão.
              </S.Subtitle>
            </S.TitleSection>
          </S.HeaderLine>

          <S.SearchWrapper>
            <S.SearchInput
              placeholder="Pesquisar nome ou email"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </S.SearchWrapper>

          <S.TableContainer>
            <S.Table>
              <thead>
                <S.Tr>
                  <S.Th>Nome</S.Th>
                  <S.Th>Email</S.Th>
                  <S.Th>Função</S.Th>
                  <S.Th>Status</S.Th>
                  <S.Th>Ações</S.Th>
                </S.Tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <S.Tr>
                    <S.Td colSpan="5" style={{ textAlign: 'center' }}>
                      Nenhum usuário encontrado
                    </S.Td>
                  </S.Tr>
                ) : (
                  filtered.map(u => (
                    <S.Tr key={u.id}>
                      <S.Td>{u.nome}</S.Td>
                      <S.Td>{u.email}</S.Td>
                      <S.Td>
                        <span className={`user-role user-role--${u.role}`}>
                          {roleLabel(u.role)}
                        </span>
                      </S.Td>
                      <S.Td>
                        <span className={`status status--${u.status}`}>
                          {u.status === 'active' ? 'Ativo' : 'Inativo'}
                        </span>
                      </S.Td>
                      <S.Td center>
                        <button
                          className="btn-action btn-action--edit"
                          onClick={() => setSelected(u)}
                          disabled={saving}
                        >
                          Editar
                        </button>
                        &nbsp;
                        <button
                          className="btn-action btn-action--delete"
                          onClick={() => handleDelete(u.id)}
                          disabled={saving}
                        >
                          Excluir
                        </button>
                      </S.Td>
                    </S.Tr>
                  ))
                )}
              </tbody>
            </S.Table>
          </S.TableContainer>

        </S.Container>
      </S.Main>

      {/* Modal de edição */}
      <EditUserModal
        open={Boolean(selected)}
        user={selected}
        onClose={() => setSelected(null)}
        onSave={handleSave}
        saving={saving}
      />
    </>
  );
}
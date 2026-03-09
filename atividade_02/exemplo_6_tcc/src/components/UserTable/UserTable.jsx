import * as S from './UserTable.styles';

function UserTable({ usuarios, onEdit, onDelete }) {
  
  // Funções de formatação
  const formatarTipoUsuario = (tipo) => {
    const tipos = {
      'ADMINISTRADOR': 'Administrador',
      'MOTORISTA': 'Motorista', 
      'PASSAGEIRO': 'Passageiro'
    };
    return tipos[tipo] || tipo;
  };

  const formatarStatus = (status) => {
    const statusMap = {
      'ATIVO': 'Ativo',
      'INATIVO': 'Inativo',
      'PENDENTE': 'Pendente'
    };
    return statusMap[status] || status;
  };

  const getRoleClass = (tipo) => {
    const roleClasses = {
      'ADMINISTRADOR': 'user-role--admin',
      'MOTORISTA': 'user-role--driver',
      'PASSAGEIRO': 'user-role--passenger'
    };
    return roleClasses[tipo] || 'user-role--default';
  };

  const getStatusClass = (status) => {
    const statusClasses = {
      'ATIVO': 'status--active',
      'INATIVO': 'status--inactive',
      'PENDENTE': 'status--pending'
    };
    return statusClasses[status] || 'status--default';
  };

  const handleDelete = (usuarioId, nomeUsuario) => {
    if (window.confirm(`Tem certeza que deseja excluir o usuário "${nomeUsuario}"? Esta ação não pode ser desfeita.`)) {
      onDelete(usuarioId, nomeUsuario);
    }
  };

  return (
    <S.TableContainer>
      <S.TableWrapper>
        <S.Table>
          <S.TableHeader>
            <tr>
              <S.TableHead>Nome</S.TableHead>
              <S.TableHead>Email</S.TableHead>
              <S.TableHead>Função</S.TableHead>
              <S.TableHead>Status</S.TableHead>
              <S.TableHead>Ações</S.TableHead>
            </tr>
          </S.TableHeader>
          <S.TableBody>
            {usuarios.map(usuario => (
              <S.TableRow key={usuario.id}>
                <S.TableData>{usuario.nome}</S.TableData>
                <S.TableData>{usuario.email}</S.TableData>
                <S.TableData>
                  <S.UserRole className={getRoleClass(usuario.tipo_usuario)}>
                    {formatarTipoUsuario(usuario.tipo_usuario)}
                  </S.UserRole>
                </S.TableData>
                <S.TableData>
                  <S.Status className={getStatusClass(usuario.status_conta)}>
                    {formatarStatus(usuario.status_conta)}
                  </S.Status>
                </S.TableData>
                <S.TableData>
                  <S.ActionButtonsGroup>
                    <S.ActionButton 
                      className="btn-action--edit"
                      onClick={() => onEdit(usuario.id)}
                    >
                      Editar
                    </S.ActionButton>
                    <S.ActionButton 
                      className="btn-action--delete"
                      onClick={() => handleDelete(usuario.id, usuario.nome)}
                    >
                      Excluir
                    </S.ActionButton>
                  </S.ActionButtonsGroup>
                </S.TableData>
              </S.TableRow>
            ))}
          </S.TableBody>
        </S.Table>
      </S.TableWrapper>
    </S.TableContainer>
  );
}

export default UserTable;
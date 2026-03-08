import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './EditTest.styles';

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    tipo_usuario: '',
    status_conta: ''
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregar dados do usuário
    // Depois você substitui por fetch real
    setTimeout(() => {
      // Mock de dados baseado no ID
      const mockUser = {
        id: id,
        nome: `Usuário ${id}`,
        email: `usuario${id}@email.com`,
        tipo_usuario: 'MOTORISTA',
        status_conta: 'ATIVO'
      };
      
      setFormData(mockUser);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Salvando:', formData);
    alert('Usuário atualizado com sucesso!');
    navigate('/usuarios');
  };

  if (loading) {
    return (
      <S.MainContainer>
        <S.Container>
          <S.LoadingContainer>
            <h2>Carregando...</h2>
          </S.LoadingContainer>
        </S.Container>
      </S.MainContainer>
    );
  }

  return (
    <S.MainContainer>
      <S.Container>
        <S.Header>
          <S.Title>Editar Usuário #{id}</S.Title>
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label>Nome:</S.Label>
            <S.Input
              type="text"
              value={formData.nome}
              onChange={(e) => handleChange('nome', e.target.value)}
              placeholder="Digite o nome do usuário"
              required
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Email:</S.Label>
            <S.Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="Digite o email do usuário"
              required
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Função:</S.Label>
            <S.Select
              value={formData.tipo_usuario}
              onChange={(e) => handleChange('tipo_usuario', e.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="ADMINISTRADOR">Administrador</option>
              <option value="MOTORISTA">Motorista</option>
              <option value="PASSAGEIRO">Passageiro</option>
            </S.Select>
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Status:</S.Label>
            <S.Select
              value={formData.status_conta}
              onChange={(e) => handleChange('status_conta', e.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="ATIVO">Ativo</option>
              <option value="INATIVO">Inativo</option>
              <option value="PENDENTE">Pendente</option>
            </S.Select>
          </S.FormGroup>

          <S.FormActions>
            <S.CancelButton type="button" onClick={() => navigate('/usuarios')}>
              Cancelar
            </S.CancelButton>
            <S.SaveButton type="submit">
              Salvar
            </S.SaveButton>
          </S.FormActions>
        </S.Form>
      </S.Container>
    </S.MainContainer>
  );
}

export default EditUser;
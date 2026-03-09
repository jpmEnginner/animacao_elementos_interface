import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import * as S from './EditUserModal.styles';

export default function EditUserModal({ open, onClose, user, onSave, saving }) {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    role: 'passenger', 
    status: 'active' 
  });

  useEffect(() => {
    if (user) {
      setForm({
        id:     user.id,      
        name:   user.nome  || '',
        email:  user.email || '',
        role:   user.role  || 'passenger',
        status: user.status|| 'active',
      });
    }
  }, [user, open]);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(form);  
  }

  if (!open) return null;

  return createPortal(
    <S.Overlay open={open}>
      <S.Container>

        <S.Header>
          <S.Title>Editar Usuário</S.Title>
          <S.Close onClick={onClose} disabled={saving}>&times;</S.Close>
        </S.Header>

        <S.Content onSubmit={handleSubmit}>
          <S.FieldGroup>
            <S.Label>Nome</S.Label>
            <S.Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Digite o nome do usuário"
              disabled={saving}
              required
            />
          </S.FieldGroup>

          <S.FieldGroup>
            <S.Label>Email</S.Label>
            <S.Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite o email do usuário"
              disabled={saving}
              required
            />
          </S.FieldGroup>

          <S.FieldGroup>
            <S.Label>Função</S.Label>
            <S.Select 
              name="role" 
              value={form.role} 
              onChange={handleChange}
              disabled={saving}
            >
              <option value="admin">Administrador</option>
              <option value="driver">Motorista</option>
              <option value="passenger">Passageiro</option>
            </S.Select>
          </S.FieldGroup>

          <S.FieldGroup>
            <S.Label>Status</S.Label>
            <S.Select 
              name="status" 
              value={form.status} 
              onChange={handleChange}
              disabled={saving}
            >
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </S.Select>
          </S.FieldGroup>

          <S.Footer>
            <S.CancelBtn 
              type="button" 
              onClick={onClose}
              disabled={saving}
            >
              Cancelar
            </S.CancelBtn>
            <S.SaveBtn type="submit" disabled={saving}>
              {saving ? 'Salvando...' : 'Salvar Alterações'}
            </S.SaveBtn>
          </S.Footer>
        </S.Content>
      </S.Container>
    </S.Overlay>,
    document.body
  );
}
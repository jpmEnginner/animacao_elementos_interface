import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './DenunciaDetails.styled';
import api from '../../../utils/axios-client';

export default function DenunciaDetails({ onBack }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [denuncia, setDenuncia] = useState(null);
  const [loading, setLoading]   = useState(true);
  const [saving, setSaving]     = useState(false);
  const [error, setError]       = useState(null);

  /* -------- helpers -------- */
  const normalizaStatus = (v) => {
    switch ((v || '').toUpperCase()) {
      case 'RESOLVIDO':
      case 'RESOLVIDA': return 'Resolvido';
      case 'PENDENTE':  return 'Pendente';
      case 'ANALISANDO':return 'Analisando';
      default:          return v || '—';
    }
  };

 const mapData = (d) => {
  const raw = d.statusDenuncia ?? 'PENDENTE'; 
  return {
    id:         d.id,
    viagemId:   d.viagem?.id ?? '—',          
    data:       d.dataEnvio ?? '—',            
    categoria:  d.tipoDenuncia ?? '—',         
    reportador: d.reportado_por ?? 'Não informado',
    reportado:  d.denunciado?.nome ?? '—',     
    userId:     d.denunciado?.id ?? '—',       
    statusRaw:  raw,
    status:     normalizaStatus(raw),
    descricao:  d.descricao ?? '—',
  };
};

  /* -------- fetch -------- */
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res  = await api.get(`/denuncias/${id}`);
        const data = res.data.data ?? res.data;
        if (alive) {
          setDenuncia(mapData(data));
          setLoading(false);
        }
      } catch (err) {
        if (alive) {
          setError('Falha ao carregar denúncia');
          setLoading(false);
        }
        console.error(err);
      }
    })();
    return () => { alive = false; };
  }, [id]);

  /* -------- actions -------- */
  const handleResolve = async () => {
    if (!window.confirm('Marcar esta denúncia como resolvida?')) return;
    try {
      setSaving(true);

      const res  = await api.patch(`/denuncias/${id}/status`, { status: 'RESOLVIDO' });
      const data = res.data.data ?? res.data;         // já vem com status atualizado
      setDenuncia(mapData(data));

    } catch (err) {
      alert('Erro ao atualizar status');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Tem certeza que deseja excluir esta denúncia?')) return;
    try {
      setSaving(true);
      await api.delete(`/denuncias/${id}`);
      navigate('/admin/denuncias', { replace: true });
    } catch (err) {
      alert('Erro ao excluir');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  /* -------- render -------- */
  if (loading) return <S.Main><S.Container><p>Carregando...</p></S.Container></S.Main>;
  if (error)   return <S.Main><S.Container><p>{error}</p></S.Container></S.Main>;

  const d = denuncia;
  const jaResolvido = (d.statusRaw || '').toUpperCase().startsWith('RESOLVID');

  return (
    <S.Main>
      <S.Container>
        <S.HeaderLine>
          <S.Title>Detalhes da Denúncia</S.Title>
        </S.HeaderLine>

        <S.Card>

          {/* Usuário denunciado */}
          <S.Section>
            <S.SectionTitle>Usuário Denunciado</S.SectionTitle>
            <S.UserInfo>
              <S.Avatar src="/assets/img/user-default.jpg" alt={d.reportado} />
              <S.UserDetails>
                <strong>{d.reportado}</strong>
                <span>ID do Usuário: {d.userId}</span>
              </S.UserDetails>
            </S.UserInfo>
          </S.Section>

          {/* Problema denunciado */}
          <S.Section>
            <S.SectionTitle>Problema Denunciado</S.SectionTitle>

            <S.Grid>
              <S.GridItem>
                <S.Label>ID da Denúncia</S.Label>
                <S.Value>#{d.id}</S.Value>
              </S.GridItem>

              <S.GridItem>
                <S.Label>Data da Denúncia</S.Label>
                <S.Value>{d.data}</S.Value>
              </S.GridItem>

              <S.GridItem>
                <S.Label>Categoria da Denúncia</S.Label>
                <S.Value>{d.categoria}</S.Value>
              </S.GridItem>

              <S.GridItem>
                <S.Label>Reportado por</S.Label>
                <S.Value>{d.reportador}</S.Value>
              </S.GridItem>

              <S.GridItem>
                <S.Label>ID da Viagem</S.Label>
                <S.Value>#{d.viagemId}</S.Value>
              </S.GridItem>

              <S.GridItem>
                <S.Label>Status</S.Label>
                <S.Value>{d.status}</S.Value>
              </S.GridItem>

              <S.GridItem full>
                <S.Label>Descrição da Denúncia</S.Label>
                <S.Value>{d.descricao}</S.Value>
              </S.GridItem>
            </S.Grid>
          </S.Section>

          {/* Ações */}
          <S.Section>
            <S.SectionTitle>Ações</S.SectionTitle>
            <S.Actions>
              <S.ResolveBtn
                disabled={saving || jaResolvido}
                $done={jaResolvido}
                onClick={handleResolve}
              >
                {jaResolvido ? 'Resolvida' : 'Marcar Resolvida'}
              </S.ResolveBtn>

              <S.DeleteBtn disabled={saving} onClick={handleDelete}>
                Apagar Denúncia
              </S.DeleteBtn>
            </S.Actions>
          </S.Section>
        </S.Card>
      </S.Container>
    </S.Main>
  );
}
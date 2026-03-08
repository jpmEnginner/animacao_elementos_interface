import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Denuncias.styled';
import api from '../../utils/axios-client';         

export default function Denuncias({ onBack }) {
  const [rows, setRows]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  const mapData = (item) => ({
    id:          item.id,
    viagem:      item.viagem?.id ?? '—',              
    reportador:  'Não informado',                      
    reportado:   item.denunciado?.nome ?? '—',        
    motivo:      item.tipoDenuncia ?? '—',            
    status:      convertStatus(item.statusDenuncia),  
  });

  const convertStatus = (s) => {
    switch ((s || '').toUpperCase()) {
      case 'RESOLVIDO':
      case 'RESOLVIDA':  return 'resolved';
      case 'PENDENTE':   return 'pending';
      case 'ANALISANDO': return 'analyzing';
      default:           return 'unknown';
    }
  };

  useEffect(() => {
    let alive = true;

    async function fetchData() {
      try {
        const res = await api.get('/denuncias');
        const data = Array.isArray(res.data.data) ? res.data.data : res.data;
        
        if (alive) {
          setRows(data.map(mapData));
          setLoading(false);
        }
      } catch (err) {
        if (alive) {
          setError('Falha ao carregar denúncias');
          setLoading(false);
        }
        console.error(err);
      }
    }

    fetchData();
    return () => { alive = false; };
  }, []);

  if (loading) return <S.Main><S.Container><p>Carregando...</p></S.Container></S.Main>;
  if (error)   return <S.Main><S.Container><p>{error}</p></S.Container></S.Main>;

  return (
    <S.Main>
      <S.Container>

        <S.HeaderLine>
          <S.Title>Denúncias</S.Title>
        </S.HeaderLine>

        <S.TableContainer>
          <S.TableWrapper>
            <S.Table>
              <S.Thead>
                <S.Tr>
                  <S.Th>ID da Denúncia</S.Th>
                  <S.Th>ID da Viagem</S.Th>
                  <S.Th>Reportador</S.Th>
                  <S.Th>Usuário Reportado</S.Th>
                  <S.Th>Motivo</S.Th>
                  <S.Th center>Status</S.Th>
                  <S.Th center>Ações</S.Th>
                </S.Tr>
              </S.Thead>

              <tbody>
                {rows.map(r => (
                  <S.Tr key={r.id}>
                    <S.Td>#{r.id}</S.Td>
                    <S.Td>#{r.viagem}</S.Td>
                    <S.Td>{r.reportador}</S.Td>
                    <S.Td>{r.reportado}</S.Td>
                    <S.Td>{r.motivo}</S.Td>
                    <S.Td center>
                      <S.BadgeStatus variant={r.status}>
                        {r.status === 'resolved'   ? 'Resolvido'
                          : r.status === 'pending' ? 'Pendente'
                          : r.status === 'analyzing' ? 'Analisando'
                          : 'Desconhecido'}
                      </S.BadgeStatus>
                    </S.Td>
                    <S.Td center>
                      <S.ActionBtn
                        as={Link}
                        to={`/admin/denuncias/${r.id}`}
                      >
                        Visualizar
                      </S.ActionBtn>
                    </S.Td>
                  </S.Tr>
                ))}
              </tbody>
            </S.Table>
          </S.TableWrapper>
        </S.TableContainer>

      </S.Container>
    </S.Main>
  );
}
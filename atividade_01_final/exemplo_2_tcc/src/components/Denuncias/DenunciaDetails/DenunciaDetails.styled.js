import styled, { css } from 'styled-components';

const tablet  = '@media (min-width:768px)';
const desktop = '@media (min-width:1024px)';

/* ---------- Layout geral ---------- */
export const Main = styled.main`
  min-height: calc(100vh - 12rem);
  padding: 2rem;
  display: flex;
  justify-content: center;

  ${tablet}  { padding: 3rem 2rem; }
  ${desktop} { padding: 4rem 2rem; }
`;

export const Container = styled.section`
  width: 100%;
  max-width: 80rem;
`;

export const HeaderLine = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #212529;

  ${tablet}  { font-size: 3.2rem; }
`;

/* ---------- Botão voltar (opcional) ---------- */
export const BackBtn = styled.button`
  width: 4rem;
  height: 4rem;
  border: .1rem solid #e9ecef;
  border-radius: .8rem;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .3s ease;

  &:hover   { background: #e9ecef; transform: translateY(-.1rem); }
  &:active  { transform: translateY(0); }
  &:focus   { outline: none; box-shadow: 0 0 0 .3rem rgba(0,123,255,.25); }
`;

export const BackIcon = styled.img`
  width: 2rem;
  height: 2rem;
  opacity: .7;
`;

/* ---------- Cartão de detalhes ---------- */
export const Card = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2rem rgba(0,0,0,.1);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #212529;
  border-bottom: .2rem solid #f8f9fa;
  padding-bottom: 1rem;
  margin: 0;
`;

/* ---------- Usuário denunciado ---------- */
export const UserInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: .8rem;

  ${tablet} { flex-direction: row; }
  @media (max-width:767px){ flex-direction: column; text-align:center; }
`;

export const Avatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  border: .3rem solid #e9ecef;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;

/* ---------- Grid de dados ---------- */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width:767px){ grid-template-columns: 1fr; }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  ${({ full }) => full && css`grid-column: 1 / -1;`}
`;

export const Label = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: .05rem;
`;

export const Value = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: #212529;
  padding: 1rem 1.5rem;
  background: #f8f9fa;
  border-radius: .6rem;
  border-left: .4rem solid #007bff;
`;

/* ---------- Área de ações ---------- */
export const Actions = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

/* ---------- Botões ---------- */
const BaseBtn = styled.button`
  padding: 1.2rem 2.5rem;
  border-radius: .8rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
  min-width: 15rem;

  &:hover   { transform: translateY(-.2rem); }
  &:active  { transform: translateY(0);      }
  &:focus   { outline:none; box-shadow:0 0 0 .3rem rgba(0,123,255,.25); }

  /* Visual e interação quando desabilitado */
  &:disabled {
    pointer-events: none;
    transform: none;
    opacity: 0.7;
  }
`;

/* Botão verde / cinza dependendo de $done */
export const ResolveBtn = styled(BaseBtn)`
  background: ${({ $done }) => ($done ? '#9ca3af' : '#28a745')};
  cursor:     ${({ $done }) => ($done ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${({ $done }) => ($done ? '#9ca3af' : '#1e7e34')};
  }
`;

/* Botão vermelho permanece igual */
export const DeleteBtn = styled(BaseBtn)`
  background: #dc3545;
  &:hover { background:#c82333; }
`;
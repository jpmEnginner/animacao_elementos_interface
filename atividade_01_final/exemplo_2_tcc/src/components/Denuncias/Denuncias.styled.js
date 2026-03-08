import styled, { css } from 'styled-components';

const tablet = '@media (min-width:768px)';
const desktop = '@media (min-width:1024px)';

/* ——— wrappers ——— */
export const Main = styled.main`
  padding: 2rem;
  min-height: calc(100vh - 12rem);  /* header + footer */
  display: flex;
  justify-content: center;

  ${tablet}  { padding: 3rem 2rem; }
  ${desktop} { padding: 4rem 2rem; }
`;

export const Container = styled.section`
  width: 100%;
  max-width: 120rem;
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
  margin: 0;

  ${tablet}  { font-size: 3.2rem; }
  ${desktop} { font-size: 3.6rem; }
`;

export const BackBtn = styled.button`
  width: 4rem;
  height: 4rem;
  background: #f8f9fa;
  border: .1rem solid #e9ecef;
  border-radius: .8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .3s ease;

  &:hover   { background: #e9ecef; transform: translateY(-.1rem); }
  &:active  { transform: translateY(0); background: #dee2e6; }
  &:focus   { outline: none; box-shadow: 0 0 0 .3rem rgba(0,123,255,.25); }
`;

export const BackIcon = styled.img`
  width: 2rem;
  height: 2rem;
  opacity: .7;
`;

export const TableContainer = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2rem rgba(0,0,0,.1);
  overflow: hidden;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;

  ${desktop} { font-size: 1.5rem; }
`;

export const Thead = styled.thead`
  background: #f8f9fa;
`;

export const Th = styled.th`
  padding: 1.5rem 1rem;
  text-align: ${({ center }) => center ? 'center' : 'left'};
  font-weight: 600;
  color: #495057;
  border-bottom: .1rem solid #e9ecef;
  white-space: nowrap;
`;

export const Tr = styled.tr`
  border-bottom: .1rem solid #e9ecef;
  transition: background .2s ease;

  &:hover { background: #f8f9fa; }
`;

export const Td = styled.td`
  padding: 1.5rem 1rem;
  color: #6c757d;
  vertical-align: middle;
  white-space: nowrap;
  text-align: ${({ center }) => center ? 'center' : 'left'};
`;

/* —— status badge —— */
const badge = {
    resolved: { bg: '#28a745', color: '#fff' },
    pending: { bg: '#dc3545', color: '#fff' },
    analyzing: { bg: '#ffc107', color: '#212529' },
    default: { bg: '#6c757d', color: '#fff' },
};

export const BadgeStatus = styled.span`
  display: inline-block;
  padding: .4rem 1rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  ${({ variant }) => css`
    background: ${badge[variant]?.bg || badge.default.bg};
    color:      ${badge[variant]?.color || badge.default.color};
  `}
`;

/* —— botão ação —— */
export const ActionBtn = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: .6rem 1.2rem;
  border-radius: .4rem;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all .3s ease;

  &:hover   { background: #0056b3; transform: translateY(-.1rem); }
  &:active  { transform: translateY(0); }
  &:focus   { outline: none; box-shadow: 0 0 0 .3rem rgba(0,123,255,.25); }
`;
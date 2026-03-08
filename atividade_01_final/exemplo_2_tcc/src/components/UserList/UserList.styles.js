import styled from 'styled-components';

const tablet  = '@media (min-width:768px)';
const desktop = '@media (min-width:1024px)';

/* --- layout base --- */
export const Main = styled.main`
  padding: 2rem;
  min-height: calc(100vh - 12rem);
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
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 3rem;
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

  &:hover  { background:#e9ecef; transform: translateY(-.1rem); }
  &:active { transform: translateY(0); }
`;

export const BackIcon = styled.img`
  width: 2rem;
  height: 2rem;
  opacity: .7;
`;

export const TitleSection = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: .8rem;

  ${tablet}  { font-size: 3.2rem; }
  ${desktop} { font-size: 3.6rem; }
`;

export const Subtitle = styled.p`
  font-size: 1.4rem;
  color: #6c757d;
  margin: 0;
  max-width: 60rem;
`;

/* --- search box --- */
export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1.2rem 1.5rem 1.2rem 4.5rem;
  border: .2rem solid #e9ecef;
  border-radius: .8rem;
  font-size: 1.4rem;
  background: #f8f9fa;
  transition: all .3s ease;

  &:focus {
    outline:none;
    border-color:#007bff;
    background:#fff;
    box-shadow:0 0 0 .3rem rgba(0,123,255,.25);
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.8rem;
  height: 1.8rem;
  opacity: .5;
  pointer-events: none;
`;

/* --- tabela --- */
export const TableContainer = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2rem rgba(0,0,0,.1);
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;

  ${desktop}{ font-size:1.5rem; }
`;

export const Th = styled.th`
  padding: 1.5rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #495057;
  border-bottom: .1rem solid #e9ecef;
  white-space: nowrap;
`;

export const Tr = styled.tr`
  border-bottom: .1rem solid #e9ecef;
  transition: background .2s ease;

  &:hover { background:#f8f9fa; }
`;

export const Td = styled.td`
  padding: 1.5rem 1rem;
  color: #6c757d;
  vertical-align: middle;
  white-space: nowrap;
  text-align: ${({center})=>center?'center':'left'};
`;

/* badge de função e de status reusarão suas classes CSS existentes.
   No JSX basta <span className={`user-role user-role--admin`}>Administrador</span> etc. */
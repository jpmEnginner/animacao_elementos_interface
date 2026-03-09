import styled from 'styled-components';

const tablet    = '@media (min-width:768px)';
const desktop   = '@media (min-width:1024px)';
const bigScreen = '@media (min-width:1200px)';

export const Main = styled.main`
  display: grid;
  align-items: start;
  padding: 2rem;
  min-height: calc(100vh - 12rem);   /* reserva header + footer */

  ${tablet}  { padding: 3rem 2rem; }
  ${desktop} { padding: 4rem 2rem; }
`;

export const Container = styled.section`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  display: grid;
  gap: 3rem;

  ${tablet}  { max-width: 100rem; gap: 4rem; }
  ${desktop} { max-width: 110rem; }
  ${bigScreen}{ max-width: 120rem; }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  color: #212529;

  ${tablet}  { font-size: 3.2rem; }
  ${desktop} { font-size: 3.6rem; }
`;

/* —— cartão de métrica —— */
export const MetricCard = styled.article`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2rem rgba(0,0,0,.1);
  padding: 3rem 2rem;
  text-align: center;

  ${tablet}  { padding: 4rem 3rem; }
  ${desktop} { padding: 5rem 4rem; }
`;

export const MetricLabel = styled.span`
  display: block;
  font-size: 1.4rem;
  color: #6c757d;
  font-weight: 500;
  margin-bottom: .5rem;
`;

export const MetricValue = styled.span`
  display: block;
  font-size: 3.6rem;
  font-weight: 700;
  color: #212529;
  line-height: 1;

  ${desktop} { font-size: 4.8rem; }
`;

export const MetricChange = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ positive }) => (positive ? '#28a745' : '#dc3545')};
`;

/* —— cartão do gráfico —— */
export const ChartCard = styled.article`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2rem rgba(0,0,0,.1);
  padding: 3rem 2rem;

  ${tablet}  { padding: 4rem 3rem; }
  ${desktop} { padding: 5rem 4rem; }
`;

export const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;

  ${tablet}  { height: 35rem; }
  ${desktop} { height: 40rem; }
  ${bigScreen}{ height: 45rem; }
`;

/* —— botões —— */
export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;

  ${tablet} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const BaseBtn = styled.a`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  padding: 1.6rem 3rem;
  border-radius: .8rem;
  min-width: 12rem;
  transition: all .3s ease;
  text-decoration: none;
  color: #fff;
  box-shadow: 0 .2rem .8rem rgba(0,0,0,.1);

  &:hover  { transform: translateY(-.2rem); }
  &:active { transform: translateY(0);       }

  ${desktop} { font-size: 1.5rem; padding: 1.8rem 3.4rem; }
`;

export const ActionBtnPrimary = styled(BaseBtn)`
  background: #007bff;
  &:hover { background: #0056b3; }
`;

export const ActionBtnSecondary = styled(BaseBtn)`
  background: #6c757d;
  &:hover { background: #545b62; }
`;
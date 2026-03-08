import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  min-height: calc(100vh - 12rem);
  display: grid;
  place-items: center;
  padding: 4rem 2rem;
  flex: 1;

  @media (max-width: 767px) {
    padding: 2rem 1rem;
    min-height: auto;
  }

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;
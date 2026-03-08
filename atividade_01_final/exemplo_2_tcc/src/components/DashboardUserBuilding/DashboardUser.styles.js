import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 12rem); /* reserva header + footer */
  display: grid;
  place-items: center;
  padding: 4rem 2rem;
`;

export const Card = styled.article`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2rem rgba(0,0,0,.1);
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 55rem;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 30rem;
  object-fit: contain;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #212529;
  margin: 0 0 1rem;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: #6c757d;
  max-width: 45rem;
  text-align: center;
  margin: 0 0 1rem;
`;

export const ExitBtn = styled.button`
  margin-top: 1rem;
  padding: 1.2rem 2.5rem;
  border-radius: .8rem;
  font-size: 1.4rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  color: #fff;
  background: #6c757d;
  transition: all .3s ease;
  min-width: 12rem;

  &:hover  { background:#545b62; transform:translateY(-.2rem); }
  &:active { transform:translateY(0); }
  &:focus  { outline:none; box-shadow:0 0 0 .3rem rgba(0,123,255,.25); }
`;
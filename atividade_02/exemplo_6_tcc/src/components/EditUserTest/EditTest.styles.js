import styled from 'styled-components';

export const MainContainer = styled.main`
  min-height: calc(100vh - 12rem);
  display: grid;
  place-items: center;
  padding: 4rem 2rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    font-size: 2.2rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #6c757d;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.1);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 767px) {
    padding: 2rem 1.5rem;
    gap: 2rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 0.5rem;

  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.5rem 1.8rem;
  border: 0.2rem solid #e9ecef;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-family: inherit;
  background-color: #f8f9fa;
  transition: all 0.3s ease;
  color: #495057;

  &:focus {
    outline: none;
    border-color: #007bff;
    background-color: #fff;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
  }

  &::placeholder {
    color: #6c757d;
  }

  @media (max-width: 767px) {
    padding: 1.2rem 1.5rem;
    font-size: 1.4rem;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 1.5rem 1.8rem;
  border: 0.2rem solid #e9ecef;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-family: inherit;
  background-color: #f8f9fa;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #495057;

  &:focus {
    outline: none;
    border-color: #007bff;
    background-color: #fff;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
  }

  option {
    padding: 1rem;
  }

  @media (max-width: 767px) {
    padding: 1.2rem 1.5rem;
    font-size: 1.4rem;
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
  margin-top: 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  padding: 1.5rem 3rem;
  border: none;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  min-width: 15rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 1.5rem 2rem;
    font-size: 1.4rem;
    min-width: auto;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;

  &:hover {
    background-color: #545b62;
    transform: translateY(-0.2rem);
  }

  @media (max-width: 767px) {
    order: 2;
  }
`;

export const SaveButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-0.2rem);
  }

  @media (max-width: 767px) {
    order: 1;
  }
`;
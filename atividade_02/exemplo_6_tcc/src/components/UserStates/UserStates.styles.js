import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 30rem;

  @media (max-width: 767px) {
    padding: 2rem 1rem;
    min-height: 25rem;
  }
`;

export const LoadingSpinner = styled.div`
  width: 4rem;
  height: 4rem;
  border: 0.4rem solid #f3f3f3;
  border-top: 0.4rem solid #007bff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 2rem;
`;

export const Message = styled.p`
  font-size: 1.6rem;
  color: #6c757d;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

export const ErrorContainer = styled(StateContainer)`
  color: #dc3545;
`;

export const ErrorTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #dc3545;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.4rem;
  color: #6c757d;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
`;

export const RetryButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-0.2rem);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 767px) {
    padding: 1.2rem 2.5rem;
    font-size: 1.3rem;
  }
`;

export const EmptyContainer = styled(StateContainer)``;

export const EmptyTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 1rem;

  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

export const EmptyMessage = styled.p`
  font-size: 1.4rem;
  color: #6c757d;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
`;
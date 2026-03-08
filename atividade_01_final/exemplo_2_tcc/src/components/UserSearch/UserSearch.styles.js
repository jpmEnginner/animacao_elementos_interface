import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin-bottom: 3rem;
  width: 100%;

  @media (max-width: 767px) {
    margin-bottom: 2rem;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: none;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.8rem;
  height: 1.8rem;
  opacity: 0.5;
  pointer-events: none;

  @media (max-width: 767px) {
    width: 1.6rem;
    height: 1.6rem;
    left: 1.2rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1.2rem 1.5rem 1.2rem 4.5rem;
  border: 0.2rem solid #e9ecef;
  border-radius: 0.8rem;
  font-size: 1.4rem;
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
    color: #adb5bd;
  }

  @media (max-width: 767px) {
    padding: 1rem 1.2rem 1rem 4rem;
    font-size: 1.3rem;
  }
`;
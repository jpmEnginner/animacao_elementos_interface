import styled from 'styled-components';

export const TableContainer = styled.div`
  background-color: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;

  @media (max-width: 767px) {
    margin: 0 -0.5rem;
    border-radius: 0.8rem;
    overflow-x: auto;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.4rem;

  @media (max-width: 767px) {
    font-size: 1.2rem;
    min-width: 100%;
  }
`;

export const TableHeader = styled.thead`
  background-color: #f8f9fa;
`;

export const TableHead = styled.th`
  padding: 1.5rem 1rem;
  text-align: left;
  font-weight: 600;
  color: #495057;
  border-bottom: 0.1rem solid #e9ecef;
  white-space: nowrap;

  /* Centralização específica para função, status e ações */
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 1rem;
    font-size: 1.4rem;
  }

  @media (max-width: 767px) {
    padding: 1rem 0.5rem;
    font-size: 1.2rem;

    /* Esconde coluna de Email (2ª) e Status (4ª) no mobile */
    &:nth-child(2),
    &:nth-child(4) {
      display: none;
    }

    /* Nome (1ª coluna) */
    &:nth-child(1) {
      width: 40%;
      min-width: 10rem;
      text-align: left;
    }

    /* Função (3ª coluna) */
    &:nth-child(3) {
      width: 30%;
      min-width: 8rem;
      text-align: center !important;
    }

    /* Ações (5ª coluna) */
    &:nth-child(5) {
      width: 30%;
      min-width: 12rem;
      text-align: center !important;
    }
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 0.1rem solid #e9ecef;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableData = styled.td`
  padding: 1.5rem 1rem;
  color: #6c757d;
  vertical-align: middle;
  white-space: nowrap;

  /* Centralização específica para função, status e ações */
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 1.5rem 1rem;
    font-size: 1.4rem;
  }

  @media (max-width: 767px) {
    padding: 1rem 0.5rem;
    font-size: 1.2rem;

    /* Esconde coluna de Email (2ª) e Status (4ª) no mobile */
    &:nth-child(2),
    &:nth-child(4) {
      display: none;
    }

    /* Nome (1ª coluna) */
    &:nth-child(1) {
      width: 40%;
      min-width: 10rem;
      text-align: left;
    }

    /* Função (3ª coluna) */
    &:nth-child(3) {
      width: 30%;
      min-width: 8rem;
      text-align: center !important;
      vertical-align: middle;
    }

    /* Ações (5ª coluna) */
    &:nth-child(5) {
      width: 30%;
      min-width: 12rem;
      text-align: center !important;
      vertical-align: middle;
    }
  }
`;

export const UserRole = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.03rem;
  white-space: nowrap;

  &.user-role--admin {
    background-color: #f8d7da;
    color: #721c24;
    border: 0.1rem solid #f5c6cb;
  }

  &.user-role--driver {
    background-color: #d1ecf1;
    color: #0c5460;
    border: 0.1rem solid #bee5eb;
  }

  &.user-role--passenger {
    background-color: #d4edda;
    color: #155724;
    border: 0.1rem solid #c3e6cb;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
    display: inline-block;
    margin: 0 auto;
  }
`;

export const Status = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  white-space: nowrap;

  &.status--active {
    background-color: #d4edda;
    color: #155724;
    border: 0.1rem solid #c3e6cb;
  }

  &.status--inactive {
    background-color: #f8d7da;
    color: #721c24;
    border: 0.1rem solid #f5c6cb;
  }

  &.status--pending {
    background-color: #fff3cd;
    color: #856404;
    border: 0.1rem solid #ffeaa7;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
  }
`;

export const ActionButtonsGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    gap: 0.5rem;
    flex-direction: row;
  }

  @media (max-width: 767px) {
    gap: 0.4rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const ActionButton = styled.button`
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  min-width: 8rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
  }

  &:active {
    transform: translateY(0);
  }

  &.btn-action--edit {
    background-color: #28a745;
    color: #fff;

    &:hover {
      background-color: #1e7e34;
      transform: translateY(-0.1rem);
    }
  }

  &.btn-action--delete {
    background-color: #dc3545;
    color: #fff;

    &:hover {
      background-color: #c82333;
      transform: translateY(-0.1rem);
    }
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    min-width: 7rem;
  }

  @media (max-width: 767px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
    min-width: 5rem;
    border-radius: 0.4rem;
    white-space: nowrap;
  }
`;
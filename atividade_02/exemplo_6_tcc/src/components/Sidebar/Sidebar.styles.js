import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: -30rem;
  width: 28rem;
  height: 100%;
  background-color: #fff;
  z-index: 999;
  transition: left 0.3s ease;
  box-shadow: 0.2rem 0 1rem rgba(0, 0, 0, 0.1);
  padding: 2rem;
  overflow-y: auto;

  &.active {
    left: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid #e9ecef;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 5rem;
  width: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: #6c757d;
  padding: 0;
  line-height: 1;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
    border-radius: 0.4rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const NavLink = styled.a`
  color: #6c757d;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 1.5rem 0;
  border-bottom: 0.1rem solid #f0f0f0;
  transition: all 0.3s ease;

  &:hover {
    color: #007bff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
    border-radius: 0.4rem;
  }

  &.primary {
    background-color: #007bff;
    color: #fff;
    border-radius: 0.8rem;
    padding: 1.2rem 2rem;
    margin-top: 2rem;
    text-align: center;
    border: none;
    font-weight: 600;

    &:hover {
      background-color: #0056b3;
      color: #fff;
    }
  }
`;
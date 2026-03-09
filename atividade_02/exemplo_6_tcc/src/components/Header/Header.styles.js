import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 2rem;
  max-width: 120rem;
  margin: 0 auto;

  /* TABLET */
  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    gap: 4rem;
  }

  /* MOBILE */
  @media (max-width: 767px) {
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    gap: 1rem;
  }
`;

export const Logo = styled.div`
  justify-self: start;
`;

export const LogoImage = styled.img`
  height: 5rem;
  width: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  /* MOBILE */
  @media (max-width: 767px) {
    height: 4rem;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  flex-direction: column;
  gap: 0.4rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.8rem;
  z-index: 1001;
  transition: all 0.3s ease;

  span {
    width: 2.5rem;
    height: 0.3rem;
    background-color: #333;
    border-radius: 0.2rem;
    transition: all 0.3s ease;
  }

  &:hover span {
    background-color: #007bff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
    border-radius: 0.4rem;
  }

  /* MOBILE */
  @media (max-width: 767px) {
    display: flex;
    padding: 0.5rem;

    span {
      width: 2rem;
      height: 0.25rem;
    }
  }
`;

export const Nav = styled.nav`
  justify-self: end;

  /* TABLET+ */
  @media (min-width: 768px) {
    display: block;
  }

  /* MOBILE */
  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
  align-items: center;

  /* TABLET+ */
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #6c757d;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  transition: all 0.3s ease;
  display: block;

  &:hover {
    color: #007bff;
    background-color: #f8f9fa;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
  }

  &.primary {
    background-color: #007bff;
    color: #fff;

    &:hover {
      background-color: #0056b3;
      color: #fff;
    }
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  border: 0.2rem solid #e9ecef;
  transition: all 0.3s ease;

  &:hover {
    border-color: #007bff;
    transform: scale(1.05);
  }
`;
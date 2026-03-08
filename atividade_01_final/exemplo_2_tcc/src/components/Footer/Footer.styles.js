import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #fff;
  border-top: 0.1rem solid #e9ecef;
  padding: 3rem 0;
  margin-top: auto;

  @media (max-width: 767px) {
    margin-top: 2rem;
    padding: 2rem 0 1rem;
    min-height: auto;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 767px) {
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 5rem;
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
`;

export const FooterLink = styled.a`
  color: #6c757d;
  text-decoration: none;
  font-size: 1.4rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
    border-radius: 0.4rem;
  }

  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 767px) {
    gap: 1rem;
    margin: 1rem 0;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.2rem);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem rgba(0, 123, 255, 0.25);
    border-radius: 0.4rem;
  }

  @media (max-width: 767px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const SocialIcon = styled.img`
  width: 2rem;
  height: 2rem;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  ${SocialLink}:hover & {
    opacity: 1;
  }

  @media (max-width: 767px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const Copyright = styled.div`
  text-align: center;
`;

export const CopyrightText = styled.p`
  color: #6c757d;
  font-size: 1.3rem;

  @media (max-width: 767px) {
    font-size: 1.2rem;
    line-height: 1.4;
  }
`;
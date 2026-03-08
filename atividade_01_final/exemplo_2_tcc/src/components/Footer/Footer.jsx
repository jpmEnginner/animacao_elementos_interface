import * as S from './Footer.styles';

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        
        <S.FooterLinks>
          <S.FooterLink href="#">Sobre nós</S.FooterLink>
          <S.FooterLink href="#">Contato</S.FooterLink>
          <S.FooterLink href="#">Termos de serviço</S.FooterLink>
          <S.FooterLink href="#">Política de privacidade</S.FooterLink>
        </S.FooterLinks>

        <S.SocialLinks>
          <S.SocialLink href="#">
            <S.SocialIcon src="/assets/img/twitter.png" alt="Twitter" />
          </S.SocialLink>
          <S.SocialLink href="#">
            <S.SocialIcon src="/assets/img/facebook.png" alt="Facebook" />
          </S.SocialLink>
          <S.SocialLink href="#">
            <S.SocialIcon src="/assets/img/instagram.png" alt="Instagram" />
          </S.SocialLink>
        </S.SocialLinks>

        <S.Copyright>
          <S.CopyrightText>
            © 2025 VaiDeCarona. Todos os direitos reservados.
          </S.CopyrightText>
        </S.Copyright>

      </S.FooterContent>
    </S.FooterContainer>
  );
}

export default Footer;
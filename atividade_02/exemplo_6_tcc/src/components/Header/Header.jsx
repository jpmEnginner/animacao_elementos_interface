import { useSidebarContext } from '../../contexts/SidebarContext';
import * as S from './Header.styles.js';

function Header() {
  try {
    const { isOpen, toggleSidebar } = useSidebarContext();
    
    return (
      <S.HeaderContainer>
        <S.HeaderContent>
          <S.Logo>
            <S.LogoImage 
              src="/assets/img/icone_vdc_meio.png" 
              alt="VaiDeCarona" 
            />
          </S.Logo>

          <S.MenuToggle 
            className={isOpen ? 'active' : ''}
            onClick={toggleSidebar}
          >
            <span></span>
            <span></span>
            <span></span>
          </S.MenuToggle>

          <S.Nav>
            <S.NavList>
              <S.NavItem>
                <S.NavLink href="#">Início</S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavLink href="#">Viagens</S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavLink href="#">Usuários</S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.NavLink href="#">Suporte</S.NavLink>
              </S.NavItem>
              <S.NavItem>
                <S.UserProfile>
                  <S.UserAvatar 
                    src="/assets/img/perfil_vazio.png" 
                    alt="Admin" 
                  />
                </S.UserProfile>
              </S.NavItem>
            </S.NavList>
          </S.Nav>
        </S.HeaderContent>
      </S.HeaderContainer>
    );
  } catch (error) {
    console.error('❌ Erro no Header:', error);
    return <header>Erro no Header: {error.message}</header>;
  }
}

export default Header;
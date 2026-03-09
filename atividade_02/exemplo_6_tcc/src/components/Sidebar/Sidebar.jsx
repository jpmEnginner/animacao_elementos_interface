import { useSidebarContext } from '../../contexts/SidebarContext';
import * as S from './Sidebar.styles.js';

function Sidebar() {
  const { isOpen, closeSidebar } = useSidebarContext(); 

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeSidebar();
    }
  };

  const handleLogout = () => {
    if (window.confirm('Tem certeza que deseja sair?')) {
      alert('Logout realizado!');
      // window.location.href = '/login';
    }
  };

  return (
    <>
      {/* Overlay para mobile */}
      <S.Overlay 
        className={isOpen ? 'active' : ''}
        onClick={handleOverlayClick}
      />

      {/* Sidebar Mobile */}
      <S.SidebarContainer className={isOpen ? 'active' : ''}>
        <S.SidebarHeader>
          <S.Logo>
            <S.LogoImage 
              src="/assets/img/icone_vdc_meio.png" 
              alt="VaiDeCarona" 
            />
          </S.Logo>
          <S.CloseButton 
            onClick={closeSidebar}
            aria-label="Fechar menu"
          >
            &times;
          </S.CloseButton>
        </S.SidebarHeader>

        <S.Nav>
          <S.NavLink href="#">Início</S.NavLink>
          <S.NavLink href="#">Usuários</S.NavLink>
          <S.NavLink href="#">Suporte</S.NavLink>
          <S.NavLink href="#" onClick={handleLogout}>
            Sair
          </S.NavLink>
        </S.Nav>
      </S.SidebarContainer>
    </>
  );
}

export default Sidebar;
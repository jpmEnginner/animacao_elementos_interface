import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import * as S from './Layout.styles';

function Layout() {
  return (
    <S.AppContainer>
      <Header />
      <Sidebar />
      <S.Main>
        <Outlet /> {/* Aqui renderizam as páginas filhas */}
      </S.Main>
      <Footer />
    </S.AppContainer>
  );
}

export default Layout;
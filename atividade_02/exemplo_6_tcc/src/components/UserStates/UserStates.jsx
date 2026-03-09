import * as S from './UserStates.styles';

function UserStates({ pageState, errorMessage, onRetry }) {
  
  if (pageState === 'loading') {
    return (
      <S.StateContainer>
        <S.LoadingSpinner />
        <S.Message>Carregando usuários...</S.Message>
      </S.StateContainer>
    );
  }

  if (pageState === 'error') {
    return (
      <S.ErrorContainer>
        <S.ErrorTitle>Erro ao carregar usuários</S.ErrorTitle>
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
        <S.RetryButton onClick={onRetry}>
          Tentar Novamente
        </S.RetryButton>
      </S.ErrorContainer>
    );
  }

  if (pageState === 'empty') {
    return (
      <S.EmptyContainer>
        <S.EmptyTitle>Nenhum usuário encontrado</S.EmptyTitle>
        <S.EmptyMessage>Não há usuários para exibir no momento.</S.EmptyMessage>
      </S.EmptyContainer>
    );
  }

  return null;
}

export default UserStates;
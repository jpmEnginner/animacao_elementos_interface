import * as S from './UserSearch.styles';

function UserSearch({ searchTerm, onSearchChange }) {
  return (
    <S.SearchContainer>
      <S.SearchWrapper>
        <S.SearchIcon src="/assets/img/pesquisa.png" alt="Pesquisar" />
        <S.SearchInput 
          type="text" 
          placeholder="Pesquisar nome" 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </S.SearchWrapper>
    </S.SearchContainer>
  );
}

export default UserSearch;
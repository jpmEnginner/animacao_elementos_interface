import * as S from './DashboardUser.styles';

export default function Construction({ onExit }) {
  return (
    <S.Main>
      <S.Card>
        <S.Image src="/assets/img/under_construction.png" alt="Em construção" />
        <S.Title>Página em Construção</S.Title>
        <S.Text>
          Esta seção está atualmente em desenvolvimento. Por favor, <br />
          volte mais tarde para atualizações.
        </S.Text>
        <S.ExitBtn onClick={onExit}>Sair</S.ExitBtn>
      </S.Card>
    </S.Main>
  );
}
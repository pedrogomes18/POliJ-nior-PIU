import { NextPage } from 'next';
import * as S from './styles';

const Home: NextPage = () => {
    return (
        <S.Container>
            <S.Title>
                Esse template foi criado pela equipe de Research 21.1 para
                projetos internos da Polijunior.
            </S.Title>
        </S.Container>
    );
};

export default Home;

import * as S from './styles';

interface Props {
    titulo: string;
    texto: string;
    image: string;
}

const CardItemArticle: React.FC<Props> = ({ titulo, texto, image }) => (
    <S.DivPrimary>
        <S.DivContainer>
            <div>
                <img src={image} alt={titulo} />
            </div>
            <div>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </S.DivContainer>
    </S.DivPrimary>
);

export default CardItemArticle;

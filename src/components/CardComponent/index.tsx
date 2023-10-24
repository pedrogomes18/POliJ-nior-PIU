import * as S from './styles'

interface Props{
    name: string;
    username: string;
    image: string;
    text: string;
}

const CardItem:React.FC<Props> = ({name, username, image, text}) =>(
    <S.Section>
        <S.DivPrimary>
            <S.InfoUser>
                <S.ImgUser src={image} />

                <S.Div>
                    <h2>{name}</h2>
                    <p>@{username}</p>
                </S.Div>
                <S.ImgBtn src="/assets/img/ImageButtons/lixeira.svg" />
            </S.InfoUser>
        </S.DivPrimary>
        <S.DivSecundary>
            <p>{text}</p>
        </S.DivSecundary>
        <S.DivTree>
            <ul>
                <li>
                    <img src="/assets/img/Icons/arrow.svg" alt="Icone ARCO" /> 9
                </li>
                <li>
                    <img src="/assets/img/Icons/chat.svg" alt="Icone chat" /> 21
                </li>
                <li>
                    <img src="/assets/img/Icons/coracao.svg" alt="Icone Coração" /> 75
                </li>
            </ul>
        </S.DivTree>
    </S.Section>
)

export default CardItem;
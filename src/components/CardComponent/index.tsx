import * as S from './styles'

const CardItem = () =>(
    <S.Section>
        <S.DivPrimary>
            <S.InfoUser>
                <S.ImgUser src="/assets/img/ImagesUser/pedro.png" />

                <S.Div>
                    <h2>Nome de Usuário</h2>
                    <p>@User</p>
                </S.Div>
                <S.ImgBtn src="/assets/img/ImageButtons/lixeira.svg" />
            </S.InfoUser>
        </S.DivPrimary>
        <S.DivSecundary>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
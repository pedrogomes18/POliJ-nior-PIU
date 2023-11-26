import CardItem from 'components/CardComponent';
import CardItemArticle from 'components/ArticleCard';
import ModalComponent from 'components/ModalComponent';
import { Dispatch, SetStateAction, useState } from 'react';
import * as S from './styles';

const HomeTemplate = () => {
    const [selectedItem, setSelectedItem]: [
        number | null,
        Dispatch<SetStateAction<number | null>>
    ] = useState<number | null>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuItems = [
        { id: 1, text: 'Página Inicial', foto: 'home' },
        { id: 2, text: 'Notificações', foto: 'sino' },
        { id: 3, text: 'Mensagens', foto: 'msg' },
        { id: 4, text: 'Salvos', foto: 'nuvem' },
        { id: 5, text: 'Perfil', foto: 'perfil' },
        { id: 6, text: 'Configurações', foto: 'engrenagem' }
    ];

    const handleClick = (id: number | SetStateAction<number | null>) => {
        setSelectedItem(id);
    };

    return (
        <S.Container>
            <S.MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                Menu Button
            </S.MenuButton>
            <S.Menu>
                <div className="title">
                    <img
                        src="/assets/img/IconsMenu/periquito.svg"
                        alt="Periquito"
                    />
                    <h2>PIUPIUWER</h2>
                </div>
                <div className="MenuContainer">
                    <ul>
                        {menuItems.map((item) => (
                            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                            <li
                                key={item.id}
                                className={
                                    selectedItem === item.id ? 'action' : ''
                                }
                                onClick={() => handleClick(item.id)}
                            >
                                <img
                                    src={`/assets/img/IconsMenu/${item.foto.toLowerCase()}.svg`}
                                    alt={item.text}
                                />
                                <h3>{item.text}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="userPhoto">
                    <img
                        src="/assets/img/IconsMenu/user.png"
                        alt="Usuário FOTO"
                    />

                    <button type="button" onClick={() => setIsOpen(!isOpen)}>
                        <img
                            src="/assets/img/ImagensLogin/Logout.svg"
                            alt="Imagem Sair"
                        />
                    </button>
                    {isOpen && (
                        <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} />
                    )}
                </div>
            </S.Menu>
            <S.Feed>
                <S.Div>
                    <S.InputContainer>
                        <S.Input placeholder="Ouvir um piu..." />
                        <S.ImgLupa src="/assets/img/lupa.svg" />
                    </S.InputContainer>

                    <S.ContainerPiar>
                        <S.TeaxtArea placeholder="Quero dar um piu..." />
                        <S.Buttons>
                            <S.BtnImg>
                                <S.ImgBtn src="/assets/img/ImageButtons/img.svg" />
                            </S.BtnImg>

                            <S.BtnImg>
                                <S.ImgBtn src="/assets/img/ImageButtons/Video.svg" />
                            </S.BtnImg>

                            <S.BtnImg>
                                <S.ImgBtn src="/assets/img/ImageButtons/Frame.svg" />
                            </S.BtnImg>

                            <S.BtnImg>
                                <S.ImgBtn src="/assets/img/ImageButtons/Tag.svg" />
                            </S.BtnImg>

                            <S.BtnImg>
                                <S.ImgBtn src="/assets/img/ImageButtons/gif.svg" />
                            </S.BtnImg>

                            <S.BtnEnviar>
                                <S.ImgBtn src="/assets/img/ImageButtons/aviao.svg" />
                            </S.BtnEnviar>
                        </S.Buttons>
                    </S.ContainerPiar>
                </S.Div>
                <S.Linha />

                <CardItem
                    text="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                    name="Giovani Ciolin"
                    username="Giornio"
                    image="/assets/img/ImagesUser/pedro.png"
                />
                <CardItem
                    text="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                    name="Pedro Gomes"
                    username="Mixers18"
                    image="/assets/img/ImagesUser/dog.jpeg"
                />
                <CardItem
                    text="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                    name="Allan Douglas"
                    username="Quatyli"
                    image="/assets/img/ImagesUser/cat.jpg"
                />
            </S.Feed>
            <S.Article>
                <S.ContainerTitle>
                    <img
                        src="/assets/img/ImagesAltas/Frame.svg"
                        alt="Icone Piu"
                    />
                    <S.Title>Pius em alta</S.Title>
                </S.ContainerTitle>
                <CardItemArticle
                    image="/assets/img/ImagesAltas/justica.png"
                    titulo="Eleições 2022"
                    texto="Eleição em São Paulo: veja Pius sobre a disputa de segundo turno entre Neymar e Vini Jr."
                />
                <CardItemArticle
                    image="/assets/img/ImagesAltas/ab.png"
                    titulo="#AppleTeacher"
                    texto="Na semana do Dia do professor, agradecemos sua paixão e dedicação!"
                />
                <CardItemArticle
                    image="/assets/img/ImagesAltas/fazenda.png"
                    titulo="A fazenda"
                    texto="Á fazenda 14': Veja os Pius sobre o programa 🤠"
                />
                <CardItemArticle
                    image="/assets/img/ImagesAltas/volei.png"
                    titulo="Vôlei"
                    texto="Sérvia derrota o Brasil e é campeã mundial de vôlei feminino"
                />
                <CardItemArticle
                    image="/assets/img/ImagesAltas/netc.png"
                    titulo="Clima tenso no NTEC"
                    texto="Gomes é chamado de Campos e se irrita com companheiros"
                />
            </S.Article>
        </S.Container>
    );
};
export default HomeTemplate;

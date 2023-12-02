/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import IPiu from 'interfaces/IPiu';
import PiuService from 'services/PiuService';
import UserService from 'services/UserService';
import IUser from 'interfaces/IUser';
import { parseCookies } from 'nookies';
import CardItem from 'components/CardComponent';
import CardItemArticle from 'components/ArticleCard';
import ModalComponent from 'components/ModalComponent';
import * as S from './styles';

const Perfil = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [pius, setPius] = useState<IPiu[]>([]);
    const [reloader, setReloader] = useState<boolean>(false);
    const [idUser, setIdUser] = useState<string>('');
    const [idUserFeed, setIdUserFeed] = useState<IUser | undefined>(undefined);
    const [isPiuCreated, setIsPiuCreated] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<IUser | undefined>(undefined);
    const [userLog, setUserLog] = useState<IUser | undefined>(undefined);

    const router = useRouter();

    const menuItems = [
        { id: 1, text: 'Página Inicial', foto: 'home' },
        { id: 2, text: 'Notificações', foto: 'sino' },
        { id: 3, text: 'Mensagens', foto: 'msg' },
        { id: 4, text: 'Salvos', foto: 'nuvem' },
        { id: 5, text: 'Perfil', foto: 'perfil' },
        { id: 6, text: 'Configurações', foto: 'engrenagem' }
    ];

    useEffect(() => {
        const fetchPius = async () => {
            const cookies = parseCookies();
            const userIdLogged = cookies['@piupiuwer:userId'];

            try {
                const userFeedId = router.query;
                const userIdFeed = userFeedId.id;

                const [response, userInfo] = await Promise.all([
                    PiuService.getPiuById(
                        (userIdFeed as string) || (userIdLogged as string)
                    ),
                    UserService.getUserById(
                        (userIdFeed as string) || (userIdLogged as string)
                    )
                ]);

                const [responseUserLog, userInfoLog] = await Promise.all([
                    PiuService.getPiuById(userIdLogged as string),
                    UserService.getUserById(userIdLogged as string)
                ]);

                setUserInfo(userInfo);
                setUserLog(userInfoLog);
                setPius(response);
                setIdUser(userIdLogged || '');
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPius();
    }, [reloader, router.query]);

    const handleClick = (id: number) => {
        setSelectedItem(id);
        switch (id) {
            case 1:
                router.push('/index');
                break;
            case 5:
                router.push('/Perfil');
                break;
            default:
                router.push('/Found');
        }
    };

    const handleShowAlert = (text: string, type: string) => {
        const commonOptions: ToastOptions = {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        };

        const deleteOptions: ToastOptions = {
            ...commonOptions,
            style: {
                backgroundColor: '#202425',
                color: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
                borderLeft: '0px solid #e94e4e',
                padding: '16px',
                display: 'flex',
                fontSize: '12px',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: 'bold' as const
            },
            icon: '❌',
            progressStyle: {
                backgroundColor: '#ff6b6b',
                borderRadius: '8px',
                height: '4px'
            }
        };

        const successOptions: ToastOptions = {
            ...commonOptions,
            style: {
                backgroundColor: '#202425',
                color: '#fff',
                fontSize: '12px',
                borderRadius: '12px',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
                borderLeft: '0 solid #2e7d32',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: 'bold' as const
            },
            icon: <span style={{ color: '#4caf50', fontSize: '20px' }}>✔</span>,
            progressStyle: {
                backgroundColor: '#2e7d32',
                borderRadius: '8px',
                height: '4px'
            }
        };

        const options = type === 'delete' ? deleteOptions : successOptions;

        toast.info(text, options);
    };

    const handlePiuDeleted = () => {
        setReloader(!reloader);
        handleShowAlert('Deletando...', 'delete');
    };

    const handlePiuPatch = async (id: string) => {
        const response = await PiuService.patchPiusLike(id);
        console.log(response.length, id);
        setReloader(!reloader);
    };

    return (
        <S.Container>
            <S.Menu isOpened={isMenuOpen}>
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
                        src={
                            userLog?.avatar ||
                            '/assets/img/ImagesUser/pedro.png'
                        }
                        alt={userLog?.firstName}
                    />
                    <button type="button" onClick={() => setIsOpen(!isOpen)}>
                        <img
                            src="/assets/img/ImagensLogin/Logout.svg"
                            alt="Imagem Sair"
                        />
                    </button>
                </div>
            </S.Menu>
            <S.Feed>
                {isOpen && (
                    <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} />
                )}
                <S.HeaderContainer>
                    <S.MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img
                            src="/assets/img/ImageButtons/hamburguer.svg"
                            alt="HAMBURGUER"
                        />
                    </S.MenuButton>
                    <div>
                        <img
                            src="/assets/img/IconsMenu/periquito.svg"
                            alt="Periquito"
                        />
                        <h2>PIUPIUWER</h2>
                    </div>
                </S.HeaderContainer>
                <S.Div>
                    <div className="infoUser">
                        <div>
                            <img
                                src={userInfo?.avatar}
                                alt={userInfo?.firstName}
                            />
                        </div>
                        <div>
                            <h2>{`${userInfo?.firstName} ${userInfo?.lastName}`}</h2>
                            <h4>@{userInfo?.username}</h4>
                        </div>
                    </div>
                </S.Div>
                {pius
                    .slice()
                    .reverse()
                    .map((piu: IPiu) => (
                        <CardItem
                            key={piu.id}
                            name={piu.user.firstName}
                            username={piu.user.username}
                            image={piu.user.avatar}
                            text={piu.text}
                            like={piu.likes}
                            id={piu.id}
                            loggedInUserId={idUser}
                            piuUserId={piu.user.id}
                            onPiuDeleted={handlePiuDeleted}
                            onPiuPatch={() => handlePiuPatch(piu.id)}
                            onPiuCreated={() => setIsPiuCreated(false)}
                        />
                    ))}
            </S.Feed>
            <ToastContainer />
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

export default Perfil;

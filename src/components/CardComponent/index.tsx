/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line react/button-has-type
import { useEffect, useState } from 'react';
import IPiuLike from 'interfaces/IPiuLike';
import Link from 'next/link';
import PiuService from 'services/PiuService';
import * as S from './styles';

interface Props {
    id: string;
    name: string;
    username: string;
    image: string;
    text: string;
    like: IPiuLike[];
    loggedInUserId: string;
    piuUserId: string;
    onPiuDeleted: (id: string) => void;
    onPiuPatch: (id: string) => void;
    onPiuCreated: () => void;
}

const CardItem: React.FC<Props> = ({
    id,
    name,
    username,
    image,
    text,
    like,
    loggedInUserId,
    piuUserId,
    onPiuDeleted,
    onPiuPatch,
    onPiuCreated
}) => {
    const [arrowCount, setArrowCount] = useState(21);
    const [chatCount, setChatCount] = useState(13);
    const [heartCount, setHeartCount] = useState(like.length);
    const [isArrowSelected, setIsArrowSelected] = useState(false);
    const [isChatSelected, setIsChatSelected] = useState(false);
    const [isHeartSelected, setIsHeartSelected] = useState(false);
    const [piuIdToDelete, setPiuIdToDelete] = useState<string>('');
    const [shouldAnimateIn, setShouldAnimateIn] = useState(false);

    useEffect(() => {
        onPiuCreated();
        setShouldAnimateIn(true);
    }, [onPiuCreated]);

    const handleArrowClick = () => {
        setArrowCount((prevCount) =>
            isArrowSelected ? prevCount - 1 : prevCount + 1
        );
        setIsArrowSelected(!isArrowSelected);
    };

    const handleChatClick = () => {
        setChatCount((prevCount) =>
            isChatSelected ? heartCount - 1 : prevCount + 1
        );
        setIsChatSelected(!isChatSelected);
    };

    const handleHeartClick = async () => {
        try {
            onPiuPatch(id);
            setHeartCount(isHeartSelected ? heartCount - 1 : heartCount + 1);
            setIsHeartSelected(!isHeartSelected);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteClick = async () => {
        try {
            await PiuService.deletePiu(id);
            // Agora, após a exclusão bem-sucedida, você pode chamar onPiuDeleted
            onPiuDeleted(id);
            setPiuIdToDelete(id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <S.Section
            className={`${
                piuIdToDelete === id
                    ? 'fade-out'
                    : shouldAnimateIn
                    ? 'fade-in'
                    : ''
            }`}
        >
            <S.DivPrimary>
                <S.InfoUser>
                    <S.ImgUser src={image} />

                    <S.Div>
                        <Link
                            href={{
                                pathname: '/Perfil',
                                query: { id: piuUserId }
                            }}
                        >
                            <a>{name}</a>
                        </Link>
                        <p>@{username}</p>
                    </S.Div>
                    {/* Renderiza a lixeira apenas se o usuário logado for o autor do Piu */}
                    {loggedInUserId === piuUserId && (
                        <S.BtnLixeira onClick={handleDeleteClick}>
                            <S.ImgBtn src="/assets/img/ImageButtons/lixeira.svg" />
                        </S.BtnLixeira>
                    )}
                </S.InfoUser>
            </S.DivPrimary>
            <S.DivSecundary>
                <p>{text}</p>
            </S.DivSecundary>
            <S.DivTree>
                <ul>
                    <li>
                        <button onClick={handleArrowClick}>
                            {isArrowSelected ? (
                                <img
                                    src="/assets/img/Icons/clicados/arrow.svg"
                                    alt="Icone ARCO Selecionado"
                                />
                            ) : (
                                <img
                                    src="/assets/img/Icons/arrow.svg"
                                    alt="Icone ARCO"
                                />
                            )}
                            {arrowCount}
                        </button>
                    </li>
                    <li>
                        <button onClick={handleChatClick}>
                            {isChatSelected ? (
                                <img
                                    src="/assets/img/Icons/clicados/chat.svg"
                                    alt="Icone Chat Selecionado"
                                />
                            ) : (
                                <img
                                    src="/assets/img/Icons/chat.svg"
                                    alt="Icone Chat"
                                />
                            )}
                            {chatCount}
                        </button>
                    </li>
                    <li>
                        <button onClick={handleHeartClick}>
                            {isHeartSelected ? (
                                <img
                                    src="/assets/img/Icons/clicados/heart.svg"
                                    alt="Icone Coração Selecionado"
                                />
                            ) : (
                                <img
                                    src="/assets/img/Icons/coracao.svg"
                                    alt="Icone Coração"
                                />
                            )}
                            {heartCount}
                        </button>
                    </li>
                </ul>
            </S.DivTree>
        </S.Section>
    );
};

export default CardItem;

/* eslint-disable react/button-has-type */
// eslint-disable-next-line react/button-has-type
import { useState } from 'react';
import IPiuLike from 'interfaces/IPiuLike';
import * as S from './styles';
import PiuService from '../../services/PiuService';

interface Props {
    id: string;
    name: string;
    username: string;
    image: string;
    text: string;
    like: IPiuLike[];
    loggedInUserId: string;
    piuUserId: string;
    onPiuDeleted: (id: string) => void; // Adicionamos um callback para notificar a exclusão
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
    onPiuDeleted
}) => {
    const [arrowCount, setArrowCount] = useState(21);
    const [chatCount, setChatCount] = useState(13);
    const [heartCount, setHeartCount] = useState(like.length);
    const [isArrowSelected, setIsArrowSelected] = useState(false);
    const [isChatSelected, setIsChatSelected] = useState(false);
    const [isHeartSelected, setIsHeartSelected] = useState(false);

    const handleArrowClick = () => {
        setArrowCount((prevCount) =>
            isArrowSelected ? prevCount - 1 : prevCount + 1
        );
        setIsArrowSelected(!isArrowSelected);
    };
    const handleChatClick = () => {
        setChatCount((prevCount) =>
            isChatSelected ? prevCount - 1 : prevCount + 1
        );
        setIsChatSelected(!isChatSelected);
    };
    const handleHeartClick = () => {
        setHeartCount((prevCount) =>
            isHeartSelected ? prevCount - 1 : prevCount + 1
        );
        setIsHeartSelected(!isHeartSelected);
    };

    const handleDeleteClick = async () => {
        try {
            await PiuService.deletePiu(id);
            onPiuDeleted(id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <S.Section>
            <S.DivPrimary>
                <S.InfoUser>
                    <S.ImgUser src={image} />

                    <S.Div>
                        <h2>{name}</h2>
                        <p>@{username}</p>
                    </S.Div>
                    {/* Renderiza a lixeira apenas se o usuário logado for o autor do Piu */}
                    {loggedInUserId === piuUserId && (
                        <S.BtnLixeira>
                            <S.ImgBtn
                                onClick={handleDeleteClick}
                                src="/assets/img/ImageButtons/lixeira.svg"
                            />
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

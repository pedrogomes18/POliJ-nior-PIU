/* eslint-disable react/button-has-type */
import { useState } from 'react';
import * as S from './styles';

interface Props {
    name: string;
    username: string;
    image: string;
    text: string;
}

const CardItem: React.FC<Props> = ({ name, username, image, text }) => {
    const [arrowCount, setArrowCount] = useState(0);
    const [chatCount, setChatCount] = useState(0);
    const [heartCount, setHeartCount] = useState(0);
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

    return (
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

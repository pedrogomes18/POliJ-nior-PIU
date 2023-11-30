import styled, { css } from 'styled-components';
import { defaultTheme } from 'styles';

interface MenuProps {
    isOpened: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-height: 100vh;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    background-color: ${defaultTheme.colors.background};

    @media only screen and (max-width: 770px) {
        display: inline-flexbox;
    }
`;

export const MenuButton = styled.button`
    display: none;
    @media only screen and (max-width: 770px) {
        display: block;
        z-index: 200;
        margin-right: 16px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;

export const Menu = styled.div<MenuProps>`
    @media only screen and (max-width: 770px) {
        ${({ isOpened }) => css`
            display: ${isOpened ? 'block' : 'none'};
            width: 70%;
            max-height: 100vh;
            overflow-y: hidden;
        `}
    }

    width: 30%;
    display: block;
    min-height: 100vh;
    overflow-y: hidden;
    padding-right: 10px;
    background-color: ${defaultTheme.colors.primary.dark};

    > .title {
        width: 100%;
        height: auto;
        padding: 32px 24px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        > h2 {
            color: ${defaultTheme.colors.white};
            font-family: NunitoRegular;
            font-size: 24px;
            margin-left: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 6px;
        }

        @media only screen and (max-width: 770px) {
            width: 100%;
            padding: 32px 24px;
            margin: 0;

            > img {
                width: 24px;
                height: 24px;
            }

            > h2 {
                font-size: 16px;
            }
        }
    }

    > .MenuContainer {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        height: auto;
        ul {
            list-style-type: none;
            width: 95%;
            height: auto;

            li {
                color: ${defaultTheme.colors.white};
                font-family: NunitoRegular;
                padding: 16px 8px;
                display: flex;
                border-radius: 0px 80px 80px 0px;
                align-self: stretch;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                font-size: 18px;
                cursor: pointer;
                margin: 8px 0;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                transition: background-color 0.2s ease;

                @media only screen and (max-width: 770px) {
                    font-size: 16px;
                }
                > h3 {
                    margin-left: 10px;
                }
            }

            li:hover {
                background-color: ${defaultTheme.colors.primary.main};
            }

            li.action {
                background-color: #3e63dd;
            }
        }
    }

    > .userPhoto {
        width: 56px;
        height: 56px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 24px auto;
        border-radius: 50%;

        > img {
            width: 56px;
            height: 56px;
            border: none;
            border-radius: 50%;
        }

        > button {
            margin-top: 8px;
            cursor: pointer;
            background: transparent;
            border: none;
            > img {
                width: 80%;
                height: 80%;
            }
        }

        @media only screen and (max-width: 770px) {
            width: 70%;
            height: auto;
            flex-direction: row;
            gap: 16px;
            border-top: 1px solid #004c97;
            padding: 32px 16px 16px 16px;
            margin: 32px auto;
            border-radius: 0;

            > img {
                width: 56px;
                height: 56px;
            }

            > button {
                margin-top: 16px;

                > img {
                    width: 75%;
                    height: 75%;
                }
            }
        }
    }
`;

export const HeaderContainer = styled.div`
    display: none;

    @media only screen and (max-width: 770px) {
        display: flex;
        align-items: center;
        width: 100%;
        height: auto;
        padding: 32px;
        background-image: linear-gradient(to left, #004c97, #33a8eb);
        clip-path: polygon(
            50% 0%,
            100% 0,
            100% 50%,
            100% 90%,
            80% 95%,
            50% 99%,
            20% 95%,
            0 90%,
            0% 35%,
            0 0
        );

        > div {
            display: flex;
            margin: 0 auto;
            background-color: transparent;
            padding-bottom: 0;
            align-items: center;
            justify-content: center;

            > img {
                width: 32px;
                height: 32px;
            }

            > h2 {
                color: #ecedee;
                font-family: NunitoRegular;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                margin-left: 8px;
                line-height: normal;
                letter-spacing: 3.5px;
            }
        }
    }
`;

export const Feed = styled.div`
    width: 70%;
    max-height: 100vh;
    overflow-y: scroll;
    padding: 32px;
    background-color: #151718;

    @media only screen and (max-width: 770px) {
        padding: 0;
        width: 100%;
        max-height: 100vh;
        z-index: 100;
        overflow-x: hidden;
    }
`;

export const Div = styled.div`
    width: 100%;
    height: auto;
    background-color: transparent;

    @media only screen and (max-width: 770px) {
        padding: 32px;
    }
`;

export const Article = styled.div`
    width: 30%;
    max-height: 100vh;
    overflow-y: scroll;
    padding-left: 10px;
    background-color: ${defaultTheme.colors.primary.dark};

    @media only screen and (max-width: 770px) {
        display: none;
    }
`;

export const InputContainer = styled.div`
    width: 100%;
    height: auto;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    padding: 8px;
    margin-bottom: 46px;
    border-radius: 8px;
    background-color: ${defaultTheme.colors.primary.light};
`;

export const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
    border-radius: 8px;
    font-family: NunitoRegular;
    font-size: 14px;
    font-weight: 400;
    color: ${defaultTheme.colors.white};
    background-color: transparent;
`;

export const ImgLupa = styled.img`
    width: 24px;
    height: 24px;
`;

export const ContainerPiar = styled.section`
    width: 100%;
    height: auto;
    background-color: ${defaultTheme.colors.primary.light};
    display: flex;
    padding: 24px;
    border-radius: 8px;
    flex-direction: column;
    justify-content: space-between;
`;

export const TeaxtArea = styled.textarea`
    border: none;
    max-width: 100%;
    max-height: 35px;
    resize: none;
    margin-bottom: 20px;
    outline: none;
    background-color: transparent;
    color: ${defaultTheme.colors.white};
    font-family: NunitoRegular;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
`;

export const Buttons = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const BtnImg = styled.button`
    width: 24px;
    height: 24px;
    margin-right: 8px;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 5px;
`;

export const ImgBtn = styled.img`
    width: 20px;
    height: 20px;
`;

export const BtnEnviar = styled(BtnImg)`
    margin-left: auto;
`;

export const Linha = styled.hr`
    margin: 46px 0;
    background-color: #4c5155;
`;

export const ContainerTitle = styled.div`
    width: 95%;
    height: auto;
    padding: 24px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid ${defaultTheme.colors.primary.light};

    > img {
        width: 32px;
        height: 32px;
    }
`;

export const Title = styled.h1`
    color: ${defaultTheme.colors.white};
    font-family: NunitoRegular;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

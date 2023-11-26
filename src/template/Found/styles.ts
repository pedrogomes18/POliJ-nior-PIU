import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-color: ${defaultTheme.colors.divider};
    justify-content: center;
    align-items: center;
    display: flex;
    backdrop-filter: blur(0);

    h1 {
        color: ${defaultTheme.colors.modalColor};
        font-family: 'PoppinsRegular';
        font-weight: 600;
        font-size: 24px;
        margin-right: 16px;
        text-align: center;
        @media only screen and (max-width: 770px) {
            display: block;
        }

        > span {
            display: inline-block;
            font-size: 32px;
            animation: bounce 1s infinite;
        }
    }

    div {
        background-color: black;
        width: 0.1%;
        margin: 10px 20px;
        height: 70%;
        @media only screen and (max-width: 770px) {
            display: none;
        }
    }
    img {
        width: 50%;
        height: 40%;
        @media only screen and (max-width: 770px) {
            display: none;
        }
    }

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-10px);
        }
    }
`;

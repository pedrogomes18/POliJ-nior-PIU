import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const ModalWrapper = styled.div`
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    backdrop-filter: blur(16px);
    z-index: 100;
`;

export const ModalContainer = styled.div`
    width: 40%;
    height: 50vh;
    background-color: ${defaultTheme.colors.modalColor};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 24px;
    padding: 30px;
    position: fixed;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    @media only screen and (max-width: 770px) {
        width: 90%;
    }
`;

export const DivButtons = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Text = styled.h3`
    color: ${defaultTheme.colors.white};
    font-family: InterRegular;
    font-size: 32px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: normal;
`;

export const ExitButton = styled.button`
    width: 100px;
    height: 40px;
    text-align: center;
    color: black;
    font-size: 20px;
    border: none;
    background-color: ${defaultTheme.colors.white};
    border-radius: 8px 8px 8px 8px;
    cursor: pointer;
    transition: opacity 0.7s ease-in-out;

    :hover,
    :focus {
        opacity: 0.6;
    }
`;

export const ReturnButton = styled.button`
    width: 100px;
    height: 40px;
    color: ${defaultTheme.colors.white};
    font-size: 20px;
    border: none;
    background-color: black;
    border-radius: 8px 8px 8px 8px;
    cursor: pointer;
    transition: opacity 0.7s ease-in-out;

    :hover,
    :focus {
        opacity: 0.6;
    }
`;

import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Section = styled.section`
    background-color: ${defaultTheme.colors.primary.main};
    font-family: NunitoRegular;
    width: 100%;
    height: auto;
    padding: 24px;
    margin-bottom: 46px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;

    @media only screen and (max-width: 770px) {
        width: 85%;
        margin: 24px auto;
    }
`;

export const DivPrimary = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const DivSecundary = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;

    > p {
        color: #ecedee;
        font-size: 20px;
        font-style: normal;
        font-family: NunitoRegular;
        font-weight: 400;
        text-align: justify;
        line-height: normal;
        margin-left: 8px;
    }
`;

export const DivTree = styled.div`
    width: 100%;
    height: auto;
    padding: 8px 16px;

    > ul {
        list-style: none;
        color: ${defaultTheme.colors.white};
        display: flex;
        width: 22%;
        justify-content: space-between;
        align-items: center;

        li {
            display: flex;
            align-items: center;
            justify-content: space-around;
            color: #ecedee;
            font-family: NunitoRegular;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            padding-right: 8px;

            button {
                background: transparent;
                display: flex;
                cursor: pointer;
                align-items: center;
                justify-content: space-around;
                color: #ecedee;
                font-family: NunitoRegular;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                border: none;
                padding-right: 8px;
            }
        }
    }
`;

export const InfoUser = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const ImgUser = styled.img`
    background: url('/assets/img/ImagesUser/pedro.png'),
        lightgray 50% / contain no-repeat;
    flex: 1 0 0;
    align-self: stretch;
    background-color: blue;
    border: none;
    border-radius: 50%;
    max-width: 90px;
    max-height: 90px;
`;

export const Div = styled.div`
    width: 80%;
    padding: 8px;
    gap: 8px;
    margin: 0px 16px;

    h2,
    p {
        color: ${defaultTheme.colors.white};
        gap: 8px;
        line-height: 16px;
    }

    p {
        font-family: NunitoRegular;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.5px;
    }

    h2 {
        font-family: NunitoRegular;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export const ImgBtn = styled.img`
    width: 24px;
    height: 24px;
`;

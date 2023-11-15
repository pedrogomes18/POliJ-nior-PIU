import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const Div = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    display: flex;
`;

export const Section = styled.section`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex: 0.7;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    background: var(--slate-2, #1a1d1e);

    .boxLogin {
        display: flex;
        flex-direction: column;

        .header h2 {
            display: inline;
            color: var(--slate-12, #ecedee);
            font-family: NunitoRegular;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 6px;
        }
    }

    .loger {
        background-color: transparent;
        padding: 16px 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 16px;

        > h3 {
            color: var(--slate-12, #ecedee);
            text-align: left;
            font-family: PoppinsRegular;
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        > p {
            color: var(--slate-12, #ecedee);
            text-align: center;
            font-family: PoppinsRegular;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-align: left;

            > a {
                color: var(--indigo-9, #3e63dd);
                font-family: PoppinsRegular;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
    }

    .loger > .inputs {
        display: flex;
        flex-direction: column;
        gap: 16px;

        > a {
            color: var(--indigo-9, #3e63dd);
            font-family: NunitoRegular;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }

    &.azulBackground {
        flex: 1;
        background: var(
            --institutional-blue-fade,
            linear-gradient(270deg, #004c97 -0.02%, #33a8eb 99.98%)
        );
    }
`;

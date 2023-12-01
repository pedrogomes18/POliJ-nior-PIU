import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const DivPrimary = styled.div`
    width: 100%;
    margin: 0 auto;
    height: auto;
    border-bottom: 1px solid ${defaultTheme.colors.primary.light};
    padding: 16px 0;
`;

export const DivContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    > div {
        background-color: transparent;
        padding: 5px;

        > img {
            width: 104px;
            height: 104px;
            flex-shrink: 0;
        }

        > h3 {
            font-family: NunitoRegular;
            font-size: 18px;
            color: ${defaultTheme.colors.white};
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }

        > p {
            color: ${defaultTheme.colors.white};
            font-family: NunitoRegular;
            text-align: left;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
        }
    }
`;

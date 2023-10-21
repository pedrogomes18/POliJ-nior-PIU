import styled from 'styled-components';
import { defaultTheme } from 'styles';

export const DivPrimary = styled.div`
    width: 95%;
    margin: 0 auto;
    height: auto;
    border-bottom: 1px solid ${defaultTheme.colors.primary.light};
    padding: 24px 0;
`;

export const DivContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    > div{
        background-color: transparent;
        padding: 4px;

        >img{
            width: 112px;
            height: 112px;
            flex-shrink: 0; 
        }

        >h3{
            font-family: NunitoRegular;
            font-size: 18px;
            color:${defaultTheme.colors.white};
            font-style: normal;
            font-weight: 700;
            line-height: normal; 
        }

        > p{
            color: ${defaultTheme.colors.white};
            font-feature-settings: 'clig' off, 'liga' off;
            /* Body/Body Normal */
            font-family: NunitoRegular;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 171.429% */
            letter-spacing: 0.5px; 
        }
    }
`;
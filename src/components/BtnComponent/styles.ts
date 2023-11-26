import styled from 'styled-components';

export const BtnLogin = styled.button`
    border-radius: 16px;
    background: var(--indigo-9, #3e63dd);
    padding: 8px 0;
    border: none;
    color: var(--composition-white, #fff);
    text-align: center;
    cursor: pointer;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: NunitoRegular;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    transition: all 0.9s ease-out;

    :hover,
    :focus {
        opacity: 0.6;
    }
`;

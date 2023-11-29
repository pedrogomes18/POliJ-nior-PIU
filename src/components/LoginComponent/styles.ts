import styled, { css } from 'styled-components';

export const Inputs = styled.div`
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
`;

export const BtnLogin = styled.button<{ isDisabled: boolean }>`
    border-radius: 16px;
    background: var(--indigo-9, #3e63dd);
    padding: 8px 0;
    border: none;
    width: 100%;
    margin: 8px 0;
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

    ${({ isDisabled }) =>
        isDisabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `}

    :hover,
    :focus {
        opacity: ${({ isDisabled }) => (isDisabled ? '0.5' : '0.6')};
    }

    :hover,
    :focus {
        opacity: 0.6;
    }
`;

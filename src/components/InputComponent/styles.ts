import styled from 'styled-components';

export const Input = styled.input`
    padding: 9px 24px;
    outline: none;
    border-radius: 8px;
    border: none;
    font-family: NunitoRegular;
    font-size: 14px;
    font-style: normal;
    color: var(--slate-12, #ecedee);
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    border-radius: 8px;
    background: var(--slate-8, #4c5155);
    transition: outline 1s ease;
    outline: 1px transparent solid;

    :focus,
    :active {
        outline: 0.6px solid var(--indigo-9, #3e63dd);
    }
`;

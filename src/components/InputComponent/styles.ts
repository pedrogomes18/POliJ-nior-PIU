import styled from 'styled-components';

interface InputProps {
    isEmpty: boolean;
}

export const Input = styled.input<InputProps>`
    padding: 9px 24px;
    border-radius: 8px;
    border: none;
    outline: ${(props) => (props.isEmpty ? '0.6px solid #e61919' : 'none')};
    font-family: NunitoRegular;
    font-size: 14px;
    font-style: normal;
    color: var(--slate-12, #ecedee);
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    border-radius: 8px;
    background: var(--slate-8, #4c5155);
    transition: outline 0.3s ease;

    ::placeholder {
        color: ${(props) =>
            props.isEmpty
                ? '#ff9999'
                : 'var(--slate-12, #ecedee)'}; /* Tom de vermelho mais claro para o placeholder se o campo estiver vazio */
    }

    :focus,
    :active {
        outline: 0.6px solid var(--indigo-9, #3e63dd);
        ::placeholder {
            color: var(--slate-12, #ecedee);
        }
    }
`;

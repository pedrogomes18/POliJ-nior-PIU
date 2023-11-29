import styled from 'styled-components';

interface InputProps {
    isEmpty: boolean;
}

export const Input = styled.input<InputProps>`
    padding: 9px 24px;
    border-radius: 8px;
    border: ${(props) => (props.isEmpty ? '0.6px solid #e64e30' : 'none')};
    outline: none; /* Removi o outline padrão */
    font-family: NunitoRegular;
    font-size: 14px;
    font-style: normal;
    color: var(--slate-12, #ecedee);
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    background: var(--slate-8, #4c5155);
    transition: border 0.3s ease; /* Troquei de outline para border */

    ::placeholder {
        color: ${(props) =>
            props.isEmpty ? '#ff9999' : 'var(--slate-12, #ecedee)'};
    }

    :focus,
    :active {
        border: 0.6px solid var(--indigo-9, #3e63dd);
        ::placeholder {
            color: var(--slate-12, #ecedee);
        }
    }
`;

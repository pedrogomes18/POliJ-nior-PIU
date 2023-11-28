import React, { useState } from 'react';
import * as S from './styles';

export type InputProps = {
    place: string;
    type: string;
    id: string;
    name: string;
    setValue: (type: string) => void;
};

const Test: React.FC<InputProps> = ({ place, type, id, name, setValue }) => {
    const [isEmpty, setIsEmpty] = useState(false);

    const valida = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setIsEmpty(e.target.value.trim() === '');
    };

    return (
        <>
            <S.Input
                onChange={valida}
                placeholder={place}
                type={type}
                id={id}
                name={name}
                isEmpty={isEmpty}
            />
            {isEmpty && (
                <p
                    style={{
                        color: '#e61919',
                        fontFamily: 'NunitoRegular',
                        fontSize: '14px'
                    }}
                >
                    O campo não pode estar vazio.
                </p>
            )}
        </>
    );
};

export default Test;

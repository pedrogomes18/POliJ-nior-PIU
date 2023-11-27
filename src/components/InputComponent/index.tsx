import * as S from './styles';

export type InputProps = {
    place: string;
    type: string;
    id: string;
    name: string;
    setValue: (type: string) => void;
};

const Test: React.FC<InputProps> = ({ place, type, id, name, setValue }) => (
    <S.Input
        placeholder={place}
        type={type}
        id={id}
        name={name}
        onChange={(e) => setValue(e.target.value)}
    />
);

export default Test;

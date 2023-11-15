import * as S from './styles';

export type InputProps = {
    place: string;
    type: string;
    id: string;
    name: string;
};

const Test: React.FC<InputProps> = ({ place, type, id, name }) => (
    <S.Input placeholder={place} type={type} id={id} name={name} />
);

export default Test;

import { useRouter } from 'next/router';
import * as S from './styles';

interface BtnProps {
    text: string;
}

const BtnLogin: React.FC<BtnProps> = ({ text }) => {
    const router = useRouter();

    return <S.BtnLogin onClick={() => router.push('index')}>{text}</S.BtnLogin>;
};

export default BtnLogin;

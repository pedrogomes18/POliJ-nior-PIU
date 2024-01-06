import { useRouter } from 'next/router';
import UserService from 'services/UserService';
import * as S from './styles';

interface BtnProps {
    text: string;
    password: string;
    email: string;
}

const BtnLogin: React.FC<BtnProps> = ({ text, password, email }) => {
    const router = useRouter();
    const LogarFds = async () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        await UserService.login({ email, password });
        router.push('index');
    };
    return <S.BtnLogin onClick={LogarFds}>{text}</S.BtnLogin>;
};

export default BtnLogin;

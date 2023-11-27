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
        try {
            await UserService.login({ email, password });
            router.push('index');
        } catch (error) {
            console.log(`Esse foi o erro ${error}`);
        }
    };
    return <S.BtnLogin onClick={() => LogarFds()}>{text}</S.BtnLogin>;
};

export default BtnLogin;

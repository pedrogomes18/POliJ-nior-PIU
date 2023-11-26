import { useRouter } from 'next/router';
import * as S from './styles';

interface ModalComponentProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
    isOpen,
    setIsOpen
}) => {
    const router = useRouter();
    return (
        <S.ModalWrapper>
            <S.ModalContainer>
                <S.Text>Deseja realmente se deslogar?</S.Text>
                <S.DivButtons>
                    <S.ExitButton onClick={() => setIsOpen(!isOpen)}>
                        Exit
                    </S.ExitButton>
                    <S.ReturnButton onClick={() => router.push('login')}>
                        Yes
                    </S.ReturnButton>
                </S.DivButtons>
            </S.ModalContainer>
        </S.ModalWrapper>
    );
};

export default ModalComponent;

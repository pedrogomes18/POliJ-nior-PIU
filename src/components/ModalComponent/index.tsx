import UserService from 'services/UserService';
import * as S from './styles';

interface ModalComponentProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
    isOpen,
    setIsOpen
}) => {
    const handleExit = () => {
        setIsOpen(!isOpen);
    };

    const handleYes = () => {
        UserService.logout();
    };

    return (
        <S.ModalWrapper>
            <S.ModalContainer>
                <S.Text>Deseja realmente se deslogar?</S.Text>
                <S.DivButtons>
                    <S.ExitButton onClick={handleExit}>Exit</S.ExitButton>
                    <S.ReturnButton onClick={handleYes}>Yes</S.ReturnButton>
                </S.DivButtons>
            </S.ModalContainer>
        </S.ModalWrapper>
    );
};

export default ModalComponent;

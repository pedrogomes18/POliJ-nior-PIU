/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import UserService from 'services/UserService';
import Test from '../InputComponent';
import * as S from './styles';
import 'react-toastify/dist/ReactToastify.css';

const MainComponent: React.FC = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        checkButtonDisabled();
    }, [email, password]);

    const checkButtonDisabled = () => {
        setIsButtonDisabled(email.trim() === '' || password.trim() === '');
    };

    const handleShowAlert = (text: string) => {
        toast.info(text, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000, // Fechar após 5 segundos
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                // Adicione estilos personalizados aqui
                backgroundColor: '#e64e30',
                color: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
            }
        });
    };

    const handleLogin = async () => {
        const isValid = email.trim() !== '' && password.trim() !== '';

        if (isValid) {
            try {
                const response = await UserService.login({ email, password });
                router.push('index');
            } catch (error) {
                const text =
                    'Verifique se o Email e/ou Senha e tente novamente';
                handleShowAlert(text);
                alert('tenta dinovo')
                console.error('Erro ao tentar fazer login:', error);
            }
        } else {
            // Exibir um alerta ou mensagem ao usuário (evite usar alert padrão)
            console.error('Erro: Digite corretamente, por favor.');
        }
    };

    return (
        <div>
            <S.Inputs>
                <Test
                    type="text"
                    place="Celular, E-mail ou nome de usuário"
                    id="InputUser"
                    name="InputUser"
                    setValue={(value) => {
                        setEmail(value);
                        checkButtonDisabled();
                    }}
                />

                <Test
                    type="password"
                    place="Senha"
                    id="InputSenha"
                    name="InputSenha"
                    setValue={(value) => {
                        setPassword(value);
                        checkButtonDisabled();
                    }}
                />
                <a href="#">Esqueceu a Senha?</a>
            </S.Inputs>
            {/* Use isDisabled para desativar o botão dinamicamente */}
            <S.BtnLogin onClick={handleLogin} isDisabled={isButtonDisabled}>
                Entrar
            </S.BtnLogin>
        </div>
    );
};

export default MainComponent;

/* eslint-disable jsx-a11y/anchor-is-valid */
import LoginComponent from 'components/LoginComponent';
import * as S from './styles';

const LoginTemplate = () => {
    return (
        <S.Div>
            <S.Section>
                <div className="boxLogin">
                    <div className="header">
                        <img
                            src="/assets/img/ImagensLogin/chicken.svg"
                            alt="Imagem de um PIU"
                        />
                        <h2>PIUPIUWER</h2>
                    </div>
                </div>

                <div className="loger">
                    <h3>Login</h3>
                    <LoginComponent />
                    <p>
                        Ainda não tem uma conta? <a href="#">Cadastre-se</a>
                    </p>
                </div>
            </S.Section>
            <S.Section className="azulBackground">
                <img
                    src="/assets/img/ImagensLogin/foto.svg"
                    alt="BackGround POLI JÚNIORS"
                />
            </S.Section>
        </S.Div>
    );
};
export default LoginTemplate;

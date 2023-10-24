import CardItem from 'components/CardComponent';
import * as S from './styles';
import CardItemArticle from 'components/ArticleCard';

const HomeTemplate = () => (
    <S.Container>
        <S.Menu>
            <div className='title'>
                <img src="/assets/img/IconsMenu/periquito.svg" alt="Periquito" />
                <h2>PIUPIUWER</h2>
            </div>
            <div className='MenuContainer'>
                <ul>
                    <li>
                        <img src="/assets/img/IconsMenu/home.svg" alt="Casa" />
                        <h3>Página Inicial</h3>
                    </li>
                    <li>
                        <img src="/assets/img/IconsMenu/sino.svg" alt="Sino" />
                        <h3>Notificações</h3>
                    </li>
                    <li>
                        <img src="/assets/img/IconsMenu/msg.svg" alt="Mensagem" />
                        <h3>Mensagens</h3>
                    </li>
                    <li>
                        <img src="/assets/img/IconsMenu/nuvem.svg" alt="Nuvem" />
                        <h3>Salvos</h3>
                    </li>
                    <li>
                        <img src="/assets/img/IconsMenu/perfil.svg" alt="Perfil" />
                        <h3>Perfil</h3>
                    </li>
                    <li>
                        <img src="/assets/img/IconsMenu/engrenagem.svg" alt="Engrenagem" />
                        <h3>Configurações</h3>
                    </li>
                </ul>
                
            </div>
            <div className='userPhoto'>
                <img src="/assets/img/IconsMenu/user.png" alt="Usuário FOTO" />
            </div>
        </S.Menu>
        <S.Feed>
            <S.Div>
                <S.InputContainer>
                    <S.Input placeholder='Ouvir um piu...'/>
                    <S.ImgLupa src="/assets/img/lupa.svg"/>
                </S.InputContainer>

                <S.ContainerPiar>
                    <S.TeaxtArea placeholder='Quero dar um piu...' />
                    <S.Buttons>
                        <S.BtnImg>
                            <S.ImgBtn src="/assets/img/ImageButtons/img.svg" />
                        </S.BtnImg>

                        <S.BtnImg>
                            <S.ImgBtn src="/assets/img/ImageButtons/Video.svg" />
                        </S.BtnImg>

                        <S.BtnImg>
                            <S.ImgBtn src="/assets/img/ImageButtons/Frame.svg" />
                        </S.BtnImg>

                        <S.BtnImg>
                            <S.ImgBtn src="/assets/img/ImageButtons/Tag.svg" />
                        </S.BtnImg>

                        <S.BtnImg>
                            <S.ImgBtn src="/assets/img/ImageButtons/gif.svg" />
                        </S.BtnImg>

                        <S.BtnEnviar>
                            <S.ImgBtn src="/assets/img/ImageButtons/aviao.svg" />
                        </S.BtnEnviar>
                    </S.Buttons>
                </S.ContainerPiar>
            </S.Div>
            <S.Linha />

            <CardItem text="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." name="Giovani Ciolin" username="Giornio" image="/assets/img/ImagesUser/pedro.png"></CardItem>
            <CardItem text="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." name="Pedro Gomes" username="Mixers18" image="/assets/img/ImagesUser/dog.jpeg"></CardItem>
            <CardItem text="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." name="Allan Douglas" username="Quatyli" image="/assets/img/ImagesUser/cat.jpg"></CardItem>
        </S.Feed>
        <S.Article>
            <S.ContainerTitle>
                <img src="/assets/img/ImagesAltas/Frame.svg" alt="Icone Piu" />
                <S.Title>Pius em alta</S.Title>
            </S.ContainerTitle>
            <CardItemArticle image="/assets/img/ImagesAltas/justica.png" titulo="BLÁ, BLÁ, BLÁ" texto="askljdjklasdjlkasjlçd"/>
            <CardItemArticle image="/assets/img/ImagesAltas/justica.png" titulo="" texto="" />
            <CardItemArticle  image="/assets/img/ImagesAltas/justica.png" titulo="" texto=""/>
            <CardItemArticle image="/assets/img/ImagesAltas/justica.png" titulo="" texto="" />
        </S.Article>
    </S.Container>
);
export default HomeTemplate;

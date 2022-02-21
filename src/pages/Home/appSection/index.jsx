import { Container } from '../../../styles/container';
import {BoxPejota, ContentApp, CtaApp, DownloadApp, ImageBox, ImgApp, InfoApp, LeftApp, ListaApp, RightApp, SectionApp, TextBox, CircleImg, CircleBoxImg} from './style'
import appImg from '../../../assets/mockup.svg'
import circles from '../../../assets/circle-mockup.svg'
import iconApp from '../../../assets/icon-neon.svg'
import playStore from '../../../assets/google-play.svg'
import appStore from '../../../assets/apple-store.svg'
import cartao from '../../../assets/icon-cartao-credito.svg'
import taxas from '../../../assets/icon-taxas.svg'
import investimentos from '../../../assets/icon-investimentos.svg'
import cardPj from '../../../assets/card-front-pj.svg'
import circleBox from '../../../assets/circle-box.svg'
import halfCircleBox from '../../../assets/half-circle-box.svg'
import { Title2 } from '../../../styles/titles';
import { ButtonPrimary } from '../../../components/Buttons/Buttons';

export default function AppSection() {
    const stores = [
        {
            icon: playStore,
            name: 'Download Play Store'
        },

        {
            icon: appStore,
            name: 'Download App Store',
        }
    ]

    const list = [
        {
            icon: cartao,
            title: 'Cartão de crédito sem anuidade',
            text: 'Conta digital com cartão de crédito sem anuidade e sem complicação'
        },

        {
            icon: taxas,
            title: 'Sem taxas',
            text: 'Transferências, boletos de depósito e outros serviços gratuitos'
        },

        {
            icon: investimentos,
            title: 'Mais investimentos',
            text: 'Rendem mais que a poupança e você resgata quando quiser'
        },
    ]
    return(
        <>
            <SectionApp>
                <Container>
                    <ContentApp>
                        <LeftApp>
                            <ImgApp>
                                <img src={appImg} alt="Imagem do app Neon" title="App Neon" />
                                <img src={circles} alt="circulos" />
                            </ImgApp>
                            
                            <InfoApp>
                                <div>
                                    <img src={iconApp} alt="Neon App" title="App Neon" />
                                </div>
                                <span>Baixe nosso app</span>
                                <p>Que tal abrir uma conta digital para ver como a gente faz a sua vida muito mais simples?</p>
                            </InfoApp>
                            <DownloadApp>
                                {stores.map((item) => 
                                <li key={item.name}>
                                    <img src={item.icon} alt={item.name} title={item.name} />
                                </li>)}
                            </DownloadApp>
                        </LeftApp>
                        <RightApp>
                            <Title2
                            marginBottom={4.9}
                            maxWidth={48.8}
                            >
                                Resolva sua vida direto pelo app Neon!
                            </Title2>
                            <ListaApp>
                                {list.map((item) => 
                                <li key={item.title}>
                                    <img src={item.icon} alt={item.title} title={item.title} />
                                    <div>
                                        <span>{item.title}</span>
                                        <p>{item.text}</p>
                                    </div>
                                </li>)}
                            </ListaApp>
                            <CtaApp>
                            Conheça outros produtos
                            </CtaApp>
                            <BoxPejota>
                                <CircleImg>
                                <img src={circleBox} alt="Circulo" title='circulo' />
                                </CircleImg>
                                <CircleBoxImg>
                                <img src={halfCircleBox} alt="Circulo" title='circulo' />
                                </CircleBoxImg>
                                <TextBox>
                                    <Title2 white marginBottom={1.1}>
                                        Neon Pejota
                                    </Title2>
                                    <span>Contas digitais PJ gratuitas para decolar seu negócio!</span>
                                    <p>As melhores contas para fazer pagamentos, compras e receber dos seus clientes.</p>
                                    <div>
                                        <ButtonPrimary text="Sou MEI"/>
                                        <ButtonPrimary text="Sou ME"/>
                                    </div>
                                </TextBox>
                                <ImageBox>
                                    <img src={cardPj} alt="Imagem cartao pejota" title="Imagem cartão Neon Pejota" />
                                </ImageBox>
                            </BoxPejota>
                        </RightApp>
                    </ContentApp>
                </Container>
            </SectionApp>
        </>
    );
}
import Logo from '../../assets/logo.svg'
import youtube from '../../assets/youtube.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter-white.svg'
import mail from '../../assets/envelope.svg'
import message from '../../assets/chat.svg'
import { Container } from '../../styles/container'
import { Link } from 'react-router-dom'

import { StyledFooter, TopFooter, LogoFooter, Social, SocialList, MainFooter, NavFooter, NavItem, NavList, InfoFooter, CopyFooter } from './style'

export default function Footer() {

    const socialNetwork = [
        {
            link: 'https://youtube.com.br',
            name: 'YouTube',
            icon: youtube,
        },

        {
            link: 'https://linkedin.com',
            name: 'Linkedin',
            icon: linkedin,
        },

        {
            link: 'https://facebook.com.br',
            name: 'Facebook',
            icon: facebook,
        },

        {
            link: 'https://instagram.com',
            name: 'Instagram',
            icon: instagram,
        },

        {
            link: 'https://twitter.com',
            name: 'Twitter',
            icon: twitter,
        },
    ]
    const linksFooter = [
        {
            title: 'Produtos Neon',
            links: ['/cartao-de-credito', '/cartao-pre-pago', '/neon-mais', '/investimento', '/emprestimo'],
            pages: ['Cartão de crédito', 'Cartão pré-pago', 'Neon Mais', 'Investimentos', 'Empréstimo'],
        },

        {
            title: 'Conta digital PJ',
            links: ['/sou-mei', '/sou-me'],
            pages: ['Sou MEI', 'Sou ME'],
        },

        {
            title: 'Blog',
            links: ['/foca-no-dinheiro', '/o-poder-da-comunidade', 'desafio-das-52-semanas', '/planilha-de-gastos'],
            pages: ['#focanodinheiro', 'O poder da comunidade', 'Desafio das 52 semanas', 'Planilha de gastos'],
        },

        {
            title: 'Institucional',
            links: ['/conheca-a-neon', '/trabalhe-conosco', '/termos-de-uso', '/politicas-de-privacidade'],
            pages: ['Conheça a Neon', 'Trabalhe conosco', 'Termos de uso', 'Políticas de privacidade'],
        },

        {
            title: 'Ajuda',
            links: ['/ouvidoria', '/fale-conosco'],
            pages: ['Ouvidoria', 'Fale conosco'],
        },
    ]
    const infoFooter = [
        {
            title: 'Atendimento:',
            text: 'oi@neon.com.br (24 horas)',
            icon: mail,
        },

        {
            title: 'Imprensa:',
            text: 'imprensa@neon.com.br',
            icon: message,
        },
    ]

    return (
        <>
        <StyledFooter>
            <Container>
                <TopFooter>
                    <LogoFooter>
                        <img src={Logo} alt="Banco Neon" title="Banco neon" />
                    </LogoFooter>
                    <Social>
                        <p>Acompanhe nas redes</p>
                        <SocialList>
                            {socialNetwork.map((e) => <li key={e.name}>
                            <a href={e.link} target="_blank" rel="nofollow noreferrer">
                                <img src={e.icon} alt={e.name} title={e.name} />
                            </a>
                            </li>)}
                        </SocialList>
                    </Social>
                </TopFooter>
                <MainFooter>
                    <NavFooter>
                        {linksFooter.map((e) => 
                        <NavItem>
                            <span key={e.title}>{e.title}</span>
                            <NavList>
                                    {e.pages.map((p, array)=> <li>
                                        <Link to={e.links[array]}>
                                            {p}
                                        </Link>
                                    </li>)}
                            </NavList>
                        </NavItem>
                        )}
                    </NavFooter>
                    <InfoFooter>
                        {infoFooter.map((item) => 
                            <li key={item.title}>
                                <img src={item.icon} alt={item.title} title={item.title} />
                                <div>
                                <span>{item.title}</span>
                                <small>{item.text}</small>
                                </div>
                            </li>)}
                    </InfoFooter>
                </MainFooter>
                <CopyFooter>
                    <p>Oi! Leu até aqui? Você se preocupa com os mínimos detalhes, mesmo. A gente também. Por isso o time Neon está sempre trabalhando para fazer a conta digital perfeita para você ;&#41;</p>
                </CopyFooter>
            </Container>
        </StyledFooter>
        </>
    );
}
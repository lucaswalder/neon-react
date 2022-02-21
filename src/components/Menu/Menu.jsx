import { ContentHeader, Header, LogoHeader, NavBar } from "./style";
import {Container} from "../../styles/container"
import logo from '../../assets/logo.svg'
import{ButtonSecondary} from '../Buttons/Buttons'
import { useState } from "react";
import { Link } from "react-router-dom";


function Menu() {

    const pages = [
        {
            page: ['Produtos Neon', 'Conta digital PJ', 'Quem somos', 'Blog', 'Ajuda'],

            link: ['/produtos-neon', '/conta-digital-pj', '/quem-somos', '/blog', '/ajuda']
        }
    ]

    const [header, setHeader] = useState(false)
    window.addEventListener('scroll', () => {
        if(window.scrollY > 20 )  {
            setHeader(true)
          } else {
              setHeader(false)
          }
    })

    return <>
    <Header className={header ? "scrolled" : ""}>
        <Container>
            <ContentHeader>
                <LogoHeader>
                    <Link to='/'>
                        <img src={logo} alt="Neon - Abra sua conta Digital" title="Neon - Abra sua conta digital" />
                    </Link>
                </LogoHeader>
                <NavBar>
                    {pages.map((item) =>
                    <ul>
                        {item.page.map((p, array)=> <li>
                            <Link to={item.link[array]}>
                                {p}
                            </Link>
                        </li>)}
                    </ul>
                    )}
                    <ButtonSecondary
                    text="Abra sua conta digital"
                    />
                </NavBar>
                
            </ContentHeader>
        </Container>
    </Header>
    </>
};

export default Menu;
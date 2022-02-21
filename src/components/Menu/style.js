import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 8.8rem;
    background: transparent;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all .3s;
    &.scrolled {
        background-color: ${({theme}) => theme.colors.blue};
        height: 7.2rem;
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`; 

export const NavBar = styled.nav`
    width: 100%;
    max-width: 86.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
        width: 100%;
        max-width: 58.3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
            a {
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                font-size: 1.6rem;
                line-height: 125%;
                color: ${({theme}) => theme.colors.white};
                transition: color .3s;
                &:hover {
                    color: ${({theme}) => theme.colors.yellow};
                }
            }
        }
    }
`;

export const LogoHeader = styled.div`
    width: 100%;
    max-width: 12.9rem;
`;
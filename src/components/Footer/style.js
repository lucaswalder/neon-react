import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding-top: 4.9rem;
    background: ${({theme}) => theme.colors.blue};
`;

export const TopFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 4.8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const LogoFooter = styled.div`
    max-width: 13.1rem;
`;

export const Social = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 38rem;
    p {
        font-size: 1.4rem;
        line-height: 125%;
        text-align: right;
        color: ${({theme}) => theme.colors.white};
        opacity: 0.7;
    }
`;

export const SocialList = styled.ul `
    width: 100%;
    max-width: 20.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 3rem;
    li {
        a {
            img {
                transition: transform .3s;
            }
            &:hover {
                img {
                    transform: scale(1.1);
                }
            }
        }
    }
`;

export const MainFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5.7rem 0 6.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const NavFooter = styled.nav`
    width: 100%;
    max-width: 86rem;
    display: flex;
    justify-content: space-between;
`;

export const NavItem = styled.div `
    span {
        display: block;
        margin-bottom: 2.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 125%;
        color: ${({theme}) => theme.colors.white};
    }
`;

export const NavList = styled.ul`
    li {
        &:not(:last-child) {
            margin-bottom: 2.9rem;
        }
        a {
            font-size: 14px;
            line-height: 17px;
            color: ${({theme}) => theme.colors.white};
            opacity: 0.7;
            transition: opacity .3s;
            &:hover {
                opacity: 1;
            }
        }
    }
`;

export const InfoFooter = styled.ul`
    li {
        width: 100%;
        max-width: 28rem;
        display: flex;
        align-items: flex-start;
        background: rgba(0, 164, 240, 0.23);
        border-radius: 6px;
        padding: 1.7rem 2.8rem 1.7rem 2.5rem;
        img {
            margin-top: 0.8rem;
        }
        div {
            margin-left: 2.4rem;
            span {
                display: block;
                margin-bottom: 1rem;
                font-weight: bold;
                font-size: 1.4rem;
                line-height: 150%;
                color: ${({theme}) => theme.colors.white};
            }
            small {
                font-size: 1.4rem;
                line-height: 150%;
                color: ${({theme}) => theme.colors.white};
            }
        }

        &:first-child {
            margin-bottom: 2.4rem;
        }
    }
`;

export const CopyFooter = styled.div`
    padding: 3.9rem 0;
    border-bottom: 4px solid ${({theme}) => theme.colors.yellow};
    p {
        width: 100%;
        max-width: 66rem;
        font-size: 14px;
        line-height: 150%;
        margin-left: 4.3rem;
        color: rgba(255, 255, 255, 0.8);
        position: relative;
        &::before {
            content: '😀';
            position: absolute;
            top: 0;
            left: -4.3rem;
        }
    }
`;
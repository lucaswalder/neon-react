import styled from "styled-components";
import points from '../../../assets/points.svg'


export const SectionApp = styled.section`
    padding-top: 12.9rem;
`;

export const ContentApp = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const LeftApp = styled.div`
    width: 100%;
    max-width: 28rem;
`;

export const ImgApp = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 12.9rem;
    height: 58.2rem;
    img{
        position: absolute;
        &:first-child {
            top: 0;
            left: 0;
            width: 100%;
            z-index: 2;
        }
        &:nth-child(2) {
            top: 8.7rem;
            right: 11.4rem;
            z-index: 1;
            max-width: 37.7rem;
            height: 42.3rem;
        }
    }
`;

export const InfoApp = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    div {
        margin-bottom: 3.1rem;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: -10.4rem;
            width: 0.5rem;
            margin-left: -0.25rem;
            left: 50%;
            height: 8.3rem;
            background: url(${points}) no-repeat center center;
        }
    }
    span {
        display: block;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 150%;
        text-align: center;
        letter-spacing: -0.5px;
        color: ${({theme}) => theme.colors.gray600};
    }
    p {
        font-size: 16px;
        line-height: 150%;
        text-align: center;
        color: ${({theme}) => theme.colors.gray400};
        opacity: 0.8;
        margin-bottom: 2.6rem;
    }
`;

export const DownloadApp = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 4rem;
    li {
        width: 100%;
        max-width: 20.2rem;
        &:first-child {
            margin-bottom: 1.4rem;
        }
    }
`;

export const RightApp = styled.div`
    margin-top: 2.6rem;
    width: 100%;
    max-width: 80rem;
`;

export const ListaApp = styled.ul`
margin-bottom: 3.2rem;
    li {
        display: flex;
        align-items: center;
        padding: 3.3rem 0;
        border-bottom: 1px solid rgba(225, 224, 231, 0.9);
        &:first-child{
            padding-top: 0;
        }
        div {
            margin-left: 4.3rem;
            position: relative;
            width: 100%;
            max-width: 69.6rem;
            &:after {
                position: absolute;
                content: '';
                width: 0.7rem;
                height: 0.7rem;
                border-right: 1px solid ${({theme}) => theme.colors.gray200};
                border-bottom: 1px solid ${({theme}) => theme.colors.gray200};
                right: 0;
                top: 50%;
                margin-top: -0.35rem;
                transform: rotate(-45deg);
            }
            span {
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                font-size: 2.4rem;
                line-height: 150%;
                letter-spacing: -0.5px;
                color: ${({theme}) => theme.colors.gray400};
            }

            p {
                font-size: 1.8rem;
                line-height: 150%;
                color: ${({theme}) => theme.colors.gray300};
            }
        }
    }
`;

export const CtaApp = styled.a`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 112%;
    letter-spacing: -0.5px;
    color: ${({theme}) => theme.colors.blue};
    position: relative;
    &:after {
        position: absolute;
        content: '';
        width: 1rem;
        height: 0.2rem;
        background: ${({theme}) => theme.colors.yellow};
        bottom: 0;
        right: -1.8rem;
    }
`;

export const BoxPejota = styled.div`
    margin-top: 14.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5.9rem;
    width: 100%;
    max-width: 80rem;
    height: 41rem;
    background: linear-gradient(100.52deg, #00A5F0 5.63%, #03E7E7 95.75%);
    border-radius: 12px;
    position: relative;
`;

export const CircleImg = styled.div`
    position: absolute;
    top: 3.9rem;
    right: 0;
`;

export const CircleBoxImg = styled.div`
    position: absolute;
    top: 20.1rem;
    right: 14.8rem;
`;

export const TextBox = styled.div`
    width: 100%;
    max-width: 32.7rem;
    span {
        display: block;
        margin-bottom: 0.8rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 150%;
        letter-spacing: -0.5px;
        color: ${({theme}) => theme.colors.white};
    }
    p {
        font-size: 1.6rem;
        line-height: 150%;
        color: ${({theme}) => theme.colors.white};
        margin-bottom: 0.7rem;
    }

    div {
       width: 100%;
       max-width: 28rem;
       justify-content: space-between;
       display: flex;
       a {
           width: 13.2rem;
       }
    }
`;

export const ImageBox =  styled.div`
    margin-right: -3rem;
    position: relative;
    z-index: 1;
`;
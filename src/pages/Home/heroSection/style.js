import styled from "styled-components";

export const Hero = styled.section`
    padding-top: 17.5rem;
    position: relative;
    background: linear-gradient(100.52deg, #00A5F0 5.63%, #00D7D7 95.75%);
    &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(45.08deg, #0B6EB6 -0.6%, rgba(0, 215, 215, 0) 72.53%);
        opacity: 0.6;
        top: 0;
        left: 0;
    }
`;

export const ContentHero = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const LeftHero = styled.div`
    span {
        width: 100%;
        max-width: 68.3rem;
        display: block;
        margin-bottom: 3.2rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 2.4rem;
        line-height: 120%;
        letter-spacing: -0.5px;
        color: ${({theme}) => theme.colors.white};
        opacity: 0.8;
    }
`;

export const HeroList = styled.div`
    margin-top: 6.4rem;
    display: flex;
    padding-bottom: 13.5rem;
    li {
        display: flex;
        align-items: center;
        div{
            width: 100%;
            max-width: 4.8rem;
            height: 4.8rem;
            display: grid;
            place-content: center;
            background: linear-gradient(180deg, #35CAE2 0%, rgba(53, 202, 226, 0) 100%);
            border-radius: 50%;
        }
        p {
            font-size: 1.8rem;
            max-width: 16.6rem;
            line-height: 22px;
            color: ${({theme}) => theme.colors.white};
            margin-left: 1.2rem;
        }
    }
`;


export const TextBgHero = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 5.6rem;
    line-height: 8.4rem;
    letter-spacing: -0.2rem;
    color: ${({theme}) => theme.colors.white};
    opacity: 0.4;
    position: relative;
    top: -15.1rem;
    left: 4.2rem;
`;

export const ImagesHero = styled.div`
    width: 100%;
    max-width: 63.8rem;
    height: 46.3rem;
    position: relative;
    margin-right: -14.8rem;
`;

export const FrontCard = styled.div`
    position: absolute;
    left: -6.8rem;
    top: 4.1rem;
    width: 100%;
    max-width: 43.827rem;
    height: 30.507rem;
    z-index: 3;
`;

export const BackCard = styled.div`
    position: absolute;
    width: 100%;
    width: 35.295rem;
    height: 32.226rem;
    z-index: 2;
    bottom: -3.2rem;
    right: 8.7rem;
    img {
        width: 100%;
    }
`;

export const Circle = styled.div`
    position: absolute;
    width: 100%;
    max-width: 55.3rem;
    height: 48.1rem;
    right: 4.7rem;
    bottom: -4.6rem;
    z-index: 1;
`;
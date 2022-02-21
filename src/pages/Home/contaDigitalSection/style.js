import styled from "styled-components";

export const SectionConta = styled.section`
    padding-bottom: 8.6rem;
`;

export const ContentContaDigital = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LeftContent = styled.div`
    width: 100%;
    max-width: 54.2rem;
`;

export const ListContaDigital = styled.ul`
    margin-bottom: 4.9rem;
    li {
        display: flex;
        &:not(:last-child) {
            margin-bottom: 3.7rem;
        }
        span {
            display: block;
            margin-bottom: 0.4rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 2rem;
            line-height: 112%;
            letter-spacing: -0.5px;
            color: ${({theme}) => theme.colors.gray400};
        }
        p {
            font-size: 1.8rem;
            line-height: 150%;
            color: ${({theme}) => theme.colors.gray300};
        }
    }
`;
export const IconList = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    background: ${({theme}) => theme.colors.green};
    border-radius: 8px;
    display: grid;
    place-content: center;
    margin-right: 2.6rem;
`;

export const RightContent = styled.div`
    width: 100%;
    max-width: 71.1rem;
    height: 59.8rem;
    position: relative;
    margin-right: -15.6rem;
    img {
        position: absolute;
        &:first-child {
            bottom: 4.7rem;
            left: 0;
            z-index: 2;
        }

        &:nth-child(2) {
            right: 23.3rem;
            top: 0;
            z-index: 2;
        }

        &:nth-child(3) {
            right: 0;
            bottom: 0;
            z-index: 1;
        }
    }
`;
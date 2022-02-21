import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    max-width: 38.4rem;
    background: rgba(241, 240, 245, 0.9);
    border-radius: 9px;
    padding: 3.2rem 0 2.3rem 3.7rem;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 30.8rem;
        span {
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1.8rem;
            line-height: 112%;
            letter-spacing: -1px;
            color: ${({theme}) => theme.colors.gray500};
        }
    }
    p {
        font-size: 1.8rem;
        line-height: 150%;
        color: ${({theme}) => theme.colors.gray400};
        margin-top: 2.1rem;
        width: 100%;
        max-width: 32.2rem;
        height: 10.8rem;
        overflow-y: auto;
    }
`;
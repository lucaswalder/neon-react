import styled from "styled-components";

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 6.4rem;
    line-height: 112%;
    letter-spacing: -1px;
    color: ${(props) => props.white ? props.theme.colors.white : props.theme.colors.gray600};
    margin-bottom: ${(props) => props.marginBottom}rem;
    width: 100%;
    max-width: ${(props) => props.maxWidth}rem;
`;

export const Title2 = styled(Title).attrs({as: 'h2'}) `
    font-size: 4rem;
    line-height: 112%;
    span {
        color: ${(props) => props.white ? props.theme.colors.white : props.theme.colors.gray200};
        font-size: 4rem;
        display: block;
    }
`;

export const Title3 = styled(Title).attrs({as: 'h3'}) `
    font-size: 2.4rem;
    line-height: 150%;
    letter-spacing: -0.5px;

`;

export const Title4 = styled(Title).attrs({as: 'h4'}) `
    font-size: 2rem;
    line-height: 112%;
    letter-spacing: -0.5px;
`;
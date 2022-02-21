import styled from "styled-components";

export const SecondaryButton = styled.a`
    display: inline-block;
    height: 4.1rem;
    padding: 0 1.8rem;
    border-radius: 122px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 4.1rem;
    text-align: right;
    color: ${({theme}) => theme.colors.white};
    background: transparent;
    border: 1px solid ${({theme}) => theme.colors.white};
    text-align: center;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        color: ${({theme}) => theme.colors.blue};
        background: ${({theme}) => theme.colors.white};
    }
`;

export const PrimaryButton = styled(SecondaryButton) `
    background: ${({theme}) => theme.colors.yellow};
    border: none;
    color: ${({theme}) => theme.colors.darkGold};
    &:hover {
        background: ${({theme}) => theme.colors.lightYellow};
        color: ${({theme}) => theme.colors.darkGold};

    }
`;
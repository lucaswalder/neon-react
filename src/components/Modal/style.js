import styled from "styled-components";

export const ModalContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: grid;
    place-content: center;
    z-index: 99;
`;

export const ModalBox = styled.div`
    margin-top: 14.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5.9rem;
    width: 100%;
    max-width: 80rem;
    background: linear-gradient(100.52deg, #00A5F0 5.63%, #03E7E7 95.75%);
    border-radius: 12px;
    position: relative;
    div{
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-weight: bold;
        color: ${({theme}) => theme.colors.white};
        border: 2px solid ${({theme}) => theme.colors.white};
        border-radius: 50%;
        padding: .5rem 1rem;
        cursor: pointer;
    }
`;
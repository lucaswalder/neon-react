import { Title3 } from "../../styles/titles";
import { ButtonPrimary } from "../Buttons/Buttons";
import { ModalBox, ModalContent } from "./style";

export default function Modal({closeModal}) {
    return(
        <ModalContent>
            <ModalBox>
                <Title3 white marginBottom={3}>
                    Peça já seu cartão
                </Title3>
                <ButtonPrimary
                text="Quero meu cartão"
                />

                <div onClick={closeModal}>X</div>
            </ModalBox>
        </ModalContent>
    );
}
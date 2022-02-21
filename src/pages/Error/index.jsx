import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer";
import { Container } from "../../styles/container";
import { ContentError } from './style';
import { Title } from "../../styles/titles";

export default function Error() {
    return (
        <>
        <Menu/>
        <ContentError>
            <Container>
                <Title white>
                    Ooops..
                    Página não encontrada
                </Title>
            </Container>
        </ContentError>
        <Footer/>
        </>
    );
}
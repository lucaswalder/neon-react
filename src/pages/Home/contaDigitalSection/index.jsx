import { Container } from "../../../styles/container";
import { Title2 } from "../../../styles/titles";
import { ContentContaDigital, IconList, LeftContent, RightContent, SectionConta, ListContaDigital } from "./style";
import iconCartao from '../../../assets/icon-cartao-internacional.svg'
import iconMensalidade from '../../../assets/icon-taxa-zero.svg'
import iconInvestimento from '../../../assets/icon-poupanca.svg'
import mockup01 from '../../../assets/mockup-01.svg'
import mockup02 from '../../../assets/mockup-02.png'
import iconCircle from '../../../assets/circle-conta-digital.svg'
import { ButtonPrimary } from "../../../components/Buttons/Buttons";

export default function ContaDigital() {
    const listConta = [
        {
            id: 1,
            title: "Cartão visa internacional",
            text: "Tenha facilidades e benefícios para o seu dia a dia.",
            icon: iconCartao,
        },

        {
            id: 2,
            title: "Zero mensalidade e anuidade",
            text: "Não gaste grana pagando taxas desnecessárias.",
            icon: iconMensalidade,
        },

        {
            id: 3,
            title: "Investimento que rende mais que a poupança",
            text: "Invista o seu dinheiro de maneira mais rentável.",
            icon: iconInvestimento,
        },
       
    ]
    return (
        <SectionConta>
            <Container>
                <ContentContaDigital>
                    <LeftContent>
                        <Title2 marginBottom={4.5}>
                            <span>Aproveite</span>
                            Domine o seu dinheiro com uma conta 100% digital
                        </Title2>
                        <ListContaDigital>
                            {listConta.map((item) => 
                            <li key={item.id}>
                                <IconList>
                                    <img src={item.icon} alt={item.title} title={item.title}/>
                                </IconList>
                                <div>
                                    <span>{item.title}</span>
                                    <p>{item.text}</p>
                                </div>
                            </li>)}
                        </ListContaDigital>

                        <ButtonPrimary 
                        text="Abra sua conta digital"
                        />

                    </LeftContent>
                    <RightContent>
                        <img src={mockup01} alt="App Neon" title="App Neon" />
                        <img src={mockup02} alt="App Neon" title="App Neon" />
                        <img src={iconCircle} alt="Circulo" title="Círculo Neon" />
                    </RightContent>
                </ContentContaDigital>
            </Container>
        </SectionConta>
    );
}
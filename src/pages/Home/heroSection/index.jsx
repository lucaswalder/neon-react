import { useState } from "react";
import { ButtonPrimary } from "../../../components/Buttons/Buttons";
import { Container } from "../../../styles/container";
import {Title} from '../../../styles/titles'
import Modal from "../../../components/Modal/index";
import {Hero, ContentHero, LeftHero, HeroList, TextBgHero, ImagesHero, FrontCard, BackCard, Circle} from './style'
import cartao from '../../../assets/icon-anuidade.svg'
import contaDigital from '../../../assets/icon-conta-digital.svg'
import rendeMais from '../../../assets/icon-dinheiro.svg'
import cartaoFront from '../../../assets/card-neon-frnt.png'
import cartaoBack from '../../../assets/card-neon-back.png'
import circle from '../../../assets/circle-cards-neon.svg'

export default function HeroSection({}) {

    const advantageList = [
        {
            text: 'Cartão sem anuidade',
            icon: cartao,
        },

        {
            text: 'Conta digital 100% grátis',
            icon: contaDigital,
        },

        {
            text: 'Seu dinheiro rendendo mais',
            icon: rendeMais,
        },
    ]

    const [modal, setModal] = useState(false)
    function openModal() {
        setModal(true)
    }

    return(
        <>
            <Hero>
                <Container>
                    <ContentHero>
                        <LeftHero>
                            <span> Abra sua conta, é só baixar o app!</span>
                            <Title
                            white
                            maxWidth={68.3}
                            marginBottom={3.9}>
                            A conta digital certa pra cuidar bem do seu dinheiro
                            </Title>

                            <ButtonPrimary
                                text="Abra sua conta digital"
                                modal={openModal}
                            />

                            <HeroList>
                                {advantageList.map((item) =>
                                <li key={item.text}>
                                    <div>
                                        <img src={item.icon} alt={item.text} title={item.text} />
                                    </div>
                                    <p>{item.text}</p>
                                </li>
                                )}
                            </HeroList>

                        </LeftHero>
                        <ImagesHero>
                            <TextBgHero>
                                Banco 100% digital
                            </TextBgHero>
                            <FrontCard>
                                <img src={cartaoFront} alt="" />
                            </FrontCard>
                            <BackCard>
                                <img src={cartaoBack} alt="" />
                            </BackCard>
                            <Circle>
                                <img src={circle} alt="" />
                            </Circle>
                        </ImagesHero>
                    </ContentHero>
                </Container>
            </Hero>

            {modal && <Modal
            closeModal={() => setModal(false)}
            />}
        </>
    );
}
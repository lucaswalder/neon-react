import { SectionDepo, SwiperContent } from "./style";
import {Container} from '../../../styles/container'
import { Title2 } from "../../../styles/titles";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import CardDepoimento from "../../../components/Depoimentos";

export default function Depoimentos() {
    const depos = [
        {
            id: 1,
            nome:'@marciogurka',
            depoimento: 'Valeu @banconenon! Linda embalagem e o cartão tbm é lindo! Muito amor por esse banco #bancoNeon',
        },

        {
            id: 2,
            nome:'@kleriene18',
            depoimento: 'Eu uso o Neon pra render o pouquinho que eu tenho. Como disse minha amiga Bruna, um dia eu abro o app de novo e PA: tô rica.',
        },

        {
            id: 3,
            nome:'@mzltweet',
            depoimento: 'Só por ter um cartão virtual com bloqueio fácil no app, já ganha e muito na segurançã pro cliente.',
        },

        {
            id: 4,
            nome:'@marciogurka',
            depoimento: 'Valeu @banconenon! Linda embalagem e o cartão tbm é lindo! Muito amor por esse banco #bancoNeon',
        },

        {
            id: 5,
            nome:'@kleriene18',
            depoimento: 'Eu uso o Neon pra render o pouquinho que eu tenho. Como disse minha amiga Bruna, um dia eu abro o app de novo e PA: tô rica.',
        },

        {
            id: 6,
            nome:'@mzltweet',
            depoimento: 'Só por ter um cartão virtual com bloqueio fácil no app, já ganha e muito na segurançã pro cliente.',
        },
    ]
    return (
        <SectionDepo>
            <Container>
                <Title2 marginBottom={4}>
                <span>Prático, fácil, moderno</span>
                Você resolve tudo sem estresse 
                😊
                </Title2>
                <SwiperContent>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={32}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="swiperDepo"
                >
                    {depos.map((item) => 
                    <SwiperSlide key={item.id}>
                        <CardDepoimento
                            nome={item.nome}
                            depoimento={item.depoimento}
                        />
                    </SwiperSlide>)}
                </Swiper>
                </SwiperContent>
            </Container>
        </SectionDepo>
    );
}
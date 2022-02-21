import styled from "styled-components";

export const SectionDepo = styled.section`
    padding: 13.4rem 0;
`;

export const SwiperContent = styled.div`
    width: 100%;
    position: relative;
    .swiper {
        position: initial;
    }
    .swiper-slide {
        width: 100%;
        max-width: 38.4rem;
    }
    .swiper-pagination {
        top: -6.2rem;
        bottom: initial;
        left: initial;
        right: 0;
        width: fit-content;
        .swiper-pagination-bullet {
            width: 0.8rem;
            height: 0.7rem;
            left: 1530.54px;
            background: ${({theme}) => theme.colors.yellow};
            opacity: 0.3;
            border-radius: 12px;
        }

        .swiper-pagination-bullet-active {
            width: 1.7rem;
            height: 0.7rem;
            background: ${({theme}) => theme.colors.yellow};
            border-radius: 12px;
            opacity: 1;
        }
    }
`;
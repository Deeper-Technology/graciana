import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import { useState } from "react";

export default function Sessions() {
    const [slidesIndex, setSlidesIndex] = useState(0);

    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize)

    return (
        <section className="pb-30 bg-white justify-center items-center flex gap-16">
            <Swiper initialSlide={0} modules={[Pagination, Autoplay]} breakpoints={{
                500: {
                    slidesPerView: 1,
                },
                680: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            }} style={{ paddingBottom: '50px', justifyContent: 'center', alignItems: 'center', paddingInline: '20px' }} className="max-[680px]:w-full" onActiveIndexChange={(props) => { setSlidesIndex(props.realIndex) }} loop pagination spaceBetween={50}>
                <SwiperSlide style={{ opacity: (slidesIndex === 0 || slidesIndex === 2) && width >= 680 ? '50%' : '100%' }} className={`bg-white rounded-3xl drop-shadow-xl h-125 self-center p-8 flex `}>
                    <h2 className="font-[Roboto] font-semibold max-w-fit pb-4 text-[#6380E0] select-none">Sessões 3 a 6 - Exploração vocacional e<br/>tomada de consciência</h2>
                    <p className="font-[Inter] font-light text-justify text-sm text-[#333333] select-none">
                        Com o auxílio de testes psicológicos e técnicas, começamos a explorar áreas de interesse, refletir sobre seu momento de vida e investigar possibilidades profissionais alinhadas ao perfil.
                    </p>
                </SwiperSlide>
                <SwiperSlide style={{ opacity: (slidesIndex === 1 || slidesIndex === 3) && width >= 680 ? '50%' : '100%' }} className={`bg-white rounded-3xl drop-shadow-xl flex p-8 self-center `}>
                    <h2 className="font-[Roboto] font-semibold max-w-fit pb-4 text-[#6380E0] select-none">Sessões 1 e 2 - <br/>Abertura e conexão</h2>
                    <p className="font-[Inter] font-light text-justify text-sm text-[#333333] select-none">
                        Nesta etapa inicial, o adolescente é convidado a olhar para dentro: revisitar sua história, identificar valores, referências e sonhos. Por meio da escuta clínica e de atividades direcionadas, iniciamos a construção do vínculo e o desenvolvimento da reflexão pessoal. Os pais também participam de uma conversa introdutória, trazendo uma visão complementar e ampliando a compreensão do contexto emocional e familiar.
                    </p>
                </SwiperSlide>
                <SwiperSlide style={{ opacity: (slidesIndex === 0 || slidesIndex === 2) && width >= 680 ? '50%' : '100%' }} className={`bg-white rounded-3xl drop-shadow-xl p-8 self-center `}>
                    <h2 className="font-[Roboto] font-semibold max-w-fit pb-4 text-[#6380E0] select-none">Sessões 7 e 8 -<br/>Perfil profissional, potencialidades cognitivas e alinhamento</h2>
                    <p className="font-[Inter] font-light text-justify text-sm text-[#333333] select-none">
                        Neste momento, aprofundamos a análise da personalidade, do estilo de raciocínio e das formas de agir no mundo, utilizando novos instrumentos psicológicos.Essa etapa oferece clareza sobre atividades mais compatíveis com suas características, além de contribuir para um plano de ação realista e motivador sobre a escolha profissional.
                    </p>
                </SwiperSlide>
                <SwiperSlide style={{ opacity: (slidesIndex === 1 || slidesIndex === 3) && width >= 680 ? '50%' : '100%' }} className={`bg-white rounded-3xl drop-shadow-xl p-8 self-center `}>
                    <h2 className="font-[Roboto] font-semibold max-w-fit pb-4 text-[#6380E0] select-none">Sessão 9 -<br/>Devolutiva para os pais</h2>
                    <p className="font-[Inter] font-light text-justify text-sm text-[#333333] select-none">
                        Finalizamos com um momento voltado à família: compartilhamos os avanços, as descobertas e oferecemos orientações práticas para continuar apoiando o adolescente em seus próximos passos.
                    </p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
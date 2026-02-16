import Video1 from "/video/depoimento_1.mp4";
import Video2 from "/video/depoimento_2.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";

function FeedbackVideo({
    video,
    name,
    subtitle
}: {
    video: string,
    name: string,
    subtitle?: string
}) {
    return (
        <span className="flex flex-col gap-4 justify-center items-start place-self-center lg:gap-5">
            <video src={video} width="600" height="300" className="rounded-2xl" controls />
            <div className="relative inline-block">
                {/* Balão */}
                <div className="bg-white justify-center w-fit pr-12 items-start text-start rounded-[20px] px-8 py-5 shadow-lg shadow-[rgba(0,0,0,0.125)]">
                  <h2 className="max-md:text-sm font-semibold text-slate-900">
                    {name}
                  </h2>
                  { subtitle ? <p className="text-slate-500 mt-1 text-sm  ">
                    {subtitle}
                  </p> : null}
                </div>
            </div>
        </span>
    );
}

function FeedbackText({
    name,
    text,
    nameTitle,
    opacity
}: {
    name: string,
    text: string,
    nameTitle?: string,
    opacity?: string,
}) {
    return (
        <div style={{ opacity: opacity ?? '100%' }} className="flex w-full">
            {/* Balão */}
            <div className="bg-white justify-center pr-12 items-start text-start rounded-[20px] px-8 py-5 shadow-lg shadow-[rgba(0,0,0,0.125)]">
              <p className="font-[Inter] font-light text-justify text-sm text-[#656565] select-none mb-5">
                {text}
              </p>
              <h2 className="font-semibold text-slate-900">
                {name}
              </h2>
              { nameTitle ? <p className="text-sm text-slate-500">
                {nameTitle}
              </p> : null }
            </div>
        </div>
    );
}

export default function Feedbacks() {

    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    const [slidesTextIndex, setSlidesTextIndex] = useState(0);
    
    useEffect(() => {
        console.log(slidesTextIndex)
    }, [slidesTextIndex])

    window.addEventListener('resize', handleResize);

    return (
        <section className="pb-30 pt-10 justify-center text-center items-center flex-col gap-24">
            <h2 className="font-[Inter] font-bold text-xl text-center md:text-2xl text-[#504E4F]">Depoimentos</h2>
            <span className="lg:w-[75%] place-self-center px-8 py-5 pt-6 justify-center items-center self-center flex flex-col">
                <p className="font-[Roboto] font-light text-justify text-sm text-[#656565]">
                    Conheça os depoimentos de jovens que passaram por aqui e transformaram sua forma de ver o futuro. Você vai ler histórias de adolescentes e jovens adultos que chegaram inseguros, confusos ou sobrecarregados, e que, com acolhimento, escuta e orientação, conseguiram enxergar novos caminhos, com mais confiança e sentido.
                </p>
            </span>
            { width < 780 ? 
            <Swiper centeredSlides modules={[Pagination]} slidesPerView={1} 
                style={{ paddingBottom: '50px', paddingTop: '25px', justifyContent: 'center', alignItems: 'center', paddingInline: '20px' }} 
                className="w-full" loop pagination spaceBetween={50}>
                <SwiperSlide>
                    <FeedbackVideo video={Video1} name="Manoela Zanini" />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackVideo video={Video2} name="Bárbara Muller Rocha"/>
                </SwiperSlide>
            </Swiper> : <div className="flex md:flex-row flex-col justify-center gap-8 p-10">
                <FeedbackVideo video={Video1} name="Manoela Zanini" />
                <FeedbackVideo video={Video2} name="Bárbara Muller Rocha" />
            </div> }
            <Swiper modules={[Pagination]} style={{ paddingBlock: '50px', paddingInline: '20px' }} onActiveIndexChange={(state) => setSlidesTextIndex(state.realIndex)} pagination loop breakpoints={{
                240: {
                    slidesPerView: 1,
                },
                720: {
                    slidesPerView: 2
                },
                900: {
                    slidesPerView: 3
                }
            }} slidesPerView={3} spaceBetween={50}>
                <SwiperSlide>
                    <FeedbackText opacity={(slidesTextIndex === 0 || slidesTextIndex === 4) && width > 900 ? '50%' : '100%'} name="Ingrid Schneider" text="Conhecemos a Graciana através de recomendações de mães do colégio q meu filho estudava , e os elogios ao seu trabalho se confirmaram. É uma profissional muito competente e afetuosa , atendendo nosso filho com muita dedicação frente às incertezas dele quanto ao futuro profissional.  O resultado do trabalho foi dentro de uma área de atuação ligada ao meio ambiente,  e hoje ele está cursando Engenharia Ambiental na UFRGS. Além disso criamos um vínculo de muito carinho e admiração." />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackText opacity={(slidesTextIndex === 1 || slidesTextIndex === 5) && width > 900 ? '50%' : '100%'} name="Bárbara Muller Rocha" nameTitle="Estudante de Medicina" text="Fiz a orientação vocacional com a Graciana em 2023, no 3º ano do ensino médio, numa fase cheia de incertezas e questionamentos. Além das dúvidas sobre qual curso seguir, eu também tava lidando com questões pessoais que me deixavam ainda mais perdida. A Graciana, com toda sua sensibilidade e calma, conduziu as sessões com muita escuta e aconselhamentos, me deixando à vontade pra falar de tudo.  Os testes que fizemos, junto com as conversas, foram fundamentais para mostrar o meu caminho.  Mesmo com os medos e inseguranças, fui entendendo que Medicina era o que fazia sentido pra mim. No fim, ela não só me ajudou a fazer essa escolha com mais confiança, como também virou minha psicologa." />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackText opacity={(slidesTextIndex === 0 || slidesTextIndex === 2) && width > 900 ? '50%' : '100%'} name="Isabel Müssnich" text="Eu estava no segundo ano do Ensino Médio e ainda não tinha nenhum norte sobre o que pretendia cursar. Por isso, fui atrás de alguém que pudesse me ajudar e, através de uma recomendação encontrei a Graciana. Todas as consultas com ela foram muito leves e me ajudaram a entender muito mais sobre mim e sobre os meus interesses. Terminei as sessões muito feliz e com uma faculdade já escolhida. Todos os métodos utilizados foram muito legais e ajudaram a construir esse 'quebra-cabeça' de uma forma super interativa. Tenho muito carinho por essa profissional incrível e sou muito feliz com o resultado que atingi através da ajuda dela!" />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackText opacity={(slidesTextIndex === 1 || slidesTextIndex === 3 ) && width > 900 ? '50%' : '100%'} name="Stela Schmitz do Nascimento" nameTitle="Estudante de Direito" text="Conhecemos a Graciana através de recomendações de mães do colégio q meu filho estudava , e os elogios ao seu trabalho se confirmaram. É uma profissional muito competente e afetuosa , atendendo nosso filho com muita dedicação frente às incertezas dele quanto ao futuro profissional.  O resultado do trabalho foi dentro de uma área de atuação ligada ao meio ambiente,  e hoje ele está cursando Engenharia Ambiental na UFRGS. Além disso criamos um vínculo de muito carinho e admiração." />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackText opacity={(slidesTextIndex === 2 || slidesTextIndex === 4) && width > 900 ? '50%' : '100%'} name="Camila Kondageski Medeiros" text="Conheci a Graciana em 2023, quando fiz uma orientação vocacional com ela, que me ajudou muito a escolher o curso que faço hoje, deixando claro minhas maiores afinidades através de diversos tipos de testes. Porém, me senti tão acolhida nos encontros, que até hoje faço psicoterapia com ela, me apaixonando pelo seu trabalho." />
                </SwiperSlide>
                <SwiperSlide>
                    <FeedbackText opacity={(slidesTextIndex === 3 || slidesTextIndex === 5 ) && width > 900 ? '50%' : '100%'} name="Thiago Bittencourt" text="Graciana é uma profissional exemplar, me auxilou a decidir meu futuro por meio de sua didática, métodos e estudos. Sempre me senti extremamente acolhido e a vontade no ambiente das consultas. A experiência varia para cada indivíduo, porém é fundamental para qualquer um que esteja em dúvida em relação a sua vocação." />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
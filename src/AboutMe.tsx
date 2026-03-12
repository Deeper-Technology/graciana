export default function AboutMe() {
    return (
        <section className="md:p-16 py-30 bg-white flex-row-reverse justify-center items-center flex max-md:flex-col gap-20">
            <img src="/image/graciana_about_me.png" alt="Adolescente Icon" className="w-86 select-none mt-2"/>
            <span className="flex flex-col max-md:w-[85%] w-[40%] gap-8">
                <h2 className="font-[Inter] font-bold text-xl md:text-2xl max-w-fit text-[#504E4F]">Sobre Mim</h2>
                <p className="font-[Roboto] font-light text-justify text-[#656565]">
                    Psicóloga por formação, parceira de jornadas por vocação.
                    <br/><br/>Sou Graciana Stumpf Heck, psicóloga formada pela PUCRS em 2004, com formação em Psicanálise pela SIG. Ao longo dos anos, especializei-me também em Liderança Estratégica de Negócios e Pessoas pela ESPM, e fiz formação em Coaching pela SBCoaching, com foco em Desenvolvimento de Carreira e Orientação Vocacional.
                    <br/><br/>Já trabalhei com psicoterapia de diversas faixas etárias, mas foi com os jovens que encontrei meu verdadeiro propósito: estar ao lado deles enquanto constroem sua identidade, enfrentam pressões, fazem escolhas importantes e, muitas vezes, se sentem perdidos.
                    <br/><br/>Para isso, criei o programa Descomplica Futuro, uma proposta diferenciada de orientação vocacional. Acredito que todo jovem merece ser ouvido, compreendido e encorajado a construir um futuro com sentido e autenticidade. Se você (ou alguém que você ama) está vivendo esse momento de dúvidas e descobertas, saiba que não precisa caminhar sozinho.
                </p>
                <p className="font-[ShadowsIntoLight] font-extralight md:text-xl text-lg text-[#6380E0]">
                    💛 Estou aqui para ajudar. Vamos Descomplicar o Futuro juntos?
                </p>
            </span>
        </section>
    );
}
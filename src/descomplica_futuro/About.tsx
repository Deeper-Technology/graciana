export default function About() {
    return (
        <section className="md:p-16 py-30 max-md:pb-20 bg-white justify-center items-center flex max-md:flex-col gap-16">
            <img src="/assets/Teen.png" alt="Adolescente Icon" className="w-86 select-none mt-2"/>
            <span className="flex flex-col max-md:w-[85%] w-[40%] gap-6">
                <h2 className="font-[Inter] font-bold text-xl md:text-2xl max-w-fit text-[#504E4F]">Descomplica Futuro</h2>
                <p className="font-[Roboto] font-light text-justify text-sm text-[#656565]">
                    Decidir “o que você quer ser” vai muito além de escolher uma profissão. É sobre se conhecer, se fortalecer e fazer escolhas com sentido. Foi por isso que criei o Descomplica Futuro — um programa feito especialmente para adolescentes e jovens adultos que se sentem confusos, pressionados ou perdidos diante da escolha profissional.
                    <br/><br/>  O Descomplica Futuro é um processo de autoconhecimento e evolução pessoal. Aqui, transformamos dúvidas em direção, angústias em clareza e escolhas em decisões conscientes.
                </p>
                <p className="font-[ShadowsIntoLight] font-extralight text-lg md:text-xl text-[#6380E0]">
                    “Mais do que escolher uma profissão, é sobre descobrir quem você quer ser no mundo.”
                </p>
                <button className="w-max bg-[#4955D4] mt-6 rounded-xl px-10 py-[0.62rem] text-center items-center justify-center cursor-pointer hover:scale-105 duration-300 transition-transform">
                    <span className="text-white font-[Roboto] font-normal text-sm select-none">Saiba Mais</span>
                </button>
            </span>
        </section>
    );
}
import GracianaIMG from '/image/Graciana_ring.png';

export default function Banner() {
    return (
        <div className="from-[#F4C21D] to-[#D18904] bg-linear-to-b text-left flex flex-row justify-between max-md:flex-col-reverse items-end md:gap-14 md:pt-2 lg:pr-16 space-y-4">
            <img src={"/assets/Ring.png"} alt="Ring Decoration" className="self-start pt-4 md:hidden left-0 w-18 md:w-18 lg:flex hidden pointer-events-none select-none" />
            <span className="md:w-[40%] w-[95%] max-lg:px-8 self-center flex flex-col gap-10 py-20">
                <p className="font-medium font-[Roboto] w-full lg:text-4xl text-2xl text-white">Seu futuro pode ser mais leve e assertivo. Vamos descomplicar juntos?</p>
                <p className="font-light text-justify font-[Inter] max-md:text-sm text-white">Sentir confusão ou peso ao pensar no futuro é mais comum do que parece. Mas você não precisa passar por isso sozinho(a)!  Vamos juntos tornar esse caminho mais fluido, consciente e com sentido. Sou <strong className='font-semibold'>Graciana</strong>, psicóloga especializada em adolescentes e jovens adultos.</p>
                <button className="w-max bg-[#4955D4] rounded-xl px-6 py-3 cursor-pointer hover:scale-105 duration-300 transition-transform">
                    <span className="text-white font-[Roboto] font-normal text-sm select-none">Agende uma Conversa</span>
                </button>
            </span>
            <span className="md:w-[50%] lg:w-[40%] w-[90%] md:pr-4 lg:pt-16 h-full pt-22 flex lg:self-end md:self-start self-center justify-start items-start select-none">
                <img src={GracianaIMG} alt="Graciana" className="max-lg:rounded-b-[50%] object-cover" />
            </span>
        </div>
    );
}
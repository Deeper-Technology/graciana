export default function Location() {
    return (
        <section className="pb-40 py-34 bg-white justify-center text-center items-center flex flex-col">
            <h2 className="font-[Inter] font-bold text-xl md:text-2xl text-[#504E4F]">Conheça o espaço de atendimento</h2>
            <span className="lg:w-[70%] w-[85%] justify-self-center flex flex-col pt-4 max-md:pt-6">
                <p className="font-[Roboto] font-light text-justify text-sm text-[#656565]">
                    Cada detalhe deste espaço foi pensado para acolher com leveza. Aqui, a escuta acontece com calma, em um lugar que transmite segurança, conforto e presença. Um refúgio para quem busca se reconectar com suas próprias emoções e caminhar com mais clareza.
                </p>
            </span>
            <div className="md:flex hidden flex-row justify-center items-center select-none">
                <img src="/assets/locations.png" alt="Espaço de Atendimento" className="select-none w-[70%] rounded-2xl" />
            </div>
            <div className="flex md:hidden flex-row justify-center items-center select-none">
                <img src="/assets/locations_mobile.png" alt="Espaço de Atendimento" className="select-none w-full rounded-2xl" />
            </div>
        </section>
    );
}
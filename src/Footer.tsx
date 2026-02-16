export default function Footer() {
    return (
        <footer className="bg-[#3B47C0] md:p-20 max-md:pb-30 px-6 gap-10 py-22 flex md:flex-row flex-col justify-between">
            <div className="gap-4 flex-col flex md:w-[50%]"> 
                <h1 className="md:text-xl text-[#FFD743] font-bold">Graciana Stumpf Heck – Psicóloga | CRP 07/13483</h1>
                <p className="text-white max-md:text-sm">
                    “Construir o futuro é mais fácil quando há escuta, clareza e propósito ao seu lado.”
                </p>
                <p className="text-white max-md:text-sm italic">
                    Atendimentos online e presenciais
                </p>
            </div>
            <div className="gap-5 flex-col flex justify-center items-start">
                <span className="flex flex-row gap-3 justify-center items-center">
                    <img className="w-5" src={"assets/pin.png"}/>
                    <p className="text-white max-md:text-sm">
                        Av. Carlos Gomes, 1492 – Sala 212 – Porto Alegre/RS
                    </p>
                </span>
                <span className="flex flex-row gap-3 justify-center items-center">
                    <img className="w-5" src={"assets/mail.png"}/>
                    <p className="text-white max-md:text-sm">
                        gracianaheck@gmail.com
                    </p>
                </span>
                <span className="flex flex-row gap-3 justify-center items-center">
                    <img className="w-5" src={"assets/phone.png"}/>
                    <p className="text-white max-md:text-sm">
                        WhatsApp: (51) 99357-9849
                    </p>
                </span>
                <span className="flex flex-row gap-3 justify-center items-center">
                    <img className="w-5" src={"assets/instagram.png"}/>
                    <p className="text-white max-md:text-sm">
                        Instagram: psicologagracianaheck
                    </p>
                </span>
            </div>
        </footer>
    );
}
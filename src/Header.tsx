import SideBar from "./SideBar"

export default function Header() {

    const handleClickDescomplica = () => { window.scrollTo({
        top: 600,
        behavior: 'smooth'
    }) }

    const handleClickPsicoterapia = () => { window.scrollTo({
        top: 2300,
        behavior: 'smooth'
    }) }

    const handleClickDepoimentos = () => { window.scrollTo({
        top: 2950,
        behavior: 'smooth'
    }) }

    const handleClickAboutMe = () => { window.scrollTo({
        top: 4200,
        behavior: 'smooth'
    }) }

    return <>
        <header className="bg-[#3B47C0] md:flex text-white p-4 h-22 pr-10 justify-end hidden select-none items-center gap-5">
            <p className="font-[CabinCondensedBold] cursor-pointer text-[#FFC609] text-sm py-1 border-b-2">INÍCIO</p>
            <p className="font-[CabinCondensedBold] cursor-pointer text-sm py-1 " onClick={handleClickDescomplica}>DESCOMPLICA FUTURO</p>
            <p className="font-[CabinCondensedBold] cursor-pointer text-sm py-1 " onClick={handleClickPsicoterapia}>PSICOTERAPIA</p>
            <p className="font-[CabinCondensedBold] cursor-pointer text-sm py-1 " onClick={handleClickDepoimentos}>DEPOIMENTOS</p>
            <p className="font-[CabinCondensedBold] cursor-pointer text-sm py-1 " onClick={handleClickAboutMe}>SOBRE MIM</p>
        </header>
        <header className="bg-[#3B47C0] md:hidden text-white p-4 px-8 h-20 justify-end flex items-center gap-5">
            <SideBar />
        </header>
    </>;
}
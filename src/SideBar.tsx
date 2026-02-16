import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';


export default function SideBar() {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState(window.scrollY);

    window.addEventListener('scroll', () => {
        setPosition(window.scrollY);
    })

     const handleClickDescomplica = () => { window.scrollTo({
        top: 1100,
        behavior: 'smooth'
    }) }

    const handleClickPsicoterapia = () => { window.scrollTo({
        top: 3950,
        behavior: 'smooth'
    }) }

    const handleClickDepoimentos = () => { window.scrollTo({
        top: 4950,
        behavior: 'smooth'
    }) }

    const handleClickAboutMe = () => { window.scrollTo({
        top: 6250,
        behavior: 'smooth'
    }) }

    return (<>
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} className='bg-white' onHide={() => setVisible(false)}>
                <div className='flex flex-col gap-3 p-6'>
                    <p className={`font-[CabinCondensedBold] cursor-pointer ${position < 1000 ? 'border-b-2 text-[#FFC609]': ''} w-fit text-sm py-1 `}>INÍCIO</p>
                    <p className={`font-[CabinCondensedBold] cursor-pointer ${position && position > 1000 && position < 3800 ? 'border-b-2 text-[#FFC609]': ''} w-fit text-sm py-1 `} onClick={handleClickDescomplica}>DESCOMPLICA FUTURO</p>
                    <p className={`font-[CabinCondensedBold] cursor-pointer ${position && position > 3800 && position < 4850 ? 'border-b-2 text-[#FFC609]': ''} w-fit text-sm py-1 `} onClick={handleClickPsicoterapia}>PSICOTERAPIA</p>
                    <p className={`font-[CabinCondensedBold] cursor-pointer ${position && position > 4850 && position < 6150 ? 'border-b-2 text-[#FFC609]': ''} w-fit text-sm py-1 `} onClick={handleClickDepoimentos}>DEPOIMENTOS</p>
                    <p className={`font-[CabinCondensedBold] cursor-pointer ${position && position > 6150 ? 'border-b-2 text-[#FFC609]': ''} w-fit text-sm py-1 `} onClick={handleClickAboutMe}>SOBRE MIM</p>
                </div>
            </Sidebar>
        </div>
        <button onClick={() => setVisible(true)} className="cursor-pointer select-none">
            <img src={"/assets/burger.png"} className="w-5 h-4 select-none" />
        </button>
    </>); 
}
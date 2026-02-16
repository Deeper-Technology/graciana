export default function WhatsappButton() {
    return (
        <button onClick={() => window.open('https://api.whatsapp.com/send/?phone=5551993579849&text=Vim+do+site+e+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+o+programa&type=phone_number&app_absent=0')} className="fixed bottom-10 select-none right-10 hover:scale-110 hover:cursor-pointer bg-white shadow-lg shadow-[rgba(0,0,0,0.2)] rounded-full duration-300 transition-transform z-50">
            <img src="/image/Whatsapp.png" alt="WhatsApp" className="w-16 "/>
        </button>
    );
}

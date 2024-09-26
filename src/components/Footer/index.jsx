import logo from '../../assets/logo.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
    return (
        <footer id='contato' className="h-[420px] bg-slate-600 flex items-center flex-col">
            <div className='flex items-center justify-center w-full'>
                <div className='h-[1px] bg-sky-400 w-[10%]' />
                <img src={logo} className='w-52 md:w-60' alt="" />
                <h2 className='text-2xl md:text-4xl -translate-x-10'>DENTYTECH</h2>
                <div className='h-[1px] bg-sky-400 w-[10%]' />
            </div>
            
            <div className='-translate-y-10 flex space-x-8 mb-4 w-full justify-center'>
                <a href="#" className='text-xl md:text-2xl text-zinc-100 cursor-pointer hover:scale-125 transition duration-300 ease-in-out shadow-shape p-2 md:p-4 rounded-2xl' >
                    <FaInstagram />
                </a>
                <a href="#" className='text-xl md:text-2xl text-zinc-100 cursor-pointer hover:scale-125 transition duration-300 ease-in-out shadow-shape p-2 md:p-4 rounded-2xl' >
                    <FaFacebook />
                </a>
                <a href="#" className='text-xl md:text-2xl text-zinc-100 cursor-pointer hover:scale-125 transition duration-300 ease-in-out shadow-shape p-2 md:p-4 rounded-2xl'>
                    <FaWhatsapp />
                </a>
            </div>
            <div className='w-full space-y-2 flex flex-col items-center'>
                <ul className={`gap-5 text-base md:gap-16 md:text-lg flex mr-4`}>
                    <li className='hover:text-sky-400 transition duration-300 ease-in-out'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='hover:text-sky-400 transition duration-300 ease-in-out'>
                        <a href="#servico">Serviços</a>
                    </li>
                    <li className='hover:text-sky-400 transition duration-300 ease-in-out'>
                        <a href="#sobre">Sobre mim</a>
                    </li>
                    <li className='hover:text-sky-400 transition duration-300 ease-in-out'>
                        <a href="#clinica">Nossa clínica</a>
                    </li>
                </ul>
                <div className='h-[1px] w-[80%] md:w-[600px] bg-sky-400'/>
            </div>
        </footer>
    )
}
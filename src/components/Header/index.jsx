import { useState } from 'react'
import logo from '../../assets/logo.png'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    function handleOpenMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <header className={`flex justify-between max-w-screen-xl m-auto md:justify-around mb-10 md:mb-0 ${isOpen ? 'items-start' : 'items-center'}`}>
            <div className='flex items-center'>
                <img src={logo} className='w-32' alt="logo da clínica" />
                <h2 className='text-xl xl:text-3xl'>DENTYTECH</h2>
            </div>
            <nav className='relative'>
                <ul className={`text-lg md:flex mr-4 ${isOpen ? 'absolute gap-3 flex flex-col items-center bg-black px-6 py-2 w-52 translate-y-20 -translate-x-56 rounded-lg' : 'gap-16 hidden'}`}>
                    <li className='hover:text-sky-400 transition duration-300 ease-in-out'>
                        <a href="#servico" onClick={() => handleOpenMenu(false)}>Serviços</a>
                    </li>
                    <li className='hover:text-sky-400 transition duration-300 ease-in-out'>
                        <a href="#sobre" onClick={() => handleOpenMenu(false)}>Sobre mim</a>
                    </li>
                    <li className='hover:text-sky-400 transition duration-300 ease-in-out'>
                        <a href="#clinica" onClick={() => handleOpenMenu(false)}>Nossa clínica</a>
                    </li>
                    <li className='hover:text-sky-400 transition duration-300 ease-in-out'>
                        <a href="#contato" onClick={() => handleOpenMenu(false)}>Contato</a>
                    </li>
                </ul>

                <div className={`cursor-pointer block md:hidden mr-8 space-y-1 ${isOpen ? 'absolute right-0 top-[65px]' : ''}`} onClick={handleOpenMenu}>
                    <div className={`h-[3px] w-6 bg-zinc-100 ${isOpen ? 'transition-transform duration-300 rotate-45' : ''}`} />
                    <div className={`h-[3px] w-6 bg-zinc-100 ${isOpen ? 'hidden' : ''}`} />
                    <div className={`h-[3px] w-6 bg-zinc-100 ${isOpen ? 'transition-transform duration-300 -translate-y-2 -rotate-45' : ''}`} />
                </div>
            </nav>
        </header>
    )
}
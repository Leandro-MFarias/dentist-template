import { FaArrowDown } from "react-icons/fa6";


export function Hero() {
    return (
        <section id="home" className='max-w-screen-xl m-auto flex flex-col sm:justify-center h-[80%] md:h-[70vh] space-y-20 pl-8 items-center mb-64'>
            <div className="space-y-6 max-w-3xl">
                <h2 className="text-5xl sm:text-6xl font-semibold">Sinta-se em casa enquanto transformamos seu sorriso</h2>
                <p className="text-xl sm:text-2xl">Seu sorriso, nossa prioridade. Com conforto e cuidado, transformamos cada sorriso.</p>
            </div>
            <button className="bg-sky-600 px-8 sm:px-14 py-4 rounded-2xl text-lg sm:text-2xl font-semibold hover:bg-sky-500 transition duration-300 ease-in">
                <a href="#" target="_blank">Agende já sua consulta!</a>
            </button>

            <a href="#servico">
                <FaArrowDown className="absolute bottom-14 left-[50%] sm:bottom-8 text-4xl animate-downarrow" />
            </a>
        </section>
    )
}
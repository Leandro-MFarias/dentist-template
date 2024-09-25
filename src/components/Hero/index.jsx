import { FaArrowDown } from "react-icons/fa6";


export function Hero() {
    return (
        <section className='max-w-screen-xl m-auto flex flex-col justify-center items-start h-[70vh] space-y-20 pl-8 md:items-center mb-64'>
            <div className="space-y-6 max-w-3xl">
                <h2 className="text-6xl font-semibold">Sinta-se em casa enquanto transformamos seu sorriso</h2>
                <p className="text-2xl">Seu sorriso, nossa prioridade. Com conforto e cuidado, transformamos cada sorriso.</p>
            </div>
            <button className="bg-sky-600 px-14 py-4 rounded-2xl text-2xl font-semibold hover:bg-sky-500 transition duration-300 ease-in">
                <a href="#" target="_blank">Agende já sua consulta!</a>
            </button>

            <FaArrowDown className="absolute self-center bottom-8 text-4xl animate-downarrow"/>
        </section>
    )
}
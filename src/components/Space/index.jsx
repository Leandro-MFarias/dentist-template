import hero from '../../assets/hero-light.png'
import foto2 from '../../assets/foto-2.jpg'
import predio from '../../assets/predio.png'

export function Space() {
    return (
        <section id='clinica' className='flex flex-col max-w-[80%] md:max-w-[70%] m-auto space-y-10 bg-zinc-100 px-16 py-8 rounded-xl mb-20'>
            <div className='self-start space-y-2 '>
                <h2 className='text-5xl text-zinc-900 font-semibold'>Conheça nossa clínica</h2>
                <p className='max-w-xl  text-zinc-700'>
                    Espaço dedicado ao seu bem-estar, onde tecnologia, conforto e excelência se unem para transformar sua experiência odontológica.
                </p>
            </div>
            <div className='flex flex-wrap gap-8'>
                <img src={hero} className='w-[320px] rounded-xl' alt="" />
                <img src={foto2} className='w-[320px] rounded-xl' alt="" />
                <img src={predio} className='w-[320px] rounded-xl' alt="" />
            </div>
        </section>
    )
}
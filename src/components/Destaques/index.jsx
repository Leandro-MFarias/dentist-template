import dentalCrown from '../../assets/dental-crown.png'
import chair from '../../assets/dentist-chair.png'
import dentistTooth from '../../assets/dentist-tooth.png'
import dentist from '../../assets/dentist.png'
import teeth from '../../assets/teeth.png'
import clean from '../../assets/clean.png'
import tooth from '../../assets/tooth.png'
import lente from '../../assets/lente.png'
import periodo from '../../assets/periodontia.png'
import smile from '../../assets/smile.png'

export function Destaques() {
    return (
        <section id='servico' className='flex flex-col max-w-[80%] md:max-w-[70%] m-auto bg-zinc-100 p-16 space-y-20 rounded-2xl mb-40'>
            <div className='space-y-4 max-w-4xl'>
                <h3 className='text-zinc-900 text-5xl font-semibold'>Nossos principais serviços</h3>
                <p className='text-zinc-500 text-xl'>
                    Invista em um sorriso saudável e bonito. Nossa clínica oferece tratamentos inovadores e personalizados, utilizando as mais recentes tecnologias para garantir resultados duradouros e um sorriso perfeito.
                </p>
            </div>
            <div className='flex flex-wrap gap-16 justify-center'>
                <div className='w-44 text-zinc-950 flex flex-col items-center space-y-4'>
                    <img src={dentalCrown} className='w-36' alt="" />
                    <p className='w-full text-xl text-center font-medium hover:text-sky-400 transition duration-300 ease-in-out'>Prótese</p>
                </div>

                <div className='w-36 text-zinc-950 flex flex-col items-start space-y-4'>
                    <img src={chair} className='w-36' alt="" />
                    <p className='w-full text-xl text-center font-medium hover:text-sky-400 transition decoration-neutral-300 ease-in-out'>Ortodontia</p>
                </div>

                <div className='w-36 text-zinc-950 flex flex-col items-start space-y-4'>
                    <img src={dentistTooth} className='w-36' alt="" />
                    <p className='w-full text-xl text-center font-medium hover:text-sky-400 transition decoration-neutral-300 ease-in-out'>Implantes dentáros</p>
                </div>

                <div className='w-36 text-zinc-950 flex flex-col items-start space-y-4'>
                    <img src={dentist} className='w-36' alt="" />
                    <p className='w-full text-xl text-center font-medium hover:text-sky-400 transition decoration-neutral-300 ease-in-out'>Cirurgia oral</p>
                </div>

                <div className='w-36 text-zinc-950 flex flex-col items-start space-y-4'>
                    <img src={teeth} className='w-36' alt="" />
                    <p className='w-full text-xl text-center font-medium hover:text-sky-400 transition decoration-neutral-300 ease-in-out'>Endodontia</p>
                </div>

                <div className='w-36 text-zinc-950 flex flex-col items-start space-y-4'>
                    <img src={clean} className='w-36' alt="" />
                    <p className='w-full text-xl text-center font-medium hover:text-sky-400 transition decoration-neutral-300 ease-in-out'>Clareamento dental</p>
                </div>

                <div className='w-36 text-zinc-950 flex flex-col items-start space-y-4'>
                    <img src={tooth} className='w-36' alt="" />
                    <p className='w-full text-xl text-center font-medium hover:text-sky-400 transition decoration-neutral-300 ease-in-out'>Clínica geral</p>
                </div>

                <div className='w-36 text-zinc-950 flex flex-col items-start space-y-4'>
                    <img src={lente} className='w-36' alt="" />
                    <p className='w-full text-xl text-center font-medium hover:text-sky-400 transition decoration-neutral-300 ease-in-out'>Lentes de contato</p>
                </div>

                <div className='w-36 text-zinc-950 flex flex-col items-start space-y-4'>
                    <img src={periodo} className='w-36' alt="" />
                    <p className='w-full text-xl text-center font-medium hover:text-sky-400 transition decoration-neutral-300 ease-in-out'>Periodontia</p>
                </div>

                <div className='w-36 text-zinc-950 flex flex-col items-start space-y-4'>
                    <img src={smile} className='w-36' alt="" />
                    <p className='w-full text-xl text-center font-medium hover:text-sky-400 transition decoration-neutral-300 ease-in-out'>Aparelhos
                        Transparentes</p>
                </div>
            </div>
        </section>
    )
}
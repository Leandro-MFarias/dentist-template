import alice from '../../assets/alice.jpg'

export function About() {
    return (
        <section id='sobre' className='flex flex-col-reverse xl:flex-row gap-y-10 items-center justify-between max-w-screen-xl m-auto px-7 mb-28'>
            <div className='max-w-2xl space-y-8 text-center xl:text-left'>
                <div className='space-y-4'>
                    <h2 className='text-sky-700 text-4xl xl:text-5xl'>Dra. Alice Martins</h2>
                    <h3 className='text-zinc-900 text-4xl'>Excelência em Odontologia Estética e Humanizada </h3>
                </div>
                <p className='text-zinc-900 text-lg text-left'>
                    Dra. Alice é a cirurgiã dentista à frente da nossa clínica, onde atua com especialização em Invisalign, harmonização facial e estética dentária. Com um olhar atento às particularidades de cada paciente, ela alia tecnologia avançada a um atendimento personalizado, sempre buscando oferecer soluções que promovam tanto a saúde bucal quanto a autoestima. Reconhecida pela precisão técnica e pela forma acolhedora de conduzir cada consulta.
                </p>
                <button className="bg-sky-600 px-14 py-4 rounded-2xl text-2xl font-semibold hover:bg-sky-500 transition duration-300 ease-in">
                    <a href="#" target="_blank">Agende já sua consulta!</a>
                </button>
            </div>
            <img src={alice} className='w-[650px] xl:w-[450px] rounded-xl' alt="" />
        </section>
    )
}
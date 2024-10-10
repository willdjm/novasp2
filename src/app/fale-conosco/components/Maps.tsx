export function Maps() {
    return (
        <section id="maps" className="flex flex-col justify-center items-center w-full md:h-[40rem] h-[30rem]">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7310.989307419196!2d-46.637919!3d-23.62245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a56934ae02b%3A0xddedfacddf3777f8!2sR.%20Biobedas%2C%20341%20-%20Vila%20da%20Sa%C3%BAde%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004302-010!5e0!3m2!1spt-BR!2sbr!4v1728401615739!5m2!1spt-BR!2sbr"
                    className="w-full h-full" // Usando classes Tailwind para largura e altura
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}

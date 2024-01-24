export default function Hero() {
    return (
        <section id="hero" className="container mx-auto">
            <div className="text-white text-center flex flex-col items-center mt-28 pb-36 justify-center space-y-5">
                <p className="text-lg">Hey, I&apos;m Andrés 👋</p>
                <h1 className="font-black text-7xl md:text-8xl">The Fullstack Developer</h1>
                <p>Life&apos;s too short to take it slow, so I stay building fast.</p>

                <div className="pt-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10">
                    <a className="border-2 border-white bg-white text-black py-2 w-44 hover:font-bold" href="https://form.typeform.com/to/oEwAVGcN" target="_blank">Contact me</a>
                    <a className="border-2 border-white py-2 w-44 hover:font-bold" href="#projects">Browse projects</a>
                </div>
            </div>
        </section>
    );
}
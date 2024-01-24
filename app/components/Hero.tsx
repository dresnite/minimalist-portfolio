export default function Hero() {
    return (
        <section id="hero" className="container mx-auto">
            <div className="text-center flex flex-col items-center justify-center mt-40 space-y-5">
                <p className="text-lg">Hey, I'm Andrés 👋</p>
                <h1 className="font-black text-6xl">Fullstack Developer</h1>
                <p>Life&apos;s too short to take it slow, so I stay building fast.</p>

                <div className="pt-2 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10">
                    <button className="border-2 border-black bg-black text-white py-2 w-44 hover:font-bold">Contact me</button>
                    <button className="border-2 border-black py-2 w-44 hover:font-bold">Browse projects</button>
                </div>
            </div>
        </section>
    );
}
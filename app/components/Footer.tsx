import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-black mt-20 px-10 text-white">
            <div className="py-10 px-10 flex flex-col md:flex-row items-center space-y-10 text-center md:text-left md:items-start md:justify-between md:space-y-0">
                <Logo />

                <div className="flex flex-col space-y-3">
                    <p className="font-bold">Web</p>
                    <a href="#navbar">Back to the top</a>
                    <a href="#about-me">About me</a>
                    <a href="#projects">Projects</a>
                </div>

                <div className="flex flex-col space-y-3">
                    <p className="font-bold">Social</p>
                    <a href="https://x.com/dresnite" target="_blank">Twitter</a>
                    <a href="https://linkedin.com/in/andresbytes" target="_blank">LinkedIn</a>
                    <a href="https://github.com/dresnite" target="_blank">GitHub</a>
                </div>

                <div className="flex flex-col space-y-3">
                    <p className="font-bold">Other</p>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vRO33nRfFWMJ0IHbzIBA7DeYKnNbplmEZhZiuKFpoWbyy8vV5mj5eIfg0ot59tDOcJUDwsZyyq4rl7K/pub" target="_blank">What&apos;s next?</a>
                </div>


            </div>

            <div className="text-center py-3">Made with ❤️ by Dresnite</div>
        </footer>
    );
}
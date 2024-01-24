import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-black mt-48 text-white">
            <div className="py-10 px-10 flex flex-col md:flex-row items-center space-y-10 text-center md:text-left md:items-start md:justify-between md:space-y-0">
                <Logo />

                <div className="flex flex-col space-y-3">
                    <p className="font-bold">Web</p>
                    <a href="">About me</a>
                    <a href="">Projects</a>
                    <a href="">Blog</a>
                </div>

                <div className="flex flex-col space-y-3">
                    <p className="font-bold">Social</p>
                    <a href="">Instagram</a>
                    <a href="">LinkedIn</a>
                    <a href="">GitHub</a>
                </div>

                <div className="flex flex-col space-y-3">
                    <p className="font-bold">Other</p>
                    <a href="">What's next?</a>
                    <a href="">My agenda</a>
                </div>


            </div>

            <div className="text-center py-3">Made with ❤️ by Dresnite</div>
        </footer>
    );
}
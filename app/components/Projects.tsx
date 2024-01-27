export default function Projects() {
  return (
    <section id="projects" className="container mx-auto mt-20 md:mt-28">
      <div className="flex flex-row justify-center md:justify-between items-center mb-12">
        <h2 className="text-3xl text-center uppercase md:text-left">
          Projects
        </h2>

        <a className="hidden md:block border-2 border-black py-2 w-44 hover:font-bold text-center" href="https://github.com/dresnite" target="_blank">
          See All
        </a>
      </div>

      <div className="flex flex-col lg:items-start">
        <div className="w-full flex flex-col items-center lg:items-start lg:flex-row space-y-36 lg:space-y-0 lg:justify-between">
        <a href="https://github.com/dresnite/minimalist-portfolio" target="_blank">
            <div className="group bg-gray-600 w-80 h-80 lg:w-96 lg:h-80 relative">
              <img
                src="/portfolio2.png"
                alt=""
                className="w-full h-full group-hover:cursor-pointer group-hover:border-black group-hover:border-4"
              />
              <div className="item-gradient"></div>

              <p className="font-bold uppercase absolute left-2 bottom-2 text-2xl text-white">
                Minimalist Portfolio
              </p>

              <p className="text-gray-800 my-1">
                ✅ Built with Next, TypeScript and Tailwind
              </p>
              <p className="text-gray-800 my-1">✅ Open source</p>
              <p className="text-gray-800">✅ Fully responsive</p>
            </div>
          </a>

          <a href="https://toagym.es" target="_blank" >
            <div className="group bg-gray-600 w-80 h-80 lg:w-96 lg:h-80 relative">
              <img
                src="/boxing-website.png"
                alt=""
                className="w-full h-full group-hover:cursor-pointer group-hover:border-black group-hover:border-4"
              />
              <div className="item-gradient"></div>
              <p className="font-bold uppercase absolute left-2 bottom-2 text-2xl text-white">
                Boxing Website
              </p>

              <p className="text-gray-800 my-1">
                ✅ Built with Next, TypeScript and Tailwind
              </p>
              <p className="text-gray-800 my-1">✅ Open source</p>
              <p className="text-gray-800">✅ Fully responsive</p>
            </div>
          </a>

          <a href="https://github.com/dresnite/skyblock" target="_blank">
            <div className="group bg-gray-600 w-80 h-80 lg:w-96 lg:h-80 relative">
              <img
                src="/skyblock.jpeg"
                alt=""
                className="w-full h-full group-hover:cursor-pointer group-hover:border-black group-hover:border-4"
              />
              <div className="item-gradient"></div>
              <p className="font-bold uppercase absolute left-2 bottom-2 text-2xl text-white">
                Skyblock Plugin
              </p>

              <p className="text-gray-800 my-1">
                ✅ Built with PHP over PocketMine-MP
              </p>
              <p className="text-gray-800 my-1">✅ Open source</p>
              <p className="text-gray-800">✅ +100k downloads</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

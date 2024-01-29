import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto mt-20 md:mt-28">
      <div className="flex flex-row justify-center md:justify-between items-center mb-12">
        <h2 className="text-3xl text-center uppercase md:text-left">
          Projects
        </h2>

        <a
          className="hidden md:block border-2 border-black py-2 w-44 hover:font-bold text-center"
          href="https://github.com/dresnite"
          target="_blank"
        >
          See All
        </a>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:space-x-6 gap-y-16 lg:gap-y-0 mb-16">
        <div className="text-center">
          <a href="https://paycraft.gg" className="group" target="_blank">
            <img src="/paycraft.png" className="w-100 max-w-1/2 group-hover:scale-110 duration-200" alt="Paycraft website screenshot" />
          </a>
          <p className="font-bold">Game monetization platform. (Current Project)</p>
          <p>Built with Next.js, Node.js, Tailwind, TypeScript, MongoDB, PHP and Java.</p>
          <p></p>
        </div>

        <div className="text-center">
          <a href="https://pigify.io" className="group" target="_blank">
            <img src="/pigify.png" className="w-100 max-w-1/2 group-hover:scale-110 duration-200" alt="Paycraft website screenshot" />
          </a>
          <p className="font-bold">Decentralized saving platform.</p>
          <p>Built with pure React, Bootstrap, Solidity and Web3.js.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:space-x-6 gap-y-16 lg:gap-y-0 mb-16">
        <div className="text-center">
          <a href="https://toagym.es" className="group" target="_blank">
            <img src="/toagym.png" className="w-100 max-w-1/2 group-hover:scale-110 duration-200" alt="Toagym website screenshot" />
          </a>
          <p className="font-bold">Website for a Spanish Martial Arts Gym.</p>
          <p>Built with Next.js, TypeScript and Tailwind.</p>
          <p></p>
        </div>

        <div className="text-center">
          <a href="https://github.com/dresnite/skyblock" className="group" target="_blank">
            <img src="/skyblock.png" className="w-100 max-w-1/2 group-hover:scale-110 duration-200" alt="Toagym website screenshot" />
          </a>
          <p className="font-bold">Minecraft SkyBlock Plugin.</p>
          <p>Open source, +100k downloads and 12 contributors.</p>
          <p>Built with PHP over the PocketMine-MP API.</p>
        </div>
      </div>
    </section>
  );
}

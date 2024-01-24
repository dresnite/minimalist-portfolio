export default function AboutMe() {
  return (
    <section id="about-me" className="my-20 container mx-auto">
      <div className="relative flex flex-col items-center md:items-start">
        <h2 className="w-100 mt-10 mb-12 text-3xl text-center uppercase md:mt-0 md:text-left">
          About me
        </h2>

        <img src="/me.jpeg" alt="" className="max-w-[35rem] rounded-sm" />

        <div className="px-10 max-w-3/4 md:max-w-100 md:ml-28  md:top-48 md:left-80 bg-white md:absolute">
          <div className="mt-16 mb-12 max-w-[45rem] mx-auto flex flex-col gap-3">
            <p>
              I&apos;m Andrés. A 22-year old software developer, maker and problem
              solver.
            </p>

            <p>
              Technology has always fascinated me, and I&apos;ve never been afraid to
              jump in and give it a go. In fact, I wrote my first line of code
              in the web browser of a Nintendo DSi, back when I was 11 years
              old.
            </p>

            <p>
              This adventurous, self-taught spirit has shaped most of the
              decisions of my life.
            </p>

            <p>
              Nowadays, I use the energy that led me to open that DSi browser to
              build cool stuff, and most importantly: build it fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

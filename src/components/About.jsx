function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'rgb(13, 13, 13)' }}>
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-12">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="text-white">About</span>
            <span className="text-red-500"> Me</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-red-500" />
        </div>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
          <div className="w-full flex-1 lg:flex-none lg:w-[380px]">
            <div className="relative mx-auto h-[320px] w-full overflow-hidden rounded-[32px] border border-red-500/10 bg-[rgb(26,26,26)] shadow-[0_0_25px_rgba(239,68,68,0.15)] sm:h-[380px] lg:h-[420px]">
              <div className="absolute -left-16 top-6 h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />
              <div className="absolute -right-14 bottom-6 h-48 w-48 rounded-full bg-red-500/10 blur-3xl" />

              <img src="/Dinesh_Photo.png" alt="Profile" className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="w-full flex-1 lg:max-w-[520px]">
            <div className="rounded-[32px] border border-red-500/10 bg-[rgb(26,26,26)] p-6 text-left sm:p-8">
              <h3 className="text-2xl font-black text-white sm:text-4xl">Professional summary</h3>
              <p className="mt-6 text-sm leading-7 text-gray-300 sm:text-base">
                Java Full Stack developer building clean React and Spring Boot applications with intuitive UI and reliable backend performance.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[24px] border border-red-500/10 bg-[rgb(26,26,26)] p-6 text-center sm:p-8">
                <p className="text-3xl font-black text-white sm:text-4xl">150+</p>
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-400">DSA Problems Solved</p>
              </div>
              <div className="rounded-[24px] border border-red-500/10 bg-[rgb(26,26,26)] p-6 text-center sm:p-8">
                <p className="text-3xl font-black text-white sm:text-4xl">3+</p>
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-400">Major Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

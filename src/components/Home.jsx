import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent pt-[120px] pb-16 sm:pt-[140px] sm:pb-24 lg:pt-[150px]">
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-base text-gray-300 sm:text-lg">Hello, I'm</p>
            <h1 className="mt-6 text-[42px] font-black leading-[0.9] tracking-[-0.05em] sm:text-[56px] md:text-[72px] lg:text-[80px]">
              <span className="tracking-[0.01em] text-white">Voona</span>
              <span className="tracking-[0.01em] text-red-500"> Dinesh</span>
            </h1>
            <p className="mt-6 text-2xl font-semibold text-red-500 sm:text-3xl">Java Full Stack Developer</p>
            <p className="mt-6 max-w-2xl text-sm text-gray-300 sm:text-base lg:text-lg">
              Building scalable, secure, and high-performance web applications with modern UI, polished interactions, and clean architecture.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[rgb(250,66,62)] px-8 py-4 text-base font-semibold text-white transition hover:bg-[rgb(192,52,48)] sm:w-auto"
              >
                Hire Me
              </a>
              <a
                href="https://drive.google.com/file/d/16iEMijpF8Ud4tndwqPM-guXJiEvoVc2T/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-red-500 bg-[rgb(13,13,13)] px-8 py-4 text-base font-semibold text-white transition hover:bg-[rgb(250,66,62)] sm:w-auto"
              >
                <span>View Resume</span>
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-4 text-white lg:justify-start">
              <a href="https://github.com/DINESH-VOONA" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-[rgb(250,66,62)] hover:bg-[rgb(250,66,62)] sm:h-12 sm:w-12 sm:text-2xl">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/dinesh-voona-582a8b1a5" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-[rgb(250,66,62)] hover:bg-[rgb(250,66,62)] sm:h-12 sm:w-12 sm:text-2xl">
                <FaLinkedinIn />
              </a>
              <a href="mailto:voonadinesh3@gmail.com" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-[rgb(250,66,62)] hover:bg-[rgb(250,66,62)] sm:h-12 sm:w-12 sm:text-2xl">
                <HiOutlineMail />
              </a>
            </div>
          </div>

          <div className="flex-1 lg:flex-none lg:w-[550px]">
            <div className="relative mx-auto h-[280px] w-full max-w-[550px] overflow-hidden rounded-[15px] border border-red-500/10 bg-[rgb(26,26,26)] shadow-[0_0_30px_rgba(239,68,68,0.2)] sm:h-[320px] md:h-[350px] lg:h-[420px]">
              <div className="absolute -left-20 top-8 h-48 w-48 rounded-full bg-red-500/20 blur-3xl" />
              <div className="absolute -right-16 bottom-6 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

              <img src={`${import.meta.env.BASE_URL}computer.png`} alt="Hero" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

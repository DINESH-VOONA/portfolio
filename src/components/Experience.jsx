import { FaBriefcase } from 'react-icons/fa';

function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'rgb(13, 13, 13)' }}>
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="inline-flex items-center justify-center text-4xl font-bold sm:text-5xl">
            <span className="text-white">Work</span>
            <span className="ml-2 text-[rgb(251,44,54)]">Experience</span>
          </h2>
          <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-[rgb(251,44,54)]" />
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-[800px]">
            <div className="absolute -left-8 top-2 h-[calc(100%-1rem)] w-0.5 rounded-full bg-[rgb(251,44,54)]" />
            <div className="absolute -left-10 top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(13,13,13)] shadow-[0_0_10px_rgba(251,44,54,0.2)] sm:h-5 sm:w-5">
              <div className="h-3 w-3 rounded-full bg-[rgb(251,44,54)]" />
            </div>

            <div className="relative rounded-[24px] border border-[rgba(251,44,54,0.1)] bg-[rgb(26,26,26)] p-6 shadow-[0_20px_30px_rgba(251,44,54,0.12)] sm:p-8">
              <div className="absolute right-6 top-6">
                <span className="rounded-full border border-[rgba(251,44,54,0.2)] bg-[rgba(251,44,54,0.1)] px-3 py-1 text-sm font-medium text-[rgb(251,44,54)]">
                  Internship
                </span>
              </div>
              <div className="flex flex-col gap-4 border-b border-[rgba(251,44,54,0.1)] pb-6 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[rgba(251,44,54,0.15)] text-[rgb(251,44,54)] shadow-md sm:h-16 sm:w-16">
                  <FaBriefcase className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">Software Development Intern</h3>
                  <p className="mt-2 text-base font-semibold text-[rgb(251,44,54)] sm:text-lg">Agglotek Hyderabad</p>
                  <p className="mt-1 text-sm text-gray-400">1 April 2024 – 15 May 2024</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-gray-300 sm:text-base">
                Worked on developing and maintaining web applications using Java, Spring Boot, and React. Collaborated with senior developers to implement new features, optimize application performance, and ensure code quality through rigorous testing and code reviews.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Java', 'Spring Boot', 'React', 'MySQL'].map((tech) => (
                  <span key={tech} className="rounded-full border border-[rgba(251,44,54,0.2)] bg-[rgba(251,44,54,0.1)] px-3 py-1 text-sm text-[rgb(251,44,54)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

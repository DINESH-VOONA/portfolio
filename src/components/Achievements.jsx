import { FaCode, FaTrophy, FaBriefcase } from 'react-icons/fa';

function Achievements() {
  const achievements = [
    {
      icon: FaCode,
      title: '150+ DSA Problems',
      description:
        'Solved complex data structures and algorithms problems on competitive programming platforms.',
    },
    {
      icon: FaTrophy,
      title: '3 Major Projects',
      description:
        'Successfully developed and deployed full-stack applications using modern technologies.',
    },
    {
      icon: FaBriefcase,
      title: 'Internship Experience',
      description:
        'Gained practical industry experience in software development at Agglotek Hyderabad.',
    },
  ];

  return (
    <section id="achievements" className="relative py-20 sm:py-24" style={{ backgroundColor: 'rgb(13, 13, 13)' }}>
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="inline-flex items-center justify-center text-4xl font-bold sm:text-5xl">
            <span className="text-white">Key</span>
            <span className="ml-2 text-red-500">Achievements</span>
          </h2>
          <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-red-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="overflow-hidden rounded-[24px] border border-red-500/15 bg-[rgb(26,26,26)] p-6 text-center shadow-[0_10px_20px_rgba(239,68,68,0.16)] sm:p-8"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-red-500 text-white shadow-sm sm:h-20 sm:w-20">
                  <Icon className="text-xl text-white sm:text-2xl" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-white">{achievement.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;

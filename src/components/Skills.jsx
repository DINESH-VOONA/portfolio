import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24" style={{ backgroundColor: 'rgb(13, 13, 13)' }}>
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="inline-flex items-center justify-center text-4xl font-bold sm:text-5xl">
            <span className="text-white">My</span>
            <span className="ml-2 text-red-500">Skills</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-red-500" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[24px] border border-red-500/10 bg-[rgb(26,26,26)] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
                <FaCode className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Frontend</h3>
            </div>
            <div className="mt-6 space-y-5 text-gray-300">
              {[
                { label: 'HTML', value: 95 },
                { label: 'CSS', value: 90 },
                { label: 'JavaScript', value: 85 },
                { label: 'React.js', value: 85 },
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>{skill.label}</span>
                    <span className="font-semibold text-white">{skill.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-red-500" style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-red-500/10 bg-[rgb(26,26,26)] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
                <FaServer className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Backend</h3>
            </div>
            <div className="mt-6 space-y-5 text-gray-300">
              {[
                { label: 'Java', value: 90 },
                { label: 'Spring Boot', value: 85 },
                { label: 'Hibernate', value: 85 },
                { label: 'REST API', value: 85 },
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>{skill.label}</span>
                    <span className="font-semibold text-white">{skill.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-red-500" style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-red-500/10 bg-[rgb(26,26,26)] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
                <FaDatabase className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Database</h3>
            </div>
            <div className="mt-6 space-y-5 text-gray-300">
              {[{ label: 'MySQL', value: 85 }].map((skill) => (
                <div key={skill.label}>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>{skill.label}</span>
                    <span className="font-semibold text-white">{skill.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-red-500" style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

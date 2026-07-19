function Projects() {
  const projects = [
    {
      title: 'Eye Blink Communication System',
      description:
        'Machine Learning-based system for eye blink detection and communication, enabling hands-free interaction for individuals with mobility challenges.',
      tags: ['Machine Learning', 'Python', 'OpenCV', 'TensorFlow'],
      image: `${import.meta.env.BASE_URL}Eye_Blink.png`,
    },
    {
      title: 'Personal Digital Library Management',
      description:
        'Comprehensive library management system with book cataloging, user management, and loan tracking features for efficient library operations.',
      tags: ['Java', 'Spring Boot', 'MySQL', 'React'],
      image: `${import.meta.env.BASE_URL}Libray.png`,
    },
    {
      title: 'Bus Travels Management System',
      description:
        'Full-stack web application for bus booking, route management, and passenger tracking with secure payment integration and real-time updates.',
      tags: ['Spring Boot', 'Hibernate', 'REST API', 'MySQL'],
      image: `${import.meta.env.BASE_URL}Bus.png`,
    },
  ];

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'rgb(13, 13, 13)' }}>
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="inline-flex items-center justify-center text-4xl font-bold sm:text-5xl">
            <span className="text-white">Featured</span>
            <span className="ml-2 text-red-500">Projects</span>
          </h2>
          <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-red-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="overflow-hidden rounded-[24px] border border-red-500/10 bg-[rgb(26,26,26)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <div className="relative h-[220px] overflow-hidden bg-black sm:h-[260px]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-xs leading-5 text-gray-300 sm:text-sm">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-red-500/20 bg-red-500/10 px-2 py-1 text-xs text-red-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

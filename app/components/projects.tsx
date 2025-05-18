import { projects } from '@/app/data/projects';
import Image from 'next/image';

export function Projects() {
  return (
    <section className="py-20" id="projects">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
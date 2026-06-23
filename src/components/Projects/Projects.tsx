import React, { useState } from 'react';
import { Project } from '../../types';
import { ExternalLink, Link, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management and AI-powered recommendations.',
      image: '/src/assets/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features.',
      image: '/src/assets/projects/taskapp.jpg',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      category: 'mobile',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '3',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with data visualization and reporting capabilities.',
      image: '/src/assets/projects/dashboard.jpg',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      category: 'web',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '4',
      title: 'Social Media App',
      description: 'Full-featured social media platform with real-time messaging and content sharing.',
      image: '/src/assets/projects/social.jpg',
      technologies: ['React Native', 'GraphQL', 'AWS', 'Redis'],
      category: 'mobile',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '5',
      title: 'Learning Management System',
      description: 'Educational platform with video streaming, quizzes, and progress tracking.',
      image: '/src/assets/projects/lms.jpg',
      technologies: ['Next.js', 'Tailwind', 'Prisma', 'MySQL'],
      category: 'web',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: '6',
      title: 'Fitness Tracker',
      description: 'Health and fitness tracking app with workout plans and nutrition guidance.',
      image: '/src/assets/projects/fitness.jpg',
      technologies: ['Flutter', 'Dart', 'Node.js', 'MongoDB'],
      category: 'mobile',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest work and see how we've helped businesses transform their digital presence
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Filter className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium">Project Preview</p>
                  </div>
                </div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-300"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-300"
                        aria-label="View GitHub repository"
                      >
                        <Link className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div 
            className="relative rounded-2xl p-12 overflow-hidden"
            style={{
              backgroundImage: 'url(https://i.pinimg.com/736x/6d/5a/42/6d5a42c2fca0dd5df85740a9e4d5df78.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Like What You See?
              </h3>
              <p className="text-lg text-white/90 mb-8">
                Let's work together on your next project
              </p>
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 transform">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

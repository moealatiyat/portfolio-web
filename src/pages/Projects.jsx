import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Todo App Center',
    description: 'A clean and intuitive todo application with local storage functionality, built with vanilla HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/todo-app.png',
    link: 'https://todoappcenter.netlify.app/',
    github: 'https://github.com/moealatiyat/todo-app'
  },
  {
    name: 'Pokemon Wordle',
    description: 'A Pokemon-themed word guessing game that challenges players to guess Pokemon names. Features keyboard interactions, animations, and Pokemon API integration.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'API Integration'],
    image: '/images/pokemon-wordle.png',
    link: 'https://moealatiyat.github.io/pokemonwordle/',
    github: 'https://github.com/moealatiyat/pokemonwordle'
  }
];

function Projects() {
  return (
    <div className="projects-page">
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="page-title"
      >
        My Projects
      </motion.h1>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.name} className="project-image" />
            </div>
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const detailedSkills = [
  // Languages
  {
    name: 'HTML',
    description: 'Building semantic and accessible web structures with modern HTML5.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    tags: ['HTML5', 'Semantic', 'Accessibility', 'SEO'],
    detailedDescription: 'Proficient in creating semantic HTML structures with a focus on accessibility and SEO best practices. Experienced in building responsive layouts using modern HTML5 features.',
    projects: [
      {
        name: 'Todo App Center',
        description: 'Built a semantic and accessible HTML structure with proper heading hierarchy and ARIA attributes.',
        link: 'https://todoappcenter.netlify.app/'
      },
      {
        name: 'Pokemon Wordle',
        description: 'Created a semantic HTML structure for an interactive word guessing game with proper game board layout and accessibility features.',
        link: 'https://moealatiyat.github.io/pokemonwordle/'
      }
    ]
  },
  {
    name: 'CSS',
    description: 'Creating beautiful and responsive designs with modern CSS techniques.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    tags: ['Sass', 'Tailwind', 'Flexbox', 'Grid'],
    detailedDescription: 'Expert in modern CSS techniques including Flexbox, Grid, and CSS animations. Proficient in creating responsive layouts and implementing modern design principles.',
    projects: [
      {
        name: 'Todo App Center',
        description: 'Created a responsive and modern UI with smooth animations and transitions using vanilla CSS.',
        link: 'https://todoappcenter.netlify.app/'
      },
      {
        name: 'Pokemon Wordle',
        description: 'Designed a responsive game interface with smooth animations, keyboard styling, and a clean, modern look using vanilla CSS.',
        link: 'https://moealatiyat.github.io/pokemonwordle/'
      }
    ]
  },
  {
    name: 'JavaScript',
    description: 'Creating dynamic and interactive web experiences with modern JavaScript.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    tags: ['ES6+', 'Node.js', 'Express', 'REST APIs'],
    detailedDescription: 'Proficient in modern JavaScript development with expertise in ES6+ features, asynchronous programming, and DOM manipulation.',
    projects: [
      {
        name: 'Todo App Center',
        description: 'Implemented interactive features and local storage functionality using vanilla JavaScript.',
        link: 'https://todoappcenter.netlify.app/'
      },
      {
        name: 'Pokemon Wordle',
        description: 'Developed game logic, keyboard interactions, and Pokemon API integration using vanilla JavaScript.',
        link: 'https://moealatiyat.github.io/pokemonwordle/'
      }
    ]
  },
  {
    name: 'TypeScript',
    description: 'Developing type-safe applications with TypeScript for better code quality.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    tags: ['Type Safety', 'Interfaces', 'Generics', 'Decorators'],
    detailedDescription: 'Experienced in TypeScript development with a strong focus on type safety and code maintainability.',
    projects: []
  },

  // Libraries & Frameworks
  {
    name: 'React',
    description: 'Building modern, responsive web applications with React and its ecosystem.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    tags: ['Hooks', 'Redux', 'Next.js', 'TypeScript'],
    detailedDescription: 'Proficient in building scalable and maintainable React applications using modern practices and the latest features. Experienced in state management, component lifecycle, and React hooks.',
    projects: []
  },
  {
    name: 'Node.js',
    description: 'Building scalable server-side applications and APIs with Node.js.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    tags: ['Express', 'MongoDB', 'REST', 'GraphQL'],
    detailedDescription: 'Experienced in building server-side applications and RESTful APIs using Node.js and Express. Proficient in database integration and API design.',
    projects: []
  },

  // Collaboration & Version Control
  {
    name: 'Git',
    description: 'Managing code versions and collaborating effectively with version control.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    tags: ['Version Control', 'Branching', 'Merging', 'Workflows'],
    detailedDescription: 'Proficient in Git version control, including branching strategies, merge conflicts resolution, and collaborative workflows. Experienced in maintaining clean commit histories and following best practices.',
    projects: [
      {
        name: 'Todo App Center',
        description: 'Managed project versions and collaborated effectively using Git workflows.',
        link: 'https://todoappcenter.netlify.app/'
      }
    ]
  },
  {
    name: 'GitHub',
    description: 'Leveraging GitHub for project management and collaboration.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    tags: ['Repositories', 'Pull Requests', 'Issues', 'Actions'],
    detailedDescription: 'Experienced in using GitHub for project management, including creating and managing repositories, handling pull requests, tracking issues, and implementing GitHub Actions for CI/CD.',
    projects: [
      {
        name: 'Todo App Center',
        description: 'Hosted and managed the project on GitHub, implementing proper documentation and issue tracking.',
        link: 'https://todoappcenter.netlify.app/'
      }
    ]
  },

  // Design Tools
  {
    name: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces with modern design principles.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    tags: ['Figma', 'Adobe XD', 'Responsive', 'Accessibility'],
    detailedDescription: 'Skilled in creating user-centered designs with a focus on accessibility and responsive layouts. Proficient in using modern design tools and following best practices.',
    projects: []
  }
];

function SkillCard({ skill }) {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="detailed-skill-card"
    >
      <div className="detailed-skill-header">
        <div className="skill-icon">
          <img src={skill.icon} alt={skill.name} />
        </div>
        <h3 className="skill-name">{skill.name}</h3>
      </div>
      <p className="detailed-skill-description">{skill.detailedDescription}</p>
      <div className="skill-tags">
        {skill.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="skill-tag">{tag}</span>
        ))}
      </div>
      {skill.projects.length > 0 && (
        <div className="skill-projects">
          <motion.button
            className="projects-toggle"
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h4>Projects Using {skill.name}</h4>
            {isProjectsOpen ? <FaChevronUp /> : <FaChevronDown />}
          </motion.button>
          <AnimatePresence>
            {isProjectsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                {skill.projects.map((project, projectIndex) => (
                  <motion.a
                    key={projectIndex}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-reference"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h5>{project.name}</h5>
                    <p>{project.description}</p>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}

function Skills() {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProjects = (skillName) => {
    setExpandedProjects(prev => ({
      ...prev,
      [skillName]: !prev[skillName]
    }));
  };

  const categories = {
    'Languages': ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    'Libraries & Frameworks': ['React', 'Node.js'],
    'Collaboration & Version Control': ['Git', 'GitHub'],
    'Design Tools': ['UI/UX Design']
  };

  return (
    <div className="skills-page">
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="page-title"
      >
        My Skills
      </motion.h1>
      
      {Object.entries(categories).map(([category, skillNames]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="skills-category"
        >
          <h2 className="category-title">{category}</h2>
          <div className="skills-grid">
            {detailedSkills
              .filter(skill => skillNames.includes(skill.name))
              .map((skill) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="skill-header">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <h3>{skill.name}</h3>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-tags">
                    {skill.tags.map((tag, index) => (
                      <span key={index} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="skill-details">
                    <p>{skill.detailedDescription}</p>
                    {skill.projects.length > 0 && (
                      <div className="skill-projects">
                        <button 
                          className="projects-toggle"
                          onClick={() => toggleProjects(skill.name)}
                        >
                          <h4>Related Projects</h4>
                          <span>{expandedProjects[skill.name] ? '▼' : '▶'}</span>
                        </button>
                        <AnimatePresence>
                          {expandedProjects[skill.name] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {skill.projects.map((project, index) => (
                                <a
                                  key={index}
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="project-reference"
                                >
                                  <h5>{project.name}</h5>
                                  <p>{project.description}</p>
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Skills; 
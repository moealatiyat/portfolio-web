import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TypeWriter from './components/TypeWriter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const skills = [
  {
    name: 'HTML',
    description: 'Building semantic and accessible web structures with modern HTML5.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    tags: ['HTML5', 'Semantic', 'Accessibility', 'SEO']
  },
  {
    name: 'React',
    description: 'Building modern, responsive web applications with React and its ecosystem.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    tags: ['Hooks', 'Redux', 'Next.js', 'TypeScript']
  },
  {
    name: 'JavaScript',
    description: 'Creating dynamic and interactive web experiences with modern JavaScript.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    tags: ['ES6+', 'Node.js', 'Express', 'REST APIs']
  },
  {
    name: 'TypeScript',
    description: 'Developing type-safe applications with TypeScript for better code quality.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    tags: ['Type Safety', 'Interfaces', 'Generics', 'Decorators']
  },
  {
    name: 'Node.js',
    description: 'Building scalable server-side applications and APIs with Node.js.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    tags: ['Express', 'MongoDB', 'REST', 'GraphQL']
  },
  {
    name: 'CSS',
    description: 'Creating beautiful and responsive designs with modern CSS techniques.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    tags: ['Sass', 'Tailwind', 'Flexbox', 'Grid']
  },
  {
    name: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces with modern design principles.',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    tags: ['Figma', 'Adobe XD', 'Responsive', 'Accessibility']
  }
];

function MainContent() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const skillsSliderRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollSkills = (direction) => {
    const slider = skillsSliderRef.current;
    if (slider) {
      const scrollAmount = 320;
      slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="app">
      {/* Background Animation */}
      <div className="background-animation">
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="section-padding"
      >
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-text"
            >
              <h1 className="hero-name">Mohammad Alatiyat</h1>
              <h2 className="hero-title">Front End Developer</h2>
              <div className="hero-description">
                <TypeWriter 
                  text="Passionate about creating beautiful and responsive user interfaces. Specializing in building modern web applications with React and other front-end technologies."
                  delay={30}
                />
              </div>
              <motion.div 
                className="social-links"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a
                  href="https://github.com/moealatiyat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mohammad-alatiyat-7721b8285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-image-container"
            >
              <motion.img
                src="/mohammad-profile.jpg"
                alt="Mohammad Alatiyat"
                className="hero-image"
                whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-padding"
        style={{ backgroundColor: 'var(--tertiary-color)' }}
      >
        <div className="container">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="heading"
          >
            My Skills
          </motion.h2>
          <div className="skills-container">
            <button 
              className="scroll-button prev" 
              onClick={() => scrollSkills(-1)}
              aria-label="Scroll left"
            >
              ←
            </button>
            <div className="skills-slider" ref={skillsSliderRef}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="skill-card"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <div className="skill-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-tags">
                    {skill.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <button 
              className="scroll-button next" 
              onClick={() => scrollSkills(1)}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="heading"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="subheading"
          >
            Let's work together on your next project
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="contact-info"
          >
            <p>Email: moalatiyat05@gmail.com</p>
            <p>Phone: +1 (973) 333-5777</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="nav-bar"
      >
        <div className="nav-container">
          <motion.div 
            className="nav-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="nav-link">
              🏠 Home
            </Link>
            <Link to="/skills" className="nav-link">
              🛠️ Skills
            </Link>
            <Link to="/projects" className="nav-link">
              💻 Projects
            </Link>
            <Link to="/contact" className="nav-link">
              📬 Contact
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;

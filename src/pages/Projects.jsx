import { motion } from 'framer-motion';

function Projects() {
  return (
    <div className="app">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="container">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="heading"
          >
            Featured Projects 🚀
          </motion.h2>
          <div className="projects-grid">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="project-card"
            >
              <div className="project-content">
                <h3 className="project-title">Todo App Center 📝</h3>
                <p className="project-description">
                  A student productivity hub featuring a Pomodoro timer ⏰, study notes 📚, and task management system. Built with HTML, CSS, and JavaScript to help students stay focused and organized.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
                <motion.div
                  className="project-screenshot"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <img 
                    src="/images/todo-app.png" 
                    alt="Todo App Interface" 
                    className="project-image"
                  />
                </motion.div>
                <motion.a
                  href="https://todoappcenter.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Projects; 
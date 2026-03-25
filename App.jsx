import React, { useState, useEffect } from 'react'
import './App.css'

const Header = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = ['Home', 'About', 'Projects', 'Contact']

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Portfolio</a>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()) }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello! I Am Masharibov Azizbek</h1>
            <div className="hero-title-wrapper">
              <p className="hero-subtitle">A Developer who</p>
              <h2 className="hero-quote">Judges a book<br />by its cover...</h2>
              <p className="hero-quote-desc">Because if the cover does not impress you what else can?</p>
            </div>
            <p className="hero-role">I'm a <strong>Full Stack Developer</strong> |</p>
            <p className="hero-experience">
              A self-taught Full Stack developer, functioning in the industry for <strong>2-3 years</strong> now. 
              I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
            </p>
          </div>
          <div className="hero-buttons">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }} className="btn btn-primary">View My Work</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Masharibov Azizbek</h3>
            <p className="about-title">Full Stack Developer with 2-3 years of experience</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <div className="skills-section">
              <h3>Technical Skills</h3>
              <div className="skills-container">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">React JS</span>
                    <span className="skill-percentage">28%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '28%', backgroundColor: '#61dafb' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-percentage">35%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '35%', backgroundColor: '#f7df1e' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">CSS</span>
                    <span className="skill-percentage">65%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '65%', backgroundColor: '#264de4' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">HTML</span>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '80%', backgroundColor: '#e34c26' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="400" fill="#e0e0e0" />
                <circle cx="200" cy="200" r="100" fill="#b0b0b0" />
                <text x="200" y="220" textAnchor="middle" fill="#666" fontSize="16">Profile Image</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['React', 'JavaScript', 'CSS'],
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Node.js', 'Express', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tags: ['Python', 'Django', 'PostgreSQL'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <svg width="100%" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="200" fill="#e0e0e0" />
                  <text x="150" y="110" textAnchor="middle" fill="#666" fontSize="14">Project Image</text>
                </svg>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm currently looking to join a cross-functional team that values improving people's lives through accessible design.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>masharibov.azizbek@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+998 90 123 45 67</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Uzbekistan, Tashkent</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Telegram</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Masharibov Azizbek. All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.body.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="app">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
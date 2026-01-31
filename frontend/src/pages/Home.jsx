import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Brain, Code, Database, Cpu, GitBranch, Mail, Phone, MapPin, 
  Github, Linkedin, Download, ExternalLink, ChevronDown,
  Sparkles, Terminal, Network, Layers, Zap, Award
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { personalInfo, stats, experience, projects, skills, testimonials } from '../data/mock';
import '../styles/home.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a mock form. In production, this would send an email.');
  };

  return (
    <div className="portfolio-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="grid-overlay"></div>
        <motion.div 
          className="cursor-glow"
          animate={{ x: mousePosition.x - 150, y: mousePosition.y - 150 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      {/* Header */}
      <motion.header 
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="header-content">
          <div className="logo">
            <Terminal className="logo-icon" />
            <span className="logo-text">AYUL IT Solutions</span>
          </div>
          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <Button variant="outline" className="cta-button">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-badge">
              <Sparkles className="w-4 h-4" />
              <span>AI/ML Engineer at {personalInfo.company}</span>
            </div>
            
            <h1 className="hero-title">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            
            <p className="hero-subtitle">{personalInfo.tagline}</p>
            
            <div className="hero-actions">
              <Button size="lg" className="primary-button">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="secondary-button">
                <Github className="w-5 h-5 mr-2" />
                View Work
              </Button>
            </div>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="floating-card card-1">
              <Brain className="w-8 h-8" />
              <span>NLP</span>
            </div>
            <div className="floating-card card-2">
              <Network className="w-8 h-8" />
              <span>Transformers</span>
            </div>
            <div className="floating-card card-3">
              <Cpu className="w-8 h-8" />
              <span>Computer Vision</span>
            </div>
            <div className="floating-card card-4">
              <Code className="w-8 h-8" />
              <span>FastAPI</span>
            </div>
            <div className="central-orb"></div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              <Layers className="section-icon" />
              About Me
            </h2>
            <div className="about-grid">
              <div className="about-text">
                <p className="about-description">{personalInfo.bio}</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <Mail className="w-5 h-5" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="contact-item">
                    <Phone className="w-5 h-5" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="contact-item">
                    <MapPin className="w-5 h-5" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
              <div className="about-highlight">
                <div className="highlight-card">
                  <Zap className="highlight-icon" />
                  <h3>Specialization</h3>
                  <p>Natural Language Processing, Computer Vision, and Production AI Systems</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="section-content">
          <h2 className="section-title">
            <GitBranch className="section-icon" />
            Experience
          </h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="experience-card">
                  <CardContent className="p-6">
                    <div className="exp-header">
                      <div>
                        <h3 className="exp-role">{exp.role}</h3>
                        <p className="exp-company">{exp.company}</p>
                      </div>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                    <p className="exp-period">{exp.period} • {exp.location}</p>
                    <p className="exp-description">{exp.description}</p>
                    <ul className="exp-achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    <div className="exp-tech">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-content">
          <h2 className="section-title">
            <Code className="section-icon" />
            Featured Projects
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="project-card">
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay">
                      <Button variant="secondary" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="project-category">{project.category}</p>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-highlights">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="project-tech">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-content">
          <h2 className="section-title">
            <Database className="section-icon" />
            Technical Skills
          </h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="skill-card">
                  <CardContent className="p-6">
                    <h3 className="skill-category">{category}</h3>
                    <div className="skill-tags">
                      {skillList.map((skill, i) => (
                        <Badge key={i} variant="outline" className="skill-badge">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="section-content">
          <h2 className="section-title">
            <Award className="section-icon" />
            Testimonials
          </h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="testimonial-card">
                  <CardContent className="p-6">
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                      <div>
                        <p className="author-name">{testimonial.name}</p>
                        <p className="author-role">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="section-content">
          <h2 className="section-title">
            <Mail className="section-icon" />
            Get In Touch
          </h2>
          <div className="contact-grid">
            <div className="contact-info-panel">
              <h3>Let's Work Together</h3>
              <p>I'm always interested in hearing about new projects and opportunities.</p>
              <div className="contact-links">
                <a href={`mailto:${personalInfo.email}`} className="contact-link">
                  <Mail className="w-5 h-5" />
                  {personalInfo.email}
                </a>
                <a href={`tel:${personalInfo.phone}`} className="contact-link">
                  <Phone className="w-5 h-5" />
                  {personalInfo.phone}
                </a>
                <a href={personalInfo.github} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </a>
                <a href={personalInfo.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <Card className="contact-form-card">
              <CardContent className="p-6">
                <form onSubmit={handleContactSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <Textarea id="message" placeholder="Tell me about your project..." rows={5} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full primary-button">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <Terminal className="w-6 h-6" />
            <span>© 2025 Ayul IT Solutions. All rights reserved.</span>
          </div>
          <div className="footer-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
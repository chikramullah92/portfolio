'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe, MessageSquare, ExternalLink, Code, Layers, Smartphone, ArrowRight, ChevronDown, Monitor, MessageCircle } from 'lucide-react';

const LinkedinIcon = ({ size = 16, className = "", style = {} }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WaveBackground = () => (
  <div className="wave-bg-container">
    <svg className="wave-svg" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 15 }).map((_, i) => {
        const shift = i * 15;
        const opacity = 0.02 + (i / 15) * 0.05;
        return (
          <path
            key={i}
            d={`M -100 ${450 + shift} 
                C 300 ${200 + shift}, 700 ${700 - shift}, 1100 ${300 + shift} 
                T 1600 ${500 - shift}`}
            stroke="rgba(56, 189, 248, 0.3)"
            strokeWidth="0.75"
            style={{
              opacity,
              animation: `waveMove ${15 + i * 2}s infinite ease-in-out alternate`
            }}
          />
        );
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const shift = i * 20;
        const opacity = 0.01 + (i / 12) * 0.04;
        return (
          <path
            key={`second-${i}`}
            d={`M -100 ${350 - shift} 
                C 400 ${600 - shift}, 800 ${100 + shift}, 1200 ${500 - shift} 
                T 1600 ${300 + shift}`}
            stroke="rgba(129, 140, 248, 0.2)"
            strokeWidth="0.5"
            style={{
              opacity,
              animation: `waveMove ${20 + i * 3}s infinite ease-in-out alternate-reverse`
            }}
          />
        );
      })}
    </svg>
  </div>
);

const TypingEffect = () => {
  const words = [
    "Android apps.",
    "iOS apps.",
    "Websites.",
    "Desktop apps.",
    "Flutter.",
    "React.",
    "Team Leadership."
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeWord = words[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < activeWord.length) {
        timer = setTimeout(() => {
          setDisplayedText(activeWord.slice(0, displayedText.length + 1));
        }, 120);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(activeWord.slice(0, displayedText.length - 1));
        }, 60);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <span style={{ 
      display: 'inline-block', 
      position: 'relative', 
      whiteSpace: 'nowrap',
      verticalAlign: 'bottom'
    }}>
      <span className="gradient-text" style={{ 
        display: 'inline-block',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform: 'translate3d(0,0,0)'
      }}>
        {displayedText || '\u00A0'}
      </span>
      <span className="typing-cursor" style={{
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform: 'translate3d(0,0,0)'
      }}>|</span>
    </span>
  );
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      title: "مبين | Mobeen",
      desc: "An elegant, modern Islamic utility mobile application featuring high-fidelity Quran study tools, accurate prayer schedules, localization, and custom translation models.",
      img: "/project_mobeen.png",
      tech: ["Flutter", "Dart", "GetX", "SQLite"],
      link: "#",
      category: "mobile"
    },
    {
      title: "Moultrie App",
      desc: "A sophisticated, cloud-connected IoT mobile platform for managing smart trail cameras, wildlife scouting, high-definition field feeds, and environmental activity forecasting.",
      img: "/project_moultrie.png",
      tech: ["Flutter", "Dart", "AWS IoT", "Cloud Firestore"],
      link: "#",
      category: "mobile"
    },
    {
      title: "School Management System",
      desc: "A robust, high-performance desktop application for administrative control, student enrollment tracking, course scheduling, billing, and real-time attendance dashboards.",
      img: "/project_school_mgmt.png",
      tech: ["Flutter Desktop", "Dart", "PostgreSQL", "SaaS"],
      link: "#",
      category: "desktop"
    },
    {
      title: "Point of Sale (POS) System",
      desc: "A lightning-fast, offline-first Point of Sale desktop app featuring thermal printer integration, barcode scanning, detailed receipt previewing, and advanced sales analytics.",
      img: "/project_pos.png",
      tech: ["Electron", "React.js", "SQLite", "Node.js"],
      link: "#",
      category: "desktop"
    },
    {
      title: "Iqra Group of Schools Website",
      desc: "An interactive, modern educational portal and website ecosystem for Iqra Group of Schools, showcasing academic programs, campus announcements, and online admissions.",
      img: "/project_iqra.png",
      tech: ["Next.js", "React", "Nest.js", "PostgreSQL"],
      link: "#",
      category: "web",
      inDevelopment: true
    },
    {
      title: "Al-Etihad Cooperative Insurance",
      desc: "Cross-platform mobile app featuring Material 3 UI, secure biometric authentication, and complex multi-step motor claim modules.",
      img: "/project_aletihad.png",
      tech: ["Flutter", "Dart", "Biometric Auth"],
      link: "#",
      category: "mobile"
    },
    {
      title: "URM Charity Project",
      desc: "Robust web platform featuring secure Stripe payment gateways and optimized Cloudflare configurations for seamless charity operations.",
      img: "/project_urm.png",
      tech: ["Next.js", "Nest.js", "Stripe", "Cloudflare"],
      link: "#",
      category: "web"
    },
    {
      title: "WorkinAUS",
      desc: "A scalable and highly optimized job-matching platform tailored specifically for the Australian labor market.",
      img: "/project1.png",
      tech: ["React.js", "Node.js", "Clean Architecture"],
      link: "#",
      category: "web"
    },
    {
      title: "MyKakak's",
      desc: "A high-performance cleaning service mobile application offering seamless user experience for the Malaysian market.",
      img: "/project2.png",
      tech: ["Flutter", "GetX", "Firebase"],
      link: "#",
      category: "mobile"
    }
  ];

  const skills = [
    { icon: <Smartphone size={20} />, name: "Flutter & Dart" },
    { icon: <Globe size={20} />, name: "React & Next.js" },
    { icon: <Layers size={20} />, name: "Nest.js & Node.js" },
    { icon: <Code size={20} />, name: "Clean Architecture" }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="nav-logo"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <img src="/logo-only.png" alt="Ikram Ullah Logo" style={{ width: '56px', height: '56px', borderRadius: '12px' }} />
            <span className="gradient-text">Ikramullah.</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="nav-links"
          >
            <a href="#about" className="nav-link">About</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Let's Talk</a>
          </motion.div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero-section" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
          <WaveBackground />
          
          <div className="container" style={{ textAlign: 'left', zIndex: 10, position: 'relative', width: '100%', paddingLeft: '2rem' }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ maxWidth: '850px' }}
            >
              <motion.div variants={fadeIn} className="glow-effect" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
                <span style={{ 
                  background: 'rgba(56, 189, 248, 0.1)', 
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  color: '#38bdf8',
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}>
                  Available for new opportunities
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn} 
                style={{ 
                  fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)', 
                  marginBottom: '1.5rem', 
                  letterSpacing: '-0.02em',
                  fontWeight: 800,
                  lineHeight: 1.15
                }}
              >
                Sup, I'm <span className="gradient-text">Ikram Ullah.</span> <br />
                I'm a developer of <br />
                <TypingEffect />
              </motion.h1>
              
              <motion.p 
                variants={fadeIn} 
                style={{ 
                  fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
                  color: 'var(--text-secondary)', 
                  maxWidth: '650px', 
                  margin: '0 0 2.5rem 0',
                  lineHeight: 1.6
                }}
              >
                Senior Developer & Department Lead at dZONE Solutions with over 7 years of experience in cross-platform mobile apps, enterprise web ecosystems, and robust desktop products.
              </motion.p>
              
              <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start' }}>
                <a href="#work" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                  View My Work <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </a>
                <a href="#contact" className="btn btn-secondary" style={{ padding: '0.75rem 2rem' }}>
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="scroll-indicator-wrapper"
            >
              <a href="#about" className="mouse-indicator">
                <div className="mouse-wheel"></div>
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{ position: 'relative', zIndex: 10 }}>
          <div className="container">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="glass-panel"
              style={{ padding: '4rem', display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}
            >
              <div style={{ flex: '1 1 400px' }}>
                <motion.h2 variants={fadeIn} className="section-title" style={{ textAlign: 'left' }}>About <span className="gradient-text">Me</span></motion.h2>
                <motion.p variants={fadeIn} style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                  Result-driven Senior Developer and Department Lead with over 7 years of professional experience. I have a proven track record of architecting scalable, high-performance solutions using Flutter and full-stack JavaScript architectures for diverse international markets including Saudi Arabia, Malaysia, the UK, and Australia.
                </motion.p>
                <motion.p variants={fadeIn} style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                  I hold a Bachelor of Science in Computer Science from the University of Lahore. Beyond coding, I'm passionate about AI, IoT, and Robotics, and love exploring different cultures through travel and playing sports like cricket and football.
                </motion.p>
              </div>
              
              <div style={{ flex: '1 1 300px' }}>
                <motion.h3 variants={fadeIn} style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Core Competencies</motion.h3>
                <motion.div variants={staggerContainer} className="skills-container">
                  {skills.map((skill, index) => (
                    <motion.div key={index} variants={fadeIn} className="skill-item">
                      <span style={{ color: 'var(--accent)' }}>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" style={{ position: 'relative', zIndex: 10 }}>
          <div className="container">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Selected <span className="gradient-text">Work</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              A showcase of my recent projects, demonstrating my expertise in building functional and beautiful digital products.
            </motion.p>

            {/* Category Filter */}
            <div className="filter-container" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Projects', icon: <Layers size={14} /> },
                { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={14} /> },
                { id: 'web', label: 'Web & Cloud', icon: <Globe size={14} /> },
                { id: 'desktop', label: 'Desktop Apps', icon: <Monitor size={14} /> }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`btn ${activeCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ 
                    padding: '0.6rem 1.35rem', 
                    fontSize: '0.875rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.6rem',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>

            <motion.div layout className="projects-grid">
              <AnimatePresence mode="popLayout">
                {projects
                  .filter(p => activeCategory === 'all' || p.category === activeCategory)
                  .map((project) => (
                    <motion.div 
                      layout
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="glass-panel project-card"
                    >
                      <div className="project-img-wrapper" style={{ position: 'relative' }}>
                        <img src={project.img} alt={project.title} className="project-img" />
                        {project.inDevelopment && (
                          <div className="dev-badge">
                            <span className="pulse-dot"></span>
                            Active Development
                          </div>
                        )}
                      </div>
                      <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.desc}</p>
                        <div className="tech-stack" style={{ marginBottom: '1.5rem' }}>
                          {project.tech.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                        <a href={project.link} className="btn btn-secondary" style={{ width: '100%', padding: '0.5rem' }}>
                          View Project <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                        </a>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ position: 'relative', zIndex: 10 }}>
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ padding: '5rem 2rem', textAlign: 'center', background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.8) 100%)' }}
            >
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>Let's Build Together</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem' }}>
                I'm currently open to new opportunities, custom department leadership collaborations, and exciting freelance platforms. Feel free to connect!
              </p>

              {/* Connected channels */}
              <div style={{ 
                display: 'flex', 
                gap: '1.25rem', 
                justifyContent: 'center', 
                flexWrap: 'wrap', 
                marginBottom: '3rem' 
              }}>
                <a 
                  href="mailto:reply2ikramullah@gmail.com" 
                  className="btn btn-secondary" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
                >
                  <Mail size={16} style={{ color: 'var(--accent)' }} />
                  reply2ikramullah@gmail.com
                </a>
                <a 
                  href="https://wa.me/92337471920" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
                >
                  <MessageCircle size={16} style={{ color: '#25D366' }} />
                  +92 337 471920
                </a>
                <a 
                  href="https://www.linkedin.com/in/ikram-ullah-7b582a1a9/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
                >
                  <LinkedinIcon size={16} style={{ color: '#0a66c2' }} />
                  Ikram Ullah
                </a>
              </div>

              <a href="mailto:reply2ikramullah@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                Say Hello
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <a href="mailto:reply2ikramullah@gmail.com" className="social-link" title="Email"><Mail size={20} /></a>
            <a href="https://wa.me/92337471920" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp"><MessageCircle size={20} /></a>
            <a href="https://www.linkedin.com/in/ikram-ullah-7b582a1a9/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn"><LinkedinIcon size={20} /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Ikram Ullah. Designed with passion.</p>
        </div>
      </footer>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-10px) translateX(-50%); }
          60% { transform: translateY(-5px) translateX(-50%); }
        }
      `}} />
    </>
  );
}

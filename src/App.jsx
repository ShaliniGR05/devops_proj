import './App.css'

function App() {
  const projects = [
    {
      title: 'OPPIE',
      description: 'Ransomware assessment tool.',
    },
    {
      title: 'CREDORA',
      description: 'Blue carbon based blockchain registry.',
    },
    {
      title: 'Personal Portfolio',
      description: 'Portfolio website to showcase projects and skills.',
    },
  ]

  const skills = ['HTML', 'CSS', 'JavaScript', 'Cloud Basics', 'Linux']

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container">
          <a className="logo" href="#home" aria-label="ShaliniGR home">
            ShaliniGR
          </a>
          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Portfolio 2026</p>
              <h1>
                Hello, I am <span>Shalini</span>
              </h1>
              <p className="hero-copy">
                A passionate developer learning and building cool things in web
                development, cloud computing, and cybersecurity.
              </p>
              <a href="#contact" className="btn-primary">
                Hire Me
              </a>
            </div>
            <aside className="hero-panel" aria-label="Highlights">
              <h2>Current Focus</h2>
              <ul>
                <li>Practical full stack projects</li>
                <li>Cloud foundations and deployment workflows</li>
                <li>Security-aware development</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container narrow">
            <h2>About Me</h2>
            <p>
              I am a motivated developer with strong interest in building
              practical products. I enjoy solving real-world problems, learning
              by doing, and turning ideas into clean, useful experiences.
            </p>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <h2>Projects</h2>
            <div className="cards">
              {projects.map((project) => (
                <article className="card" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2>Skills</h2>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container narrow">
            <h2>Contact</h2>
            <p>
              Email:{' '}
              <a href="mailto:shalinigr05@gmail.com">shalinigr05@gmail.com</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>2026 Shalini. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

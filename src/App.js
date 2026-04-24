import React, { useEffect, useRef } from 'react';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner_new.png';
import bannerApp from './assets/app/bannerApp.png';

// Hook for scroll animations
function useScrollReveal() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return addToRefs;
}

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-wrapper">
          <img src={logoImg} alt="Kieu Van Cuong" className="logo-img" />
          <span className="studio-name">Kieu Van Cuong</span>
        </div>
      </div>
    </header>
  );
}

function HomePage() {
  const addToRefs = useScrollReveal();

  const apps = [
    {
      name: 'Muslim: Quran & Prayer Time',
      category: 'Lifestyle',
      description: 'A comprehensive app for Muslims including Quran, prayer times, and religious guidance.',
      image: bannerApp,
      playStore: '',
      appStore: 'https://apps.apple.com/vn/app/muslim-quran-prayer-time/id6754753539'
    },
    {
      name: 'EMI Calculator - Loan & Finance',
      category: 'Finance',
      description: 'Easily calculate EMIs for home loans, car loans, and manage your personal finances.',
      image: bannerApp,
      playStore: 'https://play.google.com/store/apps/details?id=com.loancalculator.finance.emi.emicalculator.autoloan',
      appStore: ''
    },
    {
      name: 'Budget Tracker - Smart Budget',
      category: 'Finance',
      description: 'Track your daily expenses, set budgets, and take control of your financial life.',
      image: bannerApp,
      playStore: 'https://play.google.com/store/apps/details?id=com.budgettracker.personalfinance.trackmoney.smartbudget',
      appStore: ''
    },
    {
      name: 'Morph Addons Mods for Minecraft',
      category: 'Gaming/Tools',
      description: 'Discover and install the best morphing mods and addons for your Minecraft experience.',
      image: bannerApp,
      playStore: 'https://play.google.com/store/apps/details?id=com.minecraft.morph.addons.mods',
      appStore: ''
    }
  ];

  const skills = [
    { name: 'Flutter', icon: '🚀' },
    { name: 'Dart', icon: '🎯' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'REST API', icon: '🌐' },
    { name: 'Git', icon: '📂' },
    { name: 'State Management', icon: '⚡' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Android/iOS', icon: '📱' }
  ];

  return (
    <main>
      <section className="hero reveal" ref={addToRefs}>
        <div className="container hero-row">
          <div className="hero-content">
            <span className="badge slide-up">Available for Projects</span>
            <h1 className="hero-title slide-up">
              Hi, I'm <span>Kieu Van Cuong</span><br />
              Middle Flutter Developer
            </h1>
            <p className="hero-description slide-up">
              With over 4+ years of experience in Flutter development, I specialize in building 
              high-performance, cross-platform mobile applications that deliver exceptional 
              user experiences.
            </p>
            <div className="hero-actions slide-up">
              <a href="#projects" className="btn btn-primary">View My Apps</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image-container fade-in">
            <img src={imgMkj} alt="Kieu Van Cuong" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="section profile-summary reveal" ref={addToRefs}>
        <div className="container">
          <h2 className="section-title">Profile Summary</h2>
          <div className="summary-content">
            <p>
              I am a dedicated Flutter Developer with a passion for creating clean, efficient, and scalable mobile solutions. 
              My expertise lies in translating complex requirements into intuitive user interfaces and robust backend integrations. 
              Throughout my 4+ years in the industry, I have successfully delivered multiple projects ranging from utility tools to health apps, 
              always maintaining a high standard of code quality and performance.
            </p>
          </div>
        </div>
      </section>

      <section className="section tech-skills reveal" ref={addToRefs}>
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section reveal" ref={addToRefs}>
        <div className="container">
          <h2 className="section-title">Published Applications</h2>
          <div className="apps-grid">
            {apps.map((app, index) => (
              <div key={index} className="app-card">
                <img src={app.image} alt={app.name} className="app-image" />
                <div className="app-info">
                  <span className="app-category">{app.category}</span>
                  <h3>{app.name}</h3>
                  <p className="app-description">{app.description}</p>
                  <div className="app-links">
                    {app.playStore && (
                      <a href={app.playStore} target="_blank" rel="noopener noreferrer" className="btn btn-playstore btn-store">
                        Google Play
                      </a>
                    )}
                    {app.appStore && (
                      <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="btn btn-appstore btn-store">
                        App Store
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section reveal" ref={addToRefs}>
        <div className="container">
          <div className="contact-card">
            <h2>Let's Work Together</h2>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className="contact-links">
              <a href="mailto:cuongkv.it@gmail.com" className="contact-item">
                📧 cuongkv.it@gmail.com
              </a>
              <div className="contact-item">
                🏠 Bantul, Indonesia
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Kieu Van Cuong. Built with ❤️ using Flutter & React.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

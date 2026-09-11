import React, { useEffect, useRef } from 'react';
import './App.css';

import icIos from './assets/ic_ios.png';
import icAndroid from './assets/ic_android.png';
import imgMomlingo from './assets/momlingo.png';
import imgPedometer from './assets/pedometer.png';
import imgPlant from './assets/plant.png';
import imgLoan from './assets/loan.png';
import imgTextToSpeech from './assets/texttospeed.png';
import imgLoanAndroid from './assets/tr210.png';
import imgGpsCamera from './assets/gps.png';
import imgRemote from './assets/remote.png';
import imgFlo from './assets/flo.png';
import imgCoin from './assets/coin.png';
import imgCycleSleep from './assets/cycle_sleep.png';
import imgQrSnap from './assets/qrcode.png';
import icFb from './assets/ic_fb.png';
import imgGold from './assets/gold.png';
import imgSliver from './assets/sliver.png';
import icMail from './assets/ic_mail.png';
import icPhone from './assets/ic_phone.png';
import icAddress from './assets/ic_address.png';

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

function HomePage() {
  const addToRefs = useScrollReveal();

  const apps = [
    {
      name: 'Momlingo',
      category: 'Education',
      description: 'A parenting and language app designed to support mothers and families in communication.',
      image: imgMomlingo,
      playStore: '',
      appStore: 'https://apps.apple.com/vn/app/momlingo/id6739670311'
    },
    {
      name: 'Walk Log - Pedometer Counter',
      category: 'Health & Fitness',
      description: 'Track your daily steps, distance, and calories burned with an intuitive walk logger.',
      image: imgPedometer,
      playStore: '',
      appStore: 'https://apps.apple.com/us/app/walk-log-pedometer-counter/id6757287465'
    },
    {
      name: 'GreenScan - Plant Identifier',
      category: 'Education/Tools',
      description: 'Instantly identify plants, flowers, and trees using AI scan and get plant care advice.',
      image: imgPlant,
      playStore: '',
      appStore: 'https://apps.apple.com/vn/app/greenscan-plant-identifier/id6760635191'
    },
    {
      name: 'EMI Calculator & Planner',
      category: 'Finance',
      description: 'Calculate loan EMIs, plan your personal finances, and track amortization schedules.',
      image: imgLoan,
      playStore: '',
      appStore: 'https://apps.apple.com/us/app/emi-calculator-planner/id6758380734'
    },
    {
      name: 'Document Voice Reader',
      category: 'Productivity',
      description: 'Convert your text documents, PDFs, and articles into natural-sounding voice audio.',
      image: imgTextToSpeech,
      playStore: '',
      appStore: 'https://apps.apple.com/us/app/document-voice-reader/id6766188814'
    },
    {
      name: 'EMI Calculator - Loan & Finance',
      category: 'Finance',
      description: 'Easily calculate EMIs for home loans, car loans, and manage your personal finances.',
      image: imgLoanAndroid,
      playStore: 'https://play.google.com/store/apps/details?id=com.loancalculator.finance.emi.emicalculator.autoloan',
      appStore: ''
    },
    {
      name: 'GPS Camera: Location & Time',
      category: 'Travel',
      description: 'Capture photos with GPS coordinates, address details, and timestamps embedded for organizing travel memories and outdoor activities.',
      image: imgGpsCamera,
      playStore: '',
      appStore: 'https://apps.apple.com/us/app/gps-camera-location-time/id6776932642'
    },
    {
      name: 'Smart Remote Controller TV',
      category: 'Utilities',
      description: 'Turn your iPhone or iPad into a WiFi remote control for smart TVs with volume, channel, and touchpad navigation.',
      image: imgRemote,
      playStore: '',
      appStore: 'https://apps.apple.com/us/app/smart-remote-controller-tv/id6759699433'
    },
    {
      name: 'Flo Period Tracker Smart',
      category: 'Health & Fitness',
      description: 'Track menstrual cycles, predict ovulation windows, and log daily symptoms with personalized health insights.',
      image: imgFlo,
      playStore: '',
      appStore: 'https://apps.apple.com/us/app/flo-period-tracker-smart/id6784508476'
    },
    {
      name: 'Coin Scanner & Collection',
      category: 'Utilities/Tools',
      description: 'Identify coins through camera scanning, organize collections, and access currency conversion tools.',
      image: imgCoin,
      playStore: '',
      appStore: 'https://apps.apple.com/vn/app/coin-scanner-collection/id6772942348'
    },
    {
      name: 'Cycle Sleep Rest',
      category: 'Health & Fitness',
      description: 'Track sleep cycles with ambient sound customization and smart alarms to help you wake up refreshed.',
      image: imgCycleSleep,
      playStore: '',
      appStore: 'https://apps.apple.com/us/app/cycle-sleep-rest/id6786232729'
    },
    {
      name: 'QR Snap: Instant Code Reader',
      category: 'Utilities/Tools',
      description: 'Scan QR codes and barcodes instantly, generate custom codes, and track weekly scanning activity.',
      image: imgQrSnap,
      playStore: '',
      appStore: 'https://apps.apple.com/us/app/qr-snap-instant-code-reader/id6775690744'
    }
  ];

  const skills = [
    {
      name: 'Flutter & Dart',
      icon: '🚀',
      years: '4+ years',
      tag: 'Technical',
      tagColor: 'tag-primary',
      description: 'Expert in building high-performance cross-platform apps with Clean Architecture, MVVM, SOLID, Lazy Loading, Animations, and Unit/Widget Testing.',
      chips: ['Clean Arch', 'MVVM', 'Animations', 'Unit Testing']
    },
    {
      name: 'State Management',
      icon: '⚡',
      years: '4+ years',
      tag: 'Technical',
      tagColor: 'tag-primary',
      description: 'Expert in BLoC (Cubit), Riverpod, Hooks, Provider and GetX for scalable and maintainable app state.',
      chips: ['BLoC', 'Riverpod', 'Provider', 'GetX']
    },
    {
      name: 'Services & APIs',
      icon: '🔥',
      years: '3+ years',
      tag: 'Technical',
      tagColor: 'tag-primary',
      description: 'Integrating Firebase (Auth, FCM, Firestore), RESTful APIs via Dio, WebSocket, In-App Purchase, MapsSDK and AdMob.',
      chips: ['Firebase', 'Dio', 'AdMob', 'IAP']
    },
    {
      name: 'Native & Cross-Platform',
      icon: '📱',
      years: '2+ years',
      tag: 'Technical',
      tagColor: 'tag-primary',
      description: 'iOS Native (Swift), Android Native (Java/Kotlin) for plugin development, and basic React Native knowledge.',
      chips: ['Swift', 'Kotlin', 'Java', 'React Native']
    },
    {
      name: 'Deployment & Store',
      icon: '🏪',
      years: '3+ years',
      tag: 'Deployment',
      tagColor: 'tag-backend',
      description: 'Expert in full-cycle App Store Connect & Google Play Console — submission, policy compliance, and resolving store issues for 20+ apps.',
      chips: ['App Store', 'Play Console', 'Policy', 'CI/CD']
    },
    {
      name: 'Workflow & Tools',
      icon: '📂',
      years: '4+ years',
      tag: 'Tools',
      tagColor: 'tag-tools',
      description: 'Git (Git Flow, Bitbucket), Jira, Trello for project management and foundational CI/CD automation.',
      chips: ['Git Flow', 'Bitbucket', 'Jira', 'Trello']
    },
    {
      name: 'AI Productivity',
      icon: '🤖',
      years: '2+ years',
      tag: 'AI',
      tagColor: 'tag-arch',
      description: 'Leveraging AI tools to optimize workflows and boost delivery performance across development tasks.',
      chips: ['ChatGPT', 'Claude', 'Cursor', 'Gemini']
    },
    {
      name: 'Soft Skills & Culture',
      icon: '🤝',
      years: 'Active',
      tag: 'Soft Skills',
      tagColor: 'tag-design',
      description: 'Disciplined under pressure, bridges cross-functional teams. Head of Cultural Committee — team bonding, internal comms & content creation.',
      chips: ['Leadership', 'Cross-functional', 'Content Creator']
    },
  ];

  return (
    <main>
      <section className="hero reveal" ref={addToRefs}>
        <div className="container-wide hero-row">
          <div className="hero-content">
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
              <a href="#skills" className="btn btn-outline">My Skills</a>
            </div>
          </div>
          <div className="hero-profile-card fade-in">
            <h2 className="hero-profile-title">Profile Summary</h2>
            <ul className="hero-profile-list">
              <li>Mobile Engineer with 4+ years in Flutter/Dart, plus hands-on Native Android (Kotlin/Java) & iOS (Swift).</li>
              <li>Strong in Clean Architecture, MVVM, SOLID, BLoC, Provider & Riverpod; skilled at optimizing UI/UX, memory, battery and crash rates.</li>
              <li>End-to-end app development — REST APIs, Firebase, IAP/Subscriptions, CI/CD, and 20+ apps published on Google Play & App Store.</li>
              <li>Cultural leader — Head of Cultural Committee, driving team bonding & internal comms.</li>
            </ul>
            <div className="hero-profile-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">4+</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number">20+</span>
                <span className="hero-stat-label">Apps Published</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section reveal" ref={addToRefs}>
        <div className="container-wide">
          <h2 className="section-title">Published Applications</h2>
          <div className="apps-unified-grid">
            {apps.map((app, index) => {
              const isIos = !!app.appStore;
              const link = isIos ? app.appStore : app.playStore;
              return (
                <a key={index} className="app-card" href={link} target="_blank" rel="noopener noreferrer">
                  <img src={app.image} alt={app.name} className="app-image" />
                  <div className="app-info">
                    <div className="app-meta">
                      <span className="app-category">{app.category}</span>
                      <span className={`platform-badge ${isIos ? 'platform-ios' : 'platform-android'}`}>
                        <img src={isIos ? icIos : icAndroid} alt={isIos ? 'iOS' : 'Android'} width="16" height="16" style={{ objectFit: 'contain' }} />
                      </span>
                    </div>
                    <h3>{app.name}</h3>
                    <p className="app-description">{app.description}</p>
                    <div className="app-links">
                      <span className={`btn btn-store ${isIos ? 'btn-appstore' : 'btn-playstore'}`}>
                        {isIos ? 'App Store' : 'Google Play'}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="section tech-skills reveal" ref={addToRefs}>
        <div className="container-wide">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <div className="skill-header-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-years">{skill.years}</span>
                  </div>
                  <span className={`skill-tag ${skill.tagColor}`}>{skill.tag}</span>
                </div>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-chips">
                  {skill.chips.map((chip, i) => (
                    <span key={i} className="skill-chip">{chip}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section achievements-section reveal" ref={addToRefs}>
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <img src={imgGold} alt="Gold Medal" className="achievement-medal" />
              <div className="achievement-info">
                <span className="achievement-title">Gold Medal</span>
                <span className="achievement-event">VADA Open League 2025</span>
              </div>
            </div>
            <div className="achievement-card">
              <img src={imgSliver} alt="Silver Medal" className="achievement-medal" />
              <div className="achievement-info">
                <span className="achievement-title">Silver Medal</span>
                <span className="achievement-event">VINASA Football Championship 2025</span>
              </div>
            </div>
            <div className="achievement-card">
              <img src={imgSliver} alt="Silver Medal" className="achievement-medal" />
              <div className="achievement-info">
                <span className="achievement-title">Silver Medal</span>
                <span className="achievement-event">VGDA Football League 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section reveal" ref={addToRefs}>
        <div className="container">
          <div className="contact-layout">
            <div className="contact-left">
              <span className="contact-eyebrow">Get In Touch</span>
              <h2 className="contact-title">Ready for a<br />New Opportunity</h2>
              <p className="contact-desc">I'm open to new collaborations, freelance projects, or full-time roles. Whether you have an idea or just want to say hi — feel free to reach out.</p>
            </div>
            <div className="contact-right">
              <a href="mailto:cuongkv.it@gmail.com" className="contact-card-item">
                <span className="contact-card-icon" style={{ background: 'rgba(239,68,68,0.1)' }}>
                  <img src={icMail} alt="Email" width="22" height="22" style={{ objectFit: 'contain' }} />
                </span>
                <div className="contact-card-info">
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">cuongkv.it@gmail.com</span>
                </div>
              </a>
              <a href="tel:+840367031430" className="contact-card-item">
                <span className="contact-card-icon" style={{ background: 'rgba(59,130,246,0.1)' }}>
                  <img src={icPhone} alt="Phone" width="22" height="22" style={{ objectFit: 'contain' }} />
                </span>
                <div className="contact-card-info">
                  <span className="contact-card-label">Phone</span>
                  <span className="contact-card-value">0367031430</span>
                </div>
              </a>
              <a href="https://www.facebook.com/kieucuong2110/" target="_blank" rel="noopener noreferrer" className="contact-card-item">
                <span className="contact-card-icon" style={{ background: 'rgba(99,102,241,0.1)' }}>
                  <img src={icFb} alt="Facebook" width="22" height="22" style={{ objectFit: 'contain' }} />
                </span>
                <div className="contact-card-info">
                  <span className="contact-card-label">Facebook</span>
                  <span className="contact-card-value">facebook.com/kieucuong2110</span>
                </div>
              </a>
              <a href="https://maps.app.goo.gl/gVFRfDxwQvWXk4tRA" target="_blank" rel="noopener noreferrer" className="contact-card-item">
                <span className="contact-card-icon" style={{ background: 'rgba(16,185,129,0.1)' }}>
                  <img src={icAddress} alt="Address" width="22" height="22" style={{ objectFit: 'contain' }} />
                </span>
                <div className="contact-card-info">
                  <span className="contact-card-label">Address</span>
                  <span className="contact-card-value">72 P. Miếu Đầm, Từ Liêm, Hà Nội</span>
                </div>
              </a>
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
      <HomePage />
    </div>
  );
}

export default App;

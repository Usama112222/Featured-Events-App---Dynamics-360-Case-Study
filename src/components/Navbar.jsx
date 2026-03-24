import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background on scroll
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'events', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-3'}`}>
      <div className="container">
        {/* Logo */}
        <a 
          className="navbar-brand fw-bold fs-3" 
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          style={{ 
            color: scrolled ? '#1e4663' : 'white',
            transition: 'color 0.3s'
          }}
        >
          <i className="bi bi-calendar2-heart-fill me-2" style={{ color: '#ff6b6b' }}></i>
          EventHub
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ outline: 'none' }}
        >
          <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-2`} style={{ color: scrolled ? '#1e4663' : 'white' }}></i>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <button 
                className={`nav-link fw-semibold ${activeSection === 'home' ? 'active' : ''}`} 
                onClick={() => scrollToSection('home')}
                style={{ 
                  color: scrolled ? '#4a5568' : 'white',
                  transition: 'color 0.3s',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff6b6b'}
                onMouseLeave={(e) => e.target.style.color = scrolled ? '#4a5568' : 'white'}
              >
                Home
                {activeSection === 'home' && (
                  <span className="active-indicator"></span>
                )}
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link fw-semibold ${activeSection === 'events' ? 'active' : ''}`} 
                onClick={() => scrollToSection('events')}
                style={{ 
                  color: scrolled ? '#4a5568' : 'white',
                  transition: 'color 0.3s',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff6b6b'}
                onMouseLeave={(e) => e.target.style.color = scrolled ? '#4a5568' : 'white'}
              >
                Events
                {activeSection === 'events' && (
                  <span className="active-indicator"></span>
                )}
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link fw-semibold ${activeSection === 'contact' ? 'active' : ''}`} 
                onClick={() => scrollToSection('contact')}
                style={{ 
                  color: scrolled ? '#4a5568' : 'white',
                  transition: 'color 0.3s',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff6b6b'}
                onMouseLeave={(e) => e.target.style.color = scrolled ? '#4a5568' : 'white'}
              >
                Contact
                {activeSection === 'contact' && (
                  <span className="active-indicator"></span>
                )}
              </button>
            </li>
          </ul>
          
          {/* CTA Button */}
          <div className="ms-lg-3">
            <button 
              className="btn rounded-pill px-4 py-2 fw-semibold"
              style={{
                background: scrolled ? 'linear-gradient(135deg, #ff6b6b, #ff8e8e)' : 'white',
                color: scrolled ? 'white' : '#ff6b6b',
                border: scrolled ? 'none' : '2px solid white',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 5px 15px rgba(255,107,107,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
              onClick={() => scrollToSection('events')}
            >
              <i className="bi bi-ticket-perforated me-2"></i>
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
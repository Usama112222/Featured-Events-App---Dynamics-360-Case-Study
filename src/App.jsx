import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Events />
      
      {/* Contact Section */}
      <footer id="contact" className="py-5" style={{ backgroundColor: '#0a2b3e' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h4 className="text-white mb-3 fw-bold">
                <i className="bi bi-calendar2-heart-fill me-2" style={{ color: '#ff6b6b' }}></i>
                EventHub
              </h4>
              <p className="text-white-50 mb-3">Your ultimate destination for discovering amazing local events and experiences.</p>
              <div className="d-flex gap-3">
                <a href="#" className="text-white-50 text-decoration-none fs-5"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white-50 text-decoration-none fs-5"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-white-50 text-decoration-none fs-5"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white-50 text-decoration-none fs-5"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            
            <div className="col-md-2">
              <h6 className="text-white fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
                <li className="mb-2"><a href="#events" className="text-white-50 text-decoration-none">Events</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">How It Works</a></li>
                <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Blog</a></li>
              </ul>
            </div>
            
            <div className="col-md-3">
              <h6 className="text-white fw-bold mb-3">Contact Info</h6>
              <ul className="list-unstyled">
                <li className="mb-2 text-white-50">
                  <i className="bi bi-envelope me-2"></i> hello@eventhub.com
                </li>
                <li className="mb-2 text-white-50">
                  <i className="bi bi-phone me-2"></i> +1 (555) 123-4567
                </li>
                <li className="mb-2 text-white-50">
                  <i className="bi bi-map me-2"></i> 123 Event Street, NYC
                </li>
              </ul>
            </div>
            
            <div className="col-md-3">
              <h6 className="text-white fw-bold mb-3">Newsletter</h6>
              <p className="text-white-50 small mb-3">Get the latest events straight to your inbox!</p>
              <div className="input-group">
                <input type="email" className="form-control rounded-start-pill" placeholder="Your email" />
                <button className="btn px-4 rounded-end-pill" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white' }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <hr className="mt-4 opacity-25" />
          
          <div className="text-center">
            <p className="text-white-50 small mb-0">
              © 2025 EventHub. All rights reserved. | Made with <i className="bi bi-suit-heart-fill text-danger"></i> for the community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
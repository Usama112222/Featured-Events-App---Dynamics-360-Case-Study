import React from 'react';

const Hero = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0'
    }}>
      {/* Animated background shapes */}
      <div className="position-absolute w-100 h-100" style={{ overflow: 'hidden' }}>
        <div className="position-absolute" style={{ top: '10%', left: '5%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
        <div className="position-absolute" style={{ bottom: '10%', right: '5%', width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
        <div className="position-absolute" style={{ top: '50%', left: '50%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', transform: 'translate(-50%, -50%)' }}></div>
      </div>
      
      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="mb-4">
              <span className="badge bg-light text-dark px-4 py-2 rounded-pill fs-6 mb-3">
                <i className="bi bi-star-fill text-warning me-1"></i> 500+ Events This Month
              </span>
            </div>
            <h1 className="display-3 fw-bold mb-4" style={{ color: 'white' }}>
              Discover Events <span style={{ color: '#ffd93d' }}>Near You</span>
            </h1>
            <p className="lead mb-4 opacity-90" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.95)' }}>
              Find amazing experiences, connect with your community, and create unforgettable memories.
              From concerts to workshops, we've got you covered!
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <button 
                className="btn btn-light px-5 py-3 rounded-pill fw-semibold shadow-lg"
                onClick={scrollToEvents}
              >
                Explore Events <i className="bi bi-arrow-right ms-2"></i>
              </button>
              <button className="btn btn-outline-light px-5 py-3 rounded-pill fw-semibold">
                <i className="bi bi-calendar-plus me-2"></i>
                Host an Event
              </button>
            </div>
            
            {/* Stats */}
            <div className="row mt-5 pt-4">
              <div className="col-md-4 mb-3">
                <h3 className="text-white fw-bold">500+</h3>
                <p className="text-white-50">Events Monthly</p>
              </div>
              <div className="col-md-4 mb-3">
                <h3 className="text-white fw-bold">10K+</h3>
                <p className="text-white-50">Happy Attendees</p>
              </div>
              <div className="col-md-4 mb-3">
                <h3 className="text-white fw-bold">50+</h3>
                <p className="text-white-50">Cities Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
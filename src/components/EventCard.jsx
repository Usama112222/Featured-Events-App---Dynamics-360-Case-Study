import React, { useState } from 'react';

const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleRegister = () => {
    alert(`✅ Successfully registered for: ${event.name}\n\nWe'll send you event details and reminders via email!`);
  };

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div 
        className="card h-100 border-0 shadow-sm overflow-hidden"
        style={{ 
          borderRadius: '20px',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: isHovered ? '0 20px 35px -12px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.08)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Event Image */}
        <div className="position-relative" style={{ height: '220px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
          <img 
            src={event.image} 
            alt={event.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x500/667eea/ffffff?text=' + encodeURIComponent(event.name);
            }}
          />
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge bg-danger rounded-pill px-3 py-2">
              <i className="bi bi-fire me-1"></i> Featured
            </span>
          </div>
          <div className="position-absolute bottom-0 start-0 m-3">
            <span className="badge bg-dark bg-opacity-75 rounded-pill px-3 py-2">
              {event.price}
            </span>
          </div>
        </div>
        
        <div className="card-body p-4">
          <h5 className="card-title fw-bold mb-2" style={{ fontSize: '1.25rem', color: '#2d3748' }}>
            {event.name}
          </h5>
          
          {/* Date & Time */}
          <div className="d-flex align-items-center mb-2 text-muted">
            <i className="bi bi-calendar3 me-2" style={{ color: '#667eea' }}></i>
            <small className="fw-semibold">{event.date}</small>
            <span className="mx-2">•</span>
            <i className="bi bi-clock me-1"></i>
            <small>{event.time}</small>
          </div>
          
          {/* Location */}
          <div className="d-flex align-items-center mb-3 text-muted">
            <i className="bi bi-geo-alt-fill me-2" style={{ color: '#f56565' }}></i>
            <small>{event.location}</small>
          </div>
          
          {/* Description */}
          <p className="card-text mb-4" style={{ fontSize: '0.9rem', color: '#718096', lineHeight: '1.5' }}>
            {event.description}
          </p>
          
          {/* Tags */}
          <div className="mb-3">
            <span className="badge bg-light text-dark me-2 px-3 py-2 rounded-pill">
              <i className="bi bi-tag me-1"></i> {event.category}
            </span>
          </div>
        </div>
        
        <div className="card-footer bg-transparent border-0 pb-4 px-4 pt-0">
          <button 
            className="btn w-100 text-white fw-semibold rounded-pill py-2"
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              transition: 'transform 0.2s',
              border: 'none'
            }}
            onClick={handleRegister}
          >
            Register Now <i className="bi bi-chevron-right ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
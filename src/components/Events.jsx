import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';

// Complete event data
const eventsData = [
  {
    id: 1,
    name: "Open Air Art Fest",
    date: "Sat, April 12, 2025",
    time: "10:00 AM – 6:00 PM",
    location: "Downtown Art Plaza, New York, NY",
    description: "Live murals, local artists, food trucks, and interactive workshops for all ages.",
    category: "art",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&h=500&fit=crop",
    price: "Free"
  },
  {
    id: 2,
    name: "Electronic Music Night",
    date: "Fri, April 18, 2025",
    time: "8:00 PM – 1:00 AM",
    location: "Neptune Warehouse, Brooklyn, NY",
    description: "DJ sets, immersive visuals, and emerging electronic producers. 18+ event.",
    category: "music",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=500&fit=crop",
    price: "$25 - $40"
  },
  {
    id: 3,
    name: "Urban Foodie Market",
    date: "Sun, April 27, 2025",
    time: "11:00 AM – 7:00 PM",
    location: "Chelsea Market Square, Manhattan, NY",
    description: "50+ local vendors, international cuisines, cooking demos, and live chef battles.",
    category: "food",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop",
    price: "Free Entry"
  },
  {
    id: 4,
    name: "Tech Startup Summit",
    date: "Wed, May 7, 2025",
    time: "9:00 AM – 6:00 PM",
    location: "Innovation Hub, Silicon Valley, CA",
    description: "Networking, keynote speakers from top VCs, and pitch competition.",
    category: "tech",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    price: "$149 - $299"
  },
  {
    id: 5,
    name: "Wellness & Yoga Retreat",
    date: "Sat, May 17, 2025",
    time: "8:00 AM – 12:00 PM",
    location: "Central Park Great Lawn, NYC",
    description: "Morning yoga sessions, meditation workshops, and healthy breakfast bowls.",
    category: "wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
    price: "$15 Donation"
  }
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsData);
      setFilteredEvents(eventsData);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    let filtered = events;
    
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    
    setFilteredEvents(filtered);
  }, [searchTerm, selectedCategory, events]);

  const categories = ['all', 'art', 'music', 'food', 'tech', 'wellness'];
  const categoryNames = {
    all: 'All Events',
    art: '🎨 Art',
    music: '🎧 Music',
    food: '🍔 Food',
    tech: '💻 Tech',
    wellness: '🧘 Wellness'
  };

  return (
    <section id="events" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-4">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#2d3748' }}>
              Featured Events
            </h2>
            <div className="mx-auto mb-3" style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #667eea, #764ba2)', borderRadius: '2px' }}></div>
            <p className="text-muted fs-5">
              Discover the most exciting experiences happening near you
            </p>
          </div>
        </div>

        <div className="row mb-5 justify-content-center">
          <div className="col-md-10">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <div className="row g-3">
                <div className="col-md-7">
                  <div className="position-relative">
                    <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                    <input
                      type="text"
                      className="form-control rounded-pill py-3 ps-5 pe-5"
                      placeholder="Search events by name, description, or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                      <button
                        className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-3 text-muted"
                        onClick={() => setSearchTerm('')}
                        style={{ textDecoration: 'none', padding: 0 }}
                      >
                        <i className="bi bi-x-circle-fill"></i>
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="col-md-5">
                  <select
                    className="form-select rounded-pill py-3 px-4"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{categoryNames[cat]}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status" style={{ width: '4rem', height: '4rem' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-4 text-muted">Loading amazing events for you...</p>
          </div>
        ) : (
          <div className="row">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
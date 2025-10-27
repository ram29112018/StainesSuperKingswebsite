import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header with Logo */}
      <header className="header">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-text">SSK</span>
          </div>
          <h1 className="team-name">Staines Super Kings</h1>
        </div>
        <p className="tagline">Excellence in Cricket</p>
      </header>

      {/* Team Info Section */}
      <section className="team-info">
        <h2>About Our Team</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>🏏 Founded</h3>
            <p>Established with passion and dedication to cricket excellence</p>
          </div>
          <div className="info-card">
            <h3>🏆 Mission</h3>
            <p>To promote cricket and develop talented players in the community</p>
          </div>
          <div className="info-card">
            <h3>⭐ Values</h3>
            <p>Teamwork, Sportsmanship, Excellence, and Community Spirit</p>
          </div>
          <div className="info-card">
            <h3>🎯 Vision</h3>
            <p>To become a leading cricket team recognized for skill and integrity</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>info@stainessuperkings.com</p>
          </div>
          <div className="contact-item">
            <h3>📱 Phone</h3>
            <p>+44 (0) 1234 567890</p>
          </div>
          <div className="contact-item">
            <h3>📍 Location</h3>
            <p>Staines-upon-Thames, Surrey, UK</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Staines Super Kings. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

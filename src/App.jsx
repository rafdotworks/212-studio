import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const rootStyles = {
  bgColor: '#F4F3F0',
  textColor: '#1A1A1A',
  textSubtle: '#666666',
  fontMain: '"Helvetica Neue", "Helvetica", "Arial", sans-serif',
  spacingUnit: '4px',
  colLeftWidth: '240px'
};

const Layout = ({ children }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `${rootStyles.colLeftWidth} 1fr`,
      minHeight: '100vh',
      padding: '40px',
      gap: '60px'
    }} className="layout-grid">
      <Navigation />
      {children}
    </div>
  );
};

const Navigation = () => {
  const navigate = useNavigate();
  
  return (
    <aside style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontSize: '14px'
    }} className="nav-col">
      <div style={{
        position: 'sticky',
        top: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        <div style={{
          fontWeight: '500',
          letterSpacing: '-0.02em',
          marginBottom: '20px'
        }} className="brand">212 Studio</div>
        
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }} className="nav-list">
          <li className="nav-item">
            <Link to="/" style={{
              color: rootStyles.textColor,
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              paddingBottom: '1px',
              transition: 'opacity 0.2s ease, border-color 0.2s ease'
            }}>Index</Link>
          </li>
          <li className="nav-item">
            <Link to="/information" style={{
              color: rootStyles.textColor,
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              paddingBottom: '1px',
              transition: 'opacity 0.2s ease, border-color 0.2s ease'
            }}>Information</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" style={{
              color: rootStyles.textColor,
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              paddingBottom: '1px',
              transition: 'opacity 0.2s ease, border-color 0.2s ease'
            }}>Contact</Link>
          </li>
        </ul>
      </div>

      <div style={{
        position: 'fixed',
        bottom: '40px',
        fontSize: '13px',
        color: rootStyles.textSubtle,
        lineHeight: '1.5',
        maxWidth: '180px'
      }} className="meta-block">
        <p>2026<br />
        Lisbon — London<br />
        Independent</p>
        <br />
        <p style={{ opacity: '0.5' }}>Updated February 2026</p>
      </div>
    </aside>
  );
};

const IndexRow = ({ title, meta, year, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        padding: '6px 0',
        borderBottom: '1px solid transparent',
        alignItems: 'baseline',
        transition: 'opacity 0.2s',
        opacity: isHovered ? '0.7' : '1',
        cursor: 'pointer'
      }}
      className="index-row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div style={{ fontWeight: '400' }} className="row-title">{title}</div>
      <div style={{ color: rootStyles.textSubtle, fontSize: '13px' }} className="row-meta">{meta}</div>
      <div style={{ color: rootStyles.textSubtle, fontSize: '13px', textAlign: 'right' }} className="row-meta align-right">{year}</div>
    </div>
  );
};

const HomePage = () => {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '80px',
      maxWidth: '900px'
    }} className="content-col">
      <section>
        <h1 style={{
          fontSize: '24px',
          lineHeight: '1.3',
          letterSpacing: '-0.02em',
          fontWeight: '400',
          maxWidth: '700px',
          marginBottom: '32px'
        }} className="hero-text">
          212 Studio designs environments where space, systems, and people align.
        </h1>
        <p style={{
          fontSize: '16px',
          lineHeight: '1.5',
          letterSpacing: '-0.01em',
          maxWidth: '600px',
          color: rootStyles.textSubtle
        }} className="intro-text">
          We work across physical spaces, digital interfaces, and strategic systems. Our practice centers on quiet structures and purposeful restraint—design that holds up to use and respects context.
        </p>
      </section>

      <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '100px'
      }} className="projects-stack">
        <div className="project-block" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" style={{
            backgroundColor: '#e5e5e5',
            width: '100%',
            height: 'auto',
            display: 'block',
            mixBlendMode: 'multiply'
          }}>
            <rect x="0" y="0" width="900" height="600" fill="#E8E6E1" />
            <rect x="150" y="120" width="600" height="360" fill="#D4D2CD" />
            <rect x="200" y="170" width="180" height="260" fill="#2A2A2A" />
            <rect x="420" y="170" width="280" height="120" fill="#B8B6B1" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '400', letterSpacing: '-0.01em' }}>Atelier Residence</h3>
            <div style={{ fontSize: '13px', color: rootStyles.textSubtle, display: 'flex', gap: '20px' }}>
              <span>Spatial Design</span>
              <span>2026</span>
            </div>
          </div>
          <p style={{ 
            fontSize: '14px', 
            lineHeight: '1.6', 
            color: rootStyles.textColor,
            maxWidth: '600px',
            marginTop: '8px'
          }}>
            A residential studio space where work and living align. The design emphasizes natural light, material honesty, and spatial clarity—creating an environment that supports both focused practice and daily life.
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '12px',
            marginTop: '16px'
          }}>
            <svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" style={{
              backgroundColor: '#e5e5e5',
              width: '100%',
              height: 'auto',
              display: 'block',
              mixBlendMode: 'multiply'
            }}>
              <rect x="0" y="0" width="440" height="320" fill="#EAE8E3" />
              <rect x="40" y="40" width="360" height="240" fill="#2A2A2A" />
              <rect x="80" y="80" width="120" height="160" fill="#D4D2CD" />
            </svg>
            <svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" style={{
              backgroundColor: '#e5e5e5',
              width: '100%',
              height: 'auto',
              display: 'block',
              mixBlendMode: 'multiply'
            }}>
              <rect x="0" y="0" width="440" height="320" fill="#E6E4DF" />
              <rect x="60" y="60" width="320" height="200" fill="#F4F3F0" />
              <rect x="100" y="100" width="240" height="120" fill="#B8B6B1" />
            </svg>
          </div>
          <div style={{ fontSize: '12px', color: rootStyles.textSubtle, marginTop: '8px' }}>
            Detail views showing material transitions and spatial relationships.
          </div>
        </div>

        <div className="project-block" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" style={{
            backgroundColor: '#e5e5e5',
            width: '100%',
            height: 'auto',
            display: 'block',
            mixBlendMode: 'multiply'
          }}>
            <rect x="0" y="0" width="900" height="600" fill="#E3E5E8" />
            <rect x="80" y="100" width="740" height="400" fill="#2A2A2A" />
            <rect x="120" y="140" width="660" height="50" fill="#F4F3F0" />
            <rect x="120" y="210" width="200" height="120" fill="#C8CAD0" />
            <rect x="340" y="210" width="200" height="120" fill="#C8CAD0" />
            <rect x="560" y="210" width="200" height="120" fill="#C8CAD0" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '400', letterSpacing: '-0.01em' }}>Municipal Systems Interface</h3>
            <div style={{ fontSize: '13px', color: rootStyles.textSubtle, display: 'flex', gap: '20px' }}>
              <span>Digital Platform</span>
              <span>2025</span>
            </div>
          </div>
          <p style={{ 
            fontSize: '14px', 
            lineHeight: '1.6', 
            color: rootStyles.textColor,
            maxWidth: '600px',
            marginTop: '8px'
          }}>
            Digital infrastructure for civic services. The interface prioritizes clarity and accessibility, organizing complex administrative workflows into coherent systems that serve both staff and residents.
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '12px',
            marginTop: '16px'
          }}>
            <svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" style={{
              backgroundColor: '#e5e5e5',
              width: '100%',
              height: 'auto',
              display: 'block',
              mixBlendMode: 'multiply'
            }}>
              <rect x="0" y="0" width="440" height="320" fill="#E5E7EA" />
              <rect x="30" y="30" width="380" height="260" fill="#2A2A2A" />
              <rect x="60" y="60" width="320" height="40" fill="#F4F3F0" />
              <rect x="60" y="120" width="100" height="140" fill="#C8CAD0" />
              <rect x="180" y="120" width="200" height="60" fill="#D6D4D0" />
            </svg>
            <svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" style={{
              backgroundColor: '#e5e5e5',
              width: '100%',
              height: 'auto',
              display: 'block',
              mixBlendMode: 'multiply'
            }}>
              <rect x="0" y="0" width="440" height="320" fill="#E3E5E8" />
              <rect x="40" y="40" width="360" height="240" fill="#F4F3F0" />
              <rect x="70" y="70" width="300" height="180" fill="#B8B6B1" />
              <rect x="100" y="100" width="120" height="40" fill="#2A2A2A" />
            </svg>
          </div>
          <div style={{ fontSize: '12px', color: rootStyles.textSubtle, marginTop: '8px' }}>
            Interface studies showing navigation hierarchy and modular layouts.
          </div>
        </div>

        <div className="project-block" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" style={{
            backgroundColor: '#e5e5e5',
            width: '100%',
            height: 'auto',
            display: 'block',
            mixBlendMode: 'multiply'
          }}>
            <rect x="0" y="0" width="900" height="600" fill="#EAE8E3" />
            <rect x="100" y="80" width="700" height="440" fill="#F4F3F0" />
            <rect x="140" y="120" width="280" height="360" fill="#2A2A2A" />
            <rect x="460" y="120" width="300" height="180" fill="#D6D4D0" />
            <rect x="460" y="320" width="300" height="160" fill="#B8B6B1" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '400', letterSpacing: '-0.01em' }}>Archive System</h3>
            <div style={{ fontSize: '13px', color: rootStyles.textSubtle, display: 'flex', gap: '20px' }}>
              <span>Information Design</span>
              <span>2025</span>
            </div>
          </div>
          <p style={{ 
            fontSize: '14px', 
            lineHeight: '1.6', 
            color: rootStyles.textColor,
            maxWidth: '600px',
            marginTop: '8px'
          }}>
            A cataloging framework for institutional collections. The system balances flexibility with structure, allowing diverse materials to be organized, retrieved, and understood through consistent principles.
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '12px',
            marginTop: '16px'
          }}>
            <svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" style={{
              backgroundColor: '#e5e5e5',
              width: '100%',
              height: 'auto',
              display: 'block',
              mixBlendMode: 'multiply'
            }}>
              <rect x="0" y="0" width="440" height="320" fill="#EAE8E3" />
              <rect x="40" y="40" width="360" height="240" fill="#F4F3F0" />
              <rect x="60" y="60" width="160" height="200" fill="#2A2A2A" />
              <rect x="240" y="60" width="140" height="90" fill="#D6D4D0" />
              <rect x="240" y="170" width="140" height="90" fill="#B8B6B1" />
            </svg>
            <svg viewBox="0 0 440 320" xmlns="http://www.w3.org/2000/svg" style={{
              backgroundColor: '#e5e5e5',
              width: '100%',
              height: 'auto',
              display: 'block',
              mixBlendMode: 'multiply'
            }}>
              <rect x="0" y="0" width="440" height="320" fill="#E8E6E1" />
              <rect x="50" y="50" width="340" height="220" fill="#2A2A2A" />
              <rect x="80" y="80" width="280" height="30" fill="#F4F3F0" />
              <rect x="80" y="130" width="280" height="30" fill="#D4D2CD" />
              <rect x="80" y="180" width="280" height="30" fill="#B8B6B1" />
            </svg>
          </div>
          <div style={{ fontSize: '12px', color: rootStyles.textSubtle, marginTop: '8px' }}>
            Taxonomy structures and entry templates for standardized documentation.
          </div>
        </div>
      </section>
      
      <footer style={{
        marginTop: '60px',
        fontSize: '13px',
        color: rootStyles.textSubtle
      }}>
        <p>© 212 Studio. All rights reserved.</p>
      </footer>
    </main>
  );
};

const InformationPage = () => {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '80px',
      maxWidth: '900px'
    }} className="content-col">
      <section>
        <p style={{
          fontSize: '18px',
          lineHeight: '1.35',
          letterSpacing: '-0.01em',
          maxWidth: '600px',
          marginBottom: '40px'
        }} className="intro-text">
          212 Studio is a design practice. We design environments where space, systems, and people align—working across physical spaces, digital interfaces, and strategic systems.
        </p>
      </section>

      <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }} className="index-section">
        <span style={{
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: rootStyles.textSubtle,
          marginBottom: '12px',
          display: 'block'
        }} className="section-label">Manifesto</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          fontSize: '15px',
          lineHeight: '1.65',
          maxWidth: '650px'
        }}>
          <p>We design environments.</p>
          <p>Some are physical.<br/>
          Some are digital.<br/>
          All are lived in.</p>
          <p>We believe design is not decoration.<br/>
          It is the quiet alignment of space, function, and feeling.</p>
          <p>We work where people spend time.<br/>
          Homes. Studios. Places of work. Interfaces. Brands. Systems.<br/>
          Where attention, movement, and presence matter.</p>
          <p>Our practice is grounded in craft.<br/>
          In materials, light, proportion, and rhythm.<br/>
          In interfaces, flows, constraints, and clarity.</p>
          <p>We do not separate physical and digital thinking.<br/>
          We apply the same principles to both:</p>
          <ul style={{ listStyle: 'none', paddingLeft: '20px', margin: '8px 0' }}>
            <li>• Intent before execution</li>
            <li>• Simplicity over noise</li>
            <li>• Coherence over novelty</li>
          </ul>
          <p>We value restraint.<br/>
          What is left out matters as much as what is designed.</p>
          <p>We collaborate closely.<br/>
          Often on-site.<br/>
          Often over time.<br/>
          Always with care for context and reality.</p>
          <p>212 Studio exists to make spaces and systems feel considered, calm, and durable.<br/>
          Design that holds up to use.<br/>
          Design that respects people.<br/>
          Design that lasts.</p>
        </div>
      </section>

      <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }} className="index-section">
        <span style={{
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: rootStyles.textSubtle,
          marginBottom: '12px',
          display: 'block'
        }} className="section-label">Practice</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <p>212 Studio is Marianne Ventre and Raf V.</p>
        
        </div>
      </section>

      <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }} className="index-section">
        <span style={{
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: rootStyles.textSubtle,
          marginBottom: '12px',
          display: 'block'
        }} className="section-label">Approach</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <p>— Spatial Design & Architecture</p>
          <p>— Digital Interfaces & Systems</p>
          <p>— Brand Identity & Strategy</p>
          <p>— Information Architecture</p>
          <p>— Material & Environmental Design</p>
        </div>
      </section>

      <footer style={{
        marginTop: '60px',
        fontSize: '13px',
        color: rootStyles.textSubtle
      }}>
        <p>© 212 Studio. All rights reserved.</p>
      </footer>
    </main>
  );
};

const ContactPage = () => {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '80px',
      maxWidth: '900px'
    }} className="content-col">
      <section>
        <p style={{
          fontSize: '18px',
          lineHeight: '1.35',
          letterSpacing: '-0.01em',
          maxWidth: '600px',
          marginBottom: '40px'
        }} className="intro-text">
          We're currently accepting new projects for 2026. Get in touch to discuss collaborations.
        </p>
      </section>

      <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }} className="index-section">
        <span style={{
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: rootStyles.textSubtle,
          marginBottom: '12px',
          display: 'block'
        }} className="section-label">Contact</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <p><a href="mailto:raf@212studio.works" style={{ color: rootStyles.textColor, textDecoration: 'underline' }}>raf@212studio.works</a></p>
        </div>
      </section>

      <footer style={{
        marginTop: '60px',
        fontSize: '13px',
        color: rootStyles.textSubtle
      }}>
        <p>© 212 Studio. All rights reserved.</p>
      </footer>
    </main>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        background-color: ${rootStyles.bgColor};
        color: ${rootStyles.textColor};
        font-family: ${rootStyles.fontMain};
        font-size: 14px;
        line-height: 1.4;
        cursor: default;
      }

      .nav-item a:hover {
        border-bottom-color: ${rootStyles.textColor} !important;
        opacity: 0.8;
      }

      .editorial-img:hover {
        filter: grayscale(0%) !important;
      }

      @media (max-width: 768px) {
        .layout-grid {
          grid-template-columns: 1fr !important;
          padding: 20px !important;
          gap: 40px !important;
        }

        .nav-col {
          position: relative !important;
          top: 0 !important;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          padding-bottom: 20px;
        }

        .index-row {
          grid-template-columns: 1fr auto !important;
          gap: 10px;
        }
        
        .row-meta:nth-child(2) {
          display: none !important;
        }
        
        .intro-text {
          font-size: 16px !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/information" element={<Layout><InformationPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;

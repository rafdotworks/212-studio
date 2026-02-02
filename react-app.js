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
      position: 'sticky',
      top: '40px',
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      fontSize: '14px'
    }} className="nav-col">
      <div style={{
        fontWeight: '500',
        letterSpacing: '-0.02em',
        marginBottom: '20px'
      }} className="brand">Studio Värn</div>
      
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
          <Link to="/selected-works" style={{
            color: rootStyles.textColor,
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            paddingBottom: '1px',
            transition: 'opacity 0.2s ease, border-color 0.2s ease'
          }}>Selected Works</Link>
        </li>
        <li className="nav-item">
          <Link to="/atelier" style={{
            color: rootStyles.textColor,
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            paddingBottom: '1px',
            transition: 'opacity 0.2s ease, border-color 0.2s ease'
          }}>Atelier</Link>
        </li>
        <li className="nav-item">
          <Link to="/publications" style={{
            color: rootStyles.textColor,
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            paddingBottom: '1px',
            transition: 'opacity 0.2s ease, border-color 0.2s ease'
          }}>Publications</Link>
        </li>
      </ul>

      <ul style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        marginTop: '20px'
      }} className="nav-list">
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

      <div style={{
        marginTop: '60px',
        fontSize: '13px',
        color: rootStyles.textSubtle,
        lineHeight: '1.5',
        maxWidth: '180px'
      }} className="meta-block">
        <p>Est. 2019<br />
        Berlin — Paris<br />
        Currently independent.</p>
        <br />
        <p style={{ opacity: '0.5' }}>Updated Autumn 2023</p>
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
        <p style={{
          fontSize: '18px',
          lineHeight: '1.35',
          letterSpacing: '-0.01em',
          maxWidth: '600px',
          marginBottom: '40px'
        }} className="intro-text">
          A design practice focused on <span style={{ fontFamily: '"Georgia", serif', fontStyle: 'italic' }} className="serif-italic">quiet structures</span> and printed matter. We build editorial systems for art institutions, architects, and independent publishers.
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
        }} className="section-label">Selected Works (2021—2023)</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0'
        }} className="index-list">
          <IndexRow title="Kunsthalle Zürich" meta="Identity System" year="2023" />
          <IndexRow title="Architecture for Non-Humans" meta="Exhibition Design" year="2023" />
          <IndexRow title="Review of Open Spaces" meta="Publication" year="2022" />
          <IndexRow title="Mono & Type Foundry" meta="Web Development" year="2022" />
          <IndexRow title="Object 04: The Chair" meta="Product Photography" year="2021" />
        </div>
      </section>

      <section style={{
        width: '100%',
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }} className="editorial-image-block">
        <svg className="editorial-img" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" style={{
          backgroundColor: '#e5e5e5',
          width: '100%',
          height: 'auto',
          display: 'block',
          filter: 'grayscale(100%)',
          transition: 'filter 0.4s ease',
          mixBlendMode: 'multiply'
        }}>
          <rect x="0" y="0" width="800" height="500" fill="#EAE8E3" />
          <rect x="100" y="100" width="200" height="300" fill="#222" />
          <rect x="320" y="100" width="380" height="300" fill="#D6D4D0" />
          <text x="330" y="380" fontFamily="Helvetica, Arial, sans-serif" fontSize="10" fill="#666">FIG 1.0 — SPATIAL STUDY</text>
        </svg>
        <div style={{
          fontSize: '12px',
          color: rootStyles.textSubtle,
          marginTop: '4px'
        }} className="img-caption">Installation view, "Grey Matter", Berlin.</div>
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
        }} className="section-label">Archive</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0'
        }} className="index-list">
          <IndexRow title="Typographic Experiments Vol. II" meta="Research" year="2020" />
          <IndexRow title="Brutalism in Web" meta="Essay" year="2019" />
          <IndexRow title="Frowein Gallery" meta="Identity" year="2019" />
          <IndexRow title="Deep & Roll" meta="Poster Series" year="2018" />
        </div>
      </section>
      
      <footer style={{
        marginTop: '60px',
        fontSize: '13px',
        color: rootStyles.textSubtle
      }}>
        <p>© Studio Värn. All rights reserved.</p>
      </footer>
    </main>
  );
};

const SelectedWorksPage = () => {
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
          A curated selection of our recent work spanning identity systems, editorial design, and spatial interventions.
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
        }} className="section-label">Recent Projects</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0'
        }} className="index-list">
          <IndexRow title="Kunsthalle Zürich" meta="Identity System" year="2023" />
          <IndexRow title="Architecture for Non-Humans" meta="Exhibition Design" year="2023" />
          <IndexRow title="Review of Open Spaces" meta="Publication" year="2022" />
          <IndexRow title="Mono & Type Foundry" meta="Web Development" year="2022" />
          <IndexRow title="Object 04: The Chair" meta="Product Photography" year="2021" />
        </div>
      </section>

      <footer style={{
        marginTop: '60px',
        fontSize: '13px',
        color: rootStyles.textSubtle
      }}>
        <p>© Studio Värn. All rights reserved.</p>
      </footer>
    </main>
  );
};

const AtelierPage = () => {
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
          The atelier is our experimental space for <span style={{ fontFamily: '"Georgia", serif', fontStyle: 'italic' }}>exploration and research</span>. Here we develop tools, typefaces, and systems that inform our client work.
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
        }} className="section-label">Ongoing Projects</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0'
        }} className="index-list">
          <IndexRow title="Grid System Studies" meta="Research" year="2023" />
          <IndexRow title="Minimal Type Specimen" meta="Typography" year="2023" />
          <IndexRow title="Paper Archive" meta="Material Research" year="2022" />
        </div>
      </section>

      <footer style={{
        marginTop: '60px',
        fontSize: '13px',
        color: rootStyles.textSubtle
      }}>
        <p>© Studio Värn. All rights reserved.</p>
      </footer>
    </main>
  );
};

const PublicationsPage = () => {
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
          Books, essays, and printed matter designed and published by the studio.
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
        }} className="section-label">Publications</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0'
        }} className="index-list">
          <IndexRow title="Review of Open Spaces" meta="Publication" year="2022" />
          <IndexRow title="Typographic Experiments Vol. II" meta="Research" year="2020" />
          <IndexRow title="Brutalism in Web" meta="Essay" year="2019" />
        </div>
      </section>

      <footer style={{
        marginTop: '60px',
        fontSize: '13px',
        color: rootStyles.textSubtle
      }}>
        <p>© Studio Värn. All rights reserved.</p>
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
          Studio Värn is a design practice established in 2019, working between Berlin and Paris. We focus on editorial design, identity systems, and spatial interventions for cultural institutions.
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
        }} className="section-label">Services</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <p>— Identity Systems</p>
          <p>— Editorial Design</p>
          <p>— Exhibition Design</p>
          <p>— Web Development</p>
          <p>— Typography</p>
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
        }} className="section-label">Recognition</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0'
        }} className="index-list">
          <IndexRow title="Type Directors Club" meta="Typography" year="2022" />
          <IndexRow title="D&AD Awards" meta="Editorial Design" year="2021" />
        </div>
      </section>

      <footer style={{
        marginTop: '60px',
        fontSize: '13px',
        color: rootStyles.textSubtle
      }}>
        <p>© Studio Värn. All rights reserved.</p>
      </footer>
    </main>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
          We're currently accepting new projects for 2024. Get in touch to discuss collaborations.
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
        }} className="section-label">Contact Details</span>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          <p>Email: <a href="mailto:studio@varn.com" style={{ color: rootStyles.textColor, textDecoration: 'underline' }}>studio@varn.com</a></p>
          <p>Instagram: <a href="#" style={{ color: rootStyles.textColor, textDecoration: 'underline' }}>@studiovarn</a></p>
        </div>
      </section>

      <section style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        <span style={{
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: rootStyles.textSubtle,
          marginBottom: '12px',
          display: 'block'
        }} className="section-label">Send a Message</span>

        {submitted ? (
          <div style={{
            padding: '20px',
            backgroundColor: '#e8e7e3',
            fontSize: '14px',
            lineHeight: '1.6'
          }}>
            Thank you for your message. We'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '500px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="name" style={{ fontSize: '13px', color: rootStyles.textSubtle }}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  fontSize: '14px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
                  fontFamily: rootStyles.fontMain
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="email" style={{ fontSize: '13px', color: rootStyles.textSubtle }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: '10px',
                  fontSize: '14px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
                  fontFamily: rootStyles.fontMain
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="message" style={{ fontSize: '13px', color: rootStyles.textSubtle }}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{
                  padding: '10px',
                  fontSize: '14px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
                  fontFamily: rootStyles.fontMain,
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '12px 24px',
                fontSize: '14px',
                backgroundColor: rootStyles.textColor,
                color: rootStyles.bgColor,
                border: 'none',
                cursor: 'pointer',
                fontFamily: rootStyles.fontMain,
                transition: 'opacity 0.2s ease',
                alignSelf: 'flex-start'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Send Message
            </button>
          </form>
        )}
      </section>

      <footer style={{
        marginTop: '60px',
        fontSize: '13px',
        color: rootStyles.textSubtle
      }}>
        <p>© Studio Värn. All rights reserved.</p>
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
        <Route path="/selected-works" element={<Layout><SelectedWorksPage /></Layout>} />
        <Route path="/atelier" element={<Layout><AtelierPage /></Layout>} />
        <Route path="/publications" element={<Layout><PublicationsPage /></Layout>} />
        <Route path="/information" element={<Layout><InformationPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
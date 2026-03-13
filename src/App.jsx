import React, { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, NavLink, Route, Routes } from 'react-router-dom';

const rootStyles = {
  bgColor: '#F4F3F0',
  textColor: '#1A1A1A',
  textSubtle: '#666666',
  fontMain: '"Helvetica Neue", "Helvetica", "Arial", sans-serif',
  colLeftWidth: '240px'
};

const pageContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
  maxWidth: '900px',
  minWidth: 0
};

const heroHeadingStyles = {
  fontSize: '24px',
  lineHeight: '1.3',
  letterSpacing: '-0.02em',
  fontWeight: '400',
  maxWidth: '700px',
  marginBottom: '32px'
};

const introTextStyles = {
  fontSize: '16px',
  lineHeight: '1.5',
  letterSpacing: '-0.01em',
  maxWidth: '600px',
  color: rootStyles.textSubtle
};

const sectionLabelStyles = {
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: rootStyles.textSubtle,
  marginBottom: '12px',
  display: 'block'
};

const Layout = ({ children }) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div aria-hidden="true" className="ambient-layer">
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="ambient-haze" />
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `${rootStyles.colLeftWidth} 1fr`,
          minHeight: '100vh',
          padding: '40px',
          gap: '60px',
          position: 'relative',
          zIndex: 1
        }}
        className="layout-grid"
      >
        <Navigation />
        {children}
      </div>
    </div>
  );
};

const navLinkStyles = ({ isActive }) => ({
  color: rootStyles.textColor,
  textDecoration: 'none',
  borderBottom: `1px solid ${isActive ? rootStyles.textColor : 'transparent'}`,
  paddingBottom: '1px',
  transition:
    'opacity 280ms ease, border-color 280ms ease, filter 420ms ease, transform 420ms ease'
});

const Navigation = () => {
  return (
    <aside
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '14px'
      }}
      className="nav-col"
    >
      <div
        style={{
          position: 'sticky',
          top: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        <div
          style={{
            fontWeight: '500',
            letterSpacing: '-0.02em',
            marginBottom: '20px'
          }}
          className="brand nav-fade"
        >
          212 Studio
        </div>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}
          className="nav-list"
        >
          <li className="nav-item nav-fade">
            <NavLink to="/information" style={navLinkStyles}>
              Information
            </NavLink>
          </li>
          <li className="nav-item nav-fade">
            <NavLink to="/manifesto" style={navLinkStyles}>
              Manifesto
            </NavLink>
          </li>
          <li className="nav-item nav-fade">
            <NavLink to="/contact" style={navLinkStyles}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: '40px',
          fontSize: '13px',
          color: rootStyles.textSubtle,
          lineHeight: '1.5',
          maxWidth: '180px'
        }}
        className="meta-block nav-fade"
      >
        <p>
          2026
          <br />
          Toronto - Lisbon
          <br />
          Independent
        </p>
        <br />
        <p style={{ opacity: '0.5' }}>Updated March 2026</p>
      </div>
    </aside>
  );
};

const SiteFooter = () => {
  return (
    <footer
      style={{
        marginTop: '60px',
        fontSize: '13px',
        color: rootStyles.textSubtle
      }}
    >
      <p>© 212 Studio. All rights reserved.</p>
    </footer>
  );
};

const ManifestoContent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        fontSize: '15px',
        lineHeight: '1.65',
        maxWidth: '650px'
      }}
    >
      <p>We design environments.</p>
      <p>
        Some are physical.
        <br />
        Some are digital.
        <br />
        All are lived in.
      </p>
      <p>
        We believe design is not decoration.
        <br />
        It is the quiet alignment of space, function, and feeling.
      </p>
      <p>
        We work where people spend time.
        <br />
        Homes. Studios. Places of work. Interfaces. Brands. Systems.
        <br />
        Where attention, movement, and presence matter.
      </p>
      <p>
        Our practice is grounded in craft.
        <br />
        In materials, light, proportion, and rhythm.
        <br />
        In interfaces, flows, constraints, and clarity.
      </p>
      <p>
        We do not separate physical and digital thinking.
        <br />
        We apply the same principles to both:
      </p>
      <ul style={{ listStyle: 'none', paddingLeft: '20px', margin: '8px 0' }}>
        <li>• Intent before execution</li>
        <li>• Simplicity over noise</li>
        <li>• Coherence over novelty</li>
      </ul>
      <p>
        We value restraint.
        <br />
        What is left out matters as much as what is designed.
      </p>
      <p>
        We collaborate closely.
        <br />
        Often on-site.
        <br />
        Often over time.
        <br />
        Always with care for context and reality.
      </p>
      <p>
        212 Studio exists to make spaces and systems feel considered, calm, and durable.
        <br />
        Design that holds up to use.
        <br />
        Design that respects people.
        <br />
        Design that lasts.
      </p>
    </div>
  );
};

const PracticeSection = () => {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
      className="index-section"
    >
      <span style={sectionLabelStyles} className="section-label">
        Practice
      </span>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontSize: '14px',
          lineHeight: '1.6',
          maxWidth: '650px'
        }}
      >
        <p>
          212 Studio is{' '}
          <a href="https://marve.works" target="_blank" rel="noreferrer">
            Marianne Ventre
          </a>{' '}
          and{' '}
          <a href="https://raf.works" target="_blank" rel="noreferrer">
            Raf V.
          </a>
          .
        </p>
      </div>
    </section>
  );
};

const ApproachSection = () => {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
      className="index-section"
    >
      <span style={sectionLabelStyles} className="section-label">
        Approach
      </span>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontSize: '14px',
          lineHeight: '1.6'
        }}
      >
        <p>— Spatial Design &amp; Architecture</p>
        <p>— Digital Interfaces &amp; Systems</p>
        <p>— Brand Identity &amp; Strategy</p>
        <p>— Information Architecture</p>
        <p>— Material &amp; Environmental Design</p>
      </div>
    </section>
  );
};

const InformationPage = () => {
  return (
    <main style={{ ...pageContainerStyles, gap: 0 }} className="content-col">
      <section
        style={{
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          flexDirection: 'column'
        }}
        className="information-viewport"
      >
        <div>
          <h1 style={heroHeadingStyles} className="hero-text">
            212 Studio is a design practice.
          </h1>
          <p style={introTextStyles} className="intro-text">
            We design environments where space, systems, and people align, working across physical
            spaces, digital interfaces, and strategic systems.
          </p>
        </div>
        <div aria-hidden="true" style={{ flex: 1 }} className="editorial-gap" />
      </section>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
          borderTop: '1px solid rgba(26, 26, 26, 0.06)',
          paddingTop: '56px'
        }}
        className="information-lower"
      >
        <PracticeSection />
        <ApproachSection />
      </section>
      <SiteFooter />
    </main>
  );
};

const ManifestoPage = () => {
  return (
    <main style={pageContainerStyles} className="content-col">
      <section>
        <h1 style={heroHeadingStyles} className="hero-text">
          Manifesto
        </h1>
        <p style={introTextStyles} className="intro-text">
          A statement of how we work across space, systems, and lived experience. The same
          principles guide our physical, digital, and strategic work.
        </p>
      </section>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
        className="index-section"
      >
        <span style={sectionLabelStyles} className="section-label">
          Manifesto
        </span>
        <ManifestoContent />
      </section>
      <SiteFooter />
    </main>
  );
};

const ContactPage = () => {
  return (
    <main style={pageContainerStyles} className="content-col">
      <section>
        <h1 style={heroHeadingStyles} className="hero-text">
          Contact
        </h1>
        <p style={introTextStyles} className="intro-text">
          212 Studio is available for selected projects and ongoing collaborations.
        </p>
      </section>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
        className="index-section"
      >
        <span style={sectionLabelStyles} className="section-label">
          Contact
        </span>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            fontSize: '14px',
            lineHeight: '1.6'
          }}
        >
          <p>
            <a
              href="mailto:raf@raf.works"
              style={{ color: rootStyles.textColor, textDecoration: 'underline' }}
            >
              raf@raf.works
            </a>
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
};

// Preserved for direct internal review and future image work; intentionally hidden from public nav.
const HiddenIndexPage = () => {
  return (
    <main style={pageContainerStyles} className="content-col">
      <section>
        <h1 style={heroHeadingStyles} className="hero-text">
          212 Studio designs environments where space, systems, and people align.
        </h1>
        <p style={introTextStyles} className="intro-text">
          We work across physical spaces, digital interfaces, and strategic systems. Our practice
          centers on quiet structures and purposeful restraint, design that holds up to use and
          respects context.
        </p>
      </section>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '100px'
        }}
        className="projects-stack"
      >
        <div
          className="project-block"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <svg
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              backgroundColor: '#e5e5e5',
              width: '100%',
              height: 'auto',
              display: 'block',
              mixBlendMode: 'multiply'
            }}
          >
            <rect x="0" y="0" width="900" height="600" fill="#E8E6E1" />
            <rect x="150" y="120" width="600" height="360" fill="#D4D2CD" />
            <rect x="200" y="170" width="180" height="260" fill="#2A2A2A" />
            <rect x="420" y="170" width="280" height="120" fill="#B8B6B1" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '400', letterSpacing: '-0.01em' }}>
              Atelier Residence
            </h3>
            <div
              style={{
                fontSize: '13px',
                color: rootStyles.textSubtle,
                display: 'flex',
                gap: '20px'
              }}
            >
              <span>Spatial Design</span>
              <span>2026</span>
            </div>
          </div>
          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: rootStyles.textColor,
              maxWidth: '600px',
              marginTop: '8px'
            }}
          >
            A residential studio space where work and living align. The design emphasizes natural
            light, material honesty, and spatial clarity, creating an environment that supports
            both focused practice and daily life.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginTop: '16px'
            }}
          >
            <svg
              viewBox="0 0 440 320"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                backgroundColor: '#e5e5e5',
                width: '100%',
                height: 'auto',
                display: 'block',
                mixBlendMode: 'multiply'
              }}
            >
              <rect x="0" y="0" width="440" height="320" fill="#EAE8E3" />
              <rect x="40" y="40" width="360" height="240" fill="#2A2A2A" />
              <rect x="80" y="80" width="120" height="160" fill="#D4D2CD" />
            </svg>
            <svg
              viewBox="0 0 440 320"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                backgroundColor: '#e5e5e5',
                width: '100%',
                height: 'auto',
                display: 'block',
                mixBlendMode: 'multiply'
              }}
            >
              <rect x="0" y="0" width="440" height="320" fill="#E6E4DF" />
              <rect x="60" y="60" width="320" height="200" fill="#F4F3F0" />
              <rect x="100" y="100" width="240" height="120" fill="#B8B6B1" />
            </svg>
          </div>
          <div style={{ fontSize: '12px', color: rootStyles.textSubtle, marginTop: '8px' }}>
            Detail views showing material transitions and spatial relationships.
          </div>
        </div>

        <div
          className="project-block"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <svg
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              backgroundColor: '#e5e5e5',
              width: '100%',
              height: 'auto',
              display: 'block',
              mixBlendMode: 'multiply'
            }}
          >
            <rect x="0" y="0" width="900" height="600" fill="#E3E5E8" />
            <rect x="80" y="100" width="740" height="400" fill="#2A2A2A" />
            <rect x="120" y="140" width="660" height="50" fill="#F4F3F0" />
            <rect x="120" y="210" width="200" height="120" fill="#C8CAD0" />
            <rect x="340" y="210" width="200" height="120" fill="#C8CAD0" />
            <rect x="560" y="210" width="200" height="120" fill="#C8CAD0" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '400', letterSpacing: '-0.01em' }}>
              Municipal Systems Interface
            </h3>
            <div
              style={{
                fontSize: '13px',
                color: rootStyles.textSubtle,
                display: 'flex',
                gap: '20px'
              }}
            >
              <span>Digital Platform</span>
              <span>2025</span>
            </div>
          </div>
          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: rootStyles.textColor,
              maxWidth: '600px',
              marginTop: '8px'
            }}
          >
            Digital infrastructure for civic services. The interface prioritizes clarity and
            accessibility, organizing complex administrative workflows into coherent systems that
            serve both staff and residents.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginTop: '16px'
            }}
          >
            <svg
              viewBox="0 0 440 320"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                backgroundColor: '#e5e5e5',
                width: '100%',
                height: 'auto',
                display: 'block',
                mixBlendMode: 'multiply'
              }}
            >
              <rect x="0" y="0" width="440" height="320" fill="#E5E7EA" />
              <rect x="30" y="30" width="380" height="260" fill="#2A2A2A" />
              <rect x="60" y="60" width="320" height="40" fill="#F4F3F0" />
              <rect x="60" y="120" width="100" height="140" fill="#C8CAD0" />
              <rect x="180" y="120" width="200" height="60" fill="#D6D4D0" />
            </svg>
            <svg
              viewBox="0 0 440 320"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                backgroundColor: '#e5e5e5',
                width: '100%',
                height: 'auto',
                display: 'block',
                mixBlendMode: 'multiply'
              }}
            >
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

        <div
          className="project-block"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <svg
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              backgroundColor: '#e5e5e5',
              width: '100%',
              height: 'auto',
              display: 'block',
              mixBlendMode: 'multiply'
            }}
          >
            <rect x="0" y="0" width="900" height="600" fill="#EAE8E3" />
            <rect x="100" y="80" width="700" height="440" fill="#F4F3F0" />
            <rect x="140" y="120" width="280" height="360" fill="#2A2A2A" />
            <rect x="460" y="120" width="300" height="180" fill="#D6D4D0" />
            <rect x="460" y="320" width="300" height="160" fill="#B8B6B1" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '400', letterSpacing: '-0.01em' }}>
              Archive System
            </h3>
            <div
              style={{
                fontSize: '13px',
                color: rootStyles.textSubtle,
                display: 'flex',
                gap: '20px'
              }}
            >
              <span>Information Design</span>
              <span>2025</span>
            </div>
          </div>
          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.6',
              color: rootStyles.textColor,
              maxWidth: '600px',
              marginTop: '8px'
            }}
          >
            A cataloging framework for institutional collections. The system balances flexibility
            with structure, allowing diverse materials to be organized, retrieved, and understood
            through consistent principles.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginTop: '16px'
            }}
          >
            <svg
              viewBox="0 0 440 320"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                backgroundColor: '#e5e5e5',
                width: '100%',
                height: 'auto',
                display: 'block',
                mixBlendMode: 'multiply'
              }}
            >
              <rect x="0" y="0" width="440" height="320" fill="#EAE8E3" />
              <rect x="40" y="40" width="360" height="240" fill="#F4F3F0" />
              <rect x="60" y="60" width="160" height="200" fill="#2A2A2A" />
              <rect x="240" y="60" width="140" height="90" fill="#D6D4D0" />
              <rect x="240" y="170" width="140" height="90" fill="#B8B6B1" />
            </svg>
            <svg
              viewBox="0 0 440 320"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                backgroundColor: '#e5e5e5',
                width: '100%',
                height: 'auto',
                display: 'block',
                mixBlendMode: 'multiply'
              }}
            >
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

      <SiteFooter />
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

      a {
        color: inherit;
      }

      .ambient-layer {
        position: fixed;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
      }

      .ambient-orb,
      .ambient-haze {
        position: absolute;
        filter: blur(80px);
        opacity: 0.45;
        transform-origin: center;
      }

      .ambient-orb-one {
        width: 32rem;
        height: 32rem;
        top: -10rem;
        right: -6rem;
        background: radial-gradient(circle, rgba(210, 206, 193, 0.75) 0%, rgba(210, 206, 193, 0) 72%);
        animation: ambientDriftOne 16s ease-in-out infinite alternate;
      }

      .ambient-orb-two {
        width: 26rem;
        height: 26rem;
        bottom: 8%;
        left: -8rem;
        background: radial-gradient(circle, rgba(221, 216, 205, 0.58) 0%, rgba(221, 216, 205, 0) 74%);
        animation: ambientDriftTwo 20s ease-in-out infinite alternate;
      }

      .ambient-haze {
        width: 100%;
        height: 40vh;
        left: 0;
        top: 24vh;
        background: linear-gradient(
          180deg,
          rgba(244, 243, 240, 0) 0%,
          rgba(255, 255, 255, 0.3) 48%,
          rgba(244, 243, 240, 0) 100%
        );
        filter: blur(54px);
        opacity: 0.8;
        animation: ambientBreath 14s ease-in-out infinite;
      }

      .nav-item a:hover {
        border-bottom-color: ${rootStyles.textColor} !important;
        opacity: 0.82;
        transform: translate3d(0, -1px, 0);
      }

      .nav-list:hover .nav-item:not(:hover) a {
        opacity: 0.56;
        filter: blur(0.8px);
      }

      @keyframes calmFade {
        0% {
          opacity: 0;
          transform: translate3d(0, 14px, 0) scale(0.992);
          filter: blur(14px);
        }

        60% {
          opacity: 0.92;
          filter: blur(2px);
        }

        100% {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          filter: blur(0);
        }
      }

      @keyframes calmSettle {
        0% {
          opacity: 0;
          transform: translate3d(0, 24px, 0) scale(0.985);
          filter: blur(20px);
        }

        65% {
          opacity: 0.94;
          filter: blur(3px);
        }

        100% {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          filter: blur(0);
        }
      }

      @keyframes ambientDriftOne {
        0% {
          transform: translate3d(-2%, -1%, 0) scale(1);
        }

        100% {
          transform: translate3d(4%, 3%, 0) scale(1.08);
        }
      }

      @keyframes ambientDriftTwo {
        0% {
          transform: translate3d(0, 0, 0) scale(1);
        }

        100% {
          transform: translate3d(6%, -4%, 0) scale(1.06);
        }
      }

      @keyframes ambientBreath {
        0%,
        100% {
          opacity: 0.58;
          transform: scale(1);
        }

        50% {
          opacity: 0.82;
          transform: scale(1.04);
        }
      }

      .nav-fade,
      .content-col > section,
      .content-col > footer {
        opacity: 0;
        filter: blur(14px);
        animation: calmFade 1.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        will-change: transform, opacity, filter;
      }

      .brand {
        animation-delay: 0.1s;
      }

      .nav-item:nth-child(1) {
        animation-delay: 0.18s;
      }

      .nav-item:nth-child(2) {
        animation-delay: 0.26s;
      }

      .nav-item:nth-child(3) {
        animation-delay: 0.34s;
      }

      .meta-block {
        animation-delay: 0.5s;
      }

      .content-col > section:nth-child(1) {
        animation-delay: 0.22s;
      }

      .content-col > section:nth-child(2) {
        animation-delay: 0.4s;
      }

      .content-col > section:nth-child(3) {
        animation-delay: 0.56s;
      }

      .content-col > section:nth-child(4) {
        animation-delay: 0.72s;
      }

      .content-col > section:nth-child(5) {
        animation-delay: 0.88s;
      }

      .content-col > footer {
        animation-delay: 1s;
      }

      .information-lower {
        animation-name: calmSettle !important;
        animation-duration: 1.6s !important;
      }

      .hero-text,
      .intro-text {
        text-wrap: balance;
      }

      .content-col {
        position: relative;
      }

      .content-col > section,
      .content-col > footer,
      .nav-col > div {
        position: relative;
      }

      @media (prefers-reduced-motion: reduce) {
        .ambient-orb,
        .ambient-haze,
        .nav-fade,
        .content-col > section,
        .content-col > footer,
        .editorial-gap {
          animation: none !important;
          opacity: 1 !important;
          transform: none !important;
        }
      }

      @media (max-width: 768px) {
        .ambient-orb-one {
          width: 20rem;
          height: 20rem;
          top: -5rem;
          right: -7rem;
        }

        .ambient-orb-two {
          width: 18rem;
          height: 18rem;
          left: -6rem;
          bottom: 20%;
        }

        .layout-grid {
          grid-template-columns: 1fr !important;
          padding: 20px !important;
          gap: 40px !important;
        }

        .nav-col {
          position: relative !important;
          top: 0 !important;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          padding-bottom: 20px;
          height: auto !important;
        }

        .meta-block {
          position: static !important;
          max-width: none !important;
          margin-top: 24px;
        }

        .content-col {
          gap: 56px !important;
        }

        .editorial-gap {
          min-height: 160px !important;
        }

        .information-viewport {
          min-height: auto !important;
        }

        .projects-stack {
          gap: 72px !important;
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
        <Route path="/" element={<Navigate to="/information" replace />} />
        <Route
          path="/information"
          element={
            <Layout>
              <InformationPage />
            </Layout>
          }
        />
        <Route
          path="/manifesto"
          element={
            <Layout>
              <ManifestoPage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/index"
          element={
            <Layout>
              <HiddenIndexPage />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/information" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

import { Code, Zap, Shield, ArrowRight } from 'lucide-react'
import './Home.css'

export function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Vibe Coding</h1>
            <p className="hero-subtitle">
              Building modern, responsive, and beautiful web applications with React.js
            </p>
            <div className="hero-buttons">
              <a href="/about" className="btn btn-primary">
                Learn More
                <ArrowRight size={16} />
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Our Solutions?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Code size={32} />
              </div>
              <h3>Modern Development</h3>
              <p>Built with the latest React.js features and best practices for optimal performance and maintainability.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Lightning Fast</h3>
              <p>Optimized with Vite for blazing-fast development and production builds that load in milliseconds.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Production Ready</h3>
              <p>Deployed on Vercel with automatic deployments, global CDN, and enterprise-grade reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's build something amazing together</p>
            <a href="/contact" className="btn btn-primary btn-large">
              Start Your Project
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

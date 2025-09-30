import { Users, Target, Award, Heart } from 'lucide-react'
import './About.css'

export function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-hero">
          <h1>About Vibe Coding</h1>
          <p className="about-subtitle">
            We're passionate about creating exceptional web experiences that make a difference.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to bridge the gap between design and development, 
              Vibe Coding specializes in creating modern, responsive web applications 
              that not only look great but perform exceptionally well.
            </p>
            <p>
              We believe in the power of clean code, user-centered design, and 
              cutting-edge technologies to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Target size={32} />
              </div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Award size={32} />
              </div>
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Heart size={32} />
              </div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality First</h3>
              <p>We never compromise on quality. Every line of code is written with care and attention to detail.</p>
            </div>
            <div className="value-item">
              <h3>User-Centric</h3>
              <p>Our designs and development decisions are always made with the end user in mind.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We stay ahead of the curve by adopting the latest technologies and best practices.</p>
            </div>
            <div className="value-item">
              <h3>Collaboration</h3>
              <p>We work closely with our clients to ensure their vision becomes reality.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

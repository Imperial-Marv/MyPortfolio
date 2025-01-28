import React from "react";
import Image from "next/image"; // ✅ Using Next.js Image component
import "../styles/portfolio.css";

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Marcel Brard</h1>
        <p>IT Engineer | Full-Stack Developer | Procedure Analysis Expert</p>
      </section>

      {/* About Me Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Proactive and results-oriented IT engineer with 4 years of experience in advanced
          support, networks, and Microsoft 365. Skilled in React, Django, Python, QA, and
          procedure analysis. Passionate about leveraging technology to solve complex challenges.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Medical AID</h3>
            <p>
              Machine Learning React application for medical assistance. Features AI diagnostics and
              user-friendly data management.
            </p>
            <a
              href="https://github.com/Mumoide/Medical-AID"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>

          <div className="project-card">
            <h3>Prep & Plate</h3>
            <p>A Django-based recipe and meal planning application for culinary enthusiasts.</p>
            <a
              href="https://github.com/Imperial-Marv/Prep-Plate-/tree/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>

          <div className="project-card">
            <h3>Petscorp</h3>
            <p>
              A Django-powered web application for a pet store. Features donor management, pet
              details, and a user-friendly shopping experience.
            </p>
            <a
              href="https://github.com/Imperial-Marv/Petscorp"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>React, Django, Python</li>
          <li>QA and Procedure Analysis</li>
          <li>Network Security and Microsoft 365</li>
          <li>SQL, AWS, Google Cloud</li>
        </ul>
      </section>

      {/* Hobbies Section */}
      <section className="hobbies-section">
        <h2>BLOG</h2>

        {/* Post 1 */}
        <div className="hobby-card">
          <div className="hobby-header">
            <Image src="/media/me.jpeg" alt="Profile" className="profile-icon" width={50} height={50} />
            <h3>Marcel Brard</h3>
            <span className="hobby-options">...</span>
          </div>
          <Image src="/media/coffee.jpeg" alt="Enjoying Coffee" className="hobby-image" width={500} height={500} />
          <p className="hobby-description">
            Few things in life compare to the simple joy of enjoying a good cup of coffee. From its rich aroma to the comforting warmth, coffee is more than a drink—it's a daily ritual that brings moments of clarity and connection.
          </p>
          <div className="hobby-icons">
            <span>♡</span>
            <span>✈︎</span>
            <span>💬</span>
          </div>
        </div>

        {/* Post 2 */}
        <div className="hobby-card">
          <div className="hobby-header">
            <Image src="/media/me.jpeg" alt="Profile" className="profile-icon" width={50} height={50} />
            <h3>Marcel Brard</h3>
            <span className="hobby-options">...</span>
          </div>
          <Image src="/media/computers.jpeg" alt="Computers" className="hobby-image" width={500} height={500} />
          <p className="hobby-description">
            Sometimes, productivity takes center stage, with screens filled with tasks and projects. But amidst the hustle, I find joy in what I do—turning creativity into solutions and challenges into achievements. It&apos;s not just about working hard; it&apos;s about loving every step of the journey.
          </p>
          <div className="hobby-icons">
            <span>♡</span>
            <span>✈︎</span>
            <span>💬</span>
          </div>
        </div>

        {/* Post 3 */}
        <div className="hobby-card">
          <div className="hobby-header">
            <Image src="/media/me.jpeg" alt="Profile" className="profile-icon" width={50} height={50} />
            <h3>Marcel Brard</h3>
            <span className="hobby-options">...</span>
          </div>
          <Image src="/media/me.jpeg" alt="Portfolio Showcase" className="hobby-image" width={500} height={500} />
          <p className="hobby-description">
            Creating this portfolio has been a journey of passion and dedication, and I hope those who visit can see the heart and effort behind my work. It&apos;s more than a showcase—it&apos;s an invitation. I hope you enjoy what I&apos;ve built and feel inspired to collaborate with me to create something amazing together.
          </p>
          <div className="hobby-icons">
            <span>♡</span>
            <span>✈︎</span>
            <span>💬</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          <a href="mailto:marcel_brard@outlook.com" aria-label="Send an email to Marcel">✉︎</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/marcelbrard"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/marcelbrard
          </a>
        </p>
      </footer>
    </div>
  );
}

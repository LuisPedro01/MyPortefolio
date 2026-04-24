import React, { useState } from 'react';
import { ContentCopy, MailOutline, Place, Schedule, CheckCircleOutline } from '@mui/icons-material';
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { useEmailForm } from "@hooks/useEmailForm";
import "@css/AboutMe.css";

function AboutMe() {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [contentRef, isContentVisible] = useIntersectionObserver();
  const [copied, setCopied] = useState(false);

  const { formData, status, handleChange, handleSubmit } = useEmailForm(
    'https://backendportefolio-production.up.railway.app/send-email'
  );

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('luisprodrigues01@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <div className='aboutme page-shell'>
      <section ref={titleRef} className={`about-hero fade-in ${isTitleVisible ? 'visible' : ''}`}>
        <span>About me</span>
        <h1>I care about building experiences that feel refined, useful and easy to trust.</h1>
        <p>
          I&apos;m Luís Rodrigues from Portugal. I enjoy programming, learning fast and turning ideas
          into interfaces that are clearer, more modern and more usable across devices.
        </p>
      </section>

      <section ref={contentRef} className={`about-grid fade-in ${isContentVisible ? 'visible' : ''}`}>
        <div className='about-story glass-panel'>
          <h2>How I work</h2>
          <p>
            I like combining visual sensitivity with practical engineering. That means cleaner hierarchy,
            stronger spacing, better responsiveness and implementations that stay maintainable as the project grows.
          </p>
          <p>
            My background includes academic work in computer engineering and hands-on professional experience
            building software products, interfaces and technical solutions with real users in mind.
          </p>

          <div className='about-highlights'>
            <div>
              <MailOutline />
              <span>Fast communication and product collaboration</span>
            </div>
            <div>
              <Place />
              <span>Based in Portugal, open to remote opportunities</span>
            </div>
            <div>
              <Schedule />
              <span>Focused on responsive UI, frontend and full-stack delivery</span>
            </div>
          </div>
        </div>

        <aside className='about-sidebar'>
          <div className='contact-card glass-panel'>
            <span className='contact-label'>Quick contact</span>
            <h3>Let&apos;s talk about your next website or product.</h3>
            <p>I&apos;m available to discuss freelance work, collaborations and developer roles.</p>
            <button type="button" className='copy-btn' onClick={handleCopyEmail}>
              <ContentCopy />
              {copied ? 'Email copied' : 'Copy email'}
            </button>
            <a href='mailto:luisprodrigues01@gmail.com' className='email-link'>
              luisprodrigues01@gmail.com
            </a>
          </div>

          <div className='availability-card glass-panel'>
            <span><CheckCircleOutline /> Current focus</span>
            <p>Modernizing interfaces, polishing portfolios, dashboards and product pages with responsive execution.</p>
          </div>
        </aside>
      </section>

      <section className='contact-section'>
        <div className='section-heading'>
          <span>Contact</span>
          <h2>Send me a message.</h2>
          <p>If you have an opportunity, an idea or want help improving a digital product, I&apos;d be happy to hear from you.</p>
        </div>

        <form className="email-form glass-panel" onSubmit={handleSubmit}>
          <div className='form-row'>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input-field"
              value={formData.name || ''}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input-field"
              value={formData.email || ''}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Tell me a little about what you need..."
            className="textarea-field"
            value={formData.message || ''}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="submit-btn-email"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send message'}
          </button>

          {status === 'success' && <p className="status-msg success">Message sent successfully.</p>}
          {status === 'error' && <p className="status-msg error">There was an error sending the message. Please try again.</p>}
        </form>
      </section>
    </div>
  );
}

export default AboutMe;
